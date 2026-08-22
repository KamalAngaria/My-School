const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

// Utility to recursively copy directories. Returns true if any file was copied.
function copyDirSync(src, dest) {
    let copiedAnything = false;
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (let entry of entries) {
        if (entry.name === 'build.js' || entry.name === 'dist') continue;
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            const childCopied = copyDirSync(srcPath, destPath);
            if (childCopied) {
                copiedAnything = true;
            }
        } else {
            if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
            fs.copyFileSync(srcPath, destPath);
            copiedAnything = true;
        }
    }
    return copiedAnything;
}

// Utility to recursively find all HTML files
function getHtmlFiles(dir, fileList = []) {
    if (!fs.existsSync(dir)) return fileList;
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (let file of files) {
        const fullPath = path.join(dir, file.name);
        if (file.isDirectory()) {
            getHtmlFiles(fullPath, fileList);
        } else if (file.name.endsWith('.html')) {
            fileList.push(fullPath);
        }
    }
    return fileList;
}

// Main Build Function
function build() {
    console.log("Starting production build...");
    
    // 1. Clean and recreate dist
    if (fs.existsSync(distDir)) {
        fs.rmSync(distDir, { recursive: true, force: true });
    }
    fs.mkdirSync(distDir, { recursive: true });

    // 2. Copy static assets
    console.log("Copying static assets...");
    const foldersToCopy = ['assets', 'styles', 'scripts'];
    for (let folder of foldersToCopy) {
        const sourceDir = path.join(rootDir, folder);
        if (fs.existsSync(sourceDir)) {
            copyDirSync(sourceDir, path.join(distDir, folder));
        }
    }

    // 3. Copy pages structure
    console.log("Copying pages structure...");
    if (fs.existsSync(path.join(rootDir, 'pages'))) {
        copyDirSync(path.join(rootDir, 'pages'), path.join(distDir, 'pages'));
    }


    // 4. Copy index.html
    if (fs.existsSync(path.join(rootDir, 'index.html'))) {
        fs.copyFileSync(path.join(rootDir, 'index.html'), path.join(distDir, 'index.html'));
    }

    // 4.1 Copy SEO files
    if (fs.existsSync(path.join(rootDir, 'robots.txt'))) {
        fs.copyFileSync(path.join(rootDir, 'robots.txt'), path.join(distDir, 'robots.txt'));
    }
    if (fs.existsSync(path.join(rootDir, 'sitemap.xml'))) {
        fs.copyFileSync(path.join(rootDir, 'sitemap.xml'), path.join(distDir, 'sitemap.xml'));
    }

    // 5. Inject Layouts
    console.log("Injecting shared layouts...");
    const headerPath = path.join(rootDir, 'layouts/public/header.html');
    const footerPath = path.join(rootDir, 'layouts/public/footer.html');
    
    let headerContent = '';
    let footerContent = '';
    
    if (fs.existsSync(headerPath)) {
        headerContent = fs.readFileSync(headerPath, 'utf8');
    }
    if (fs.existsSync(footerPath)) {
        footerContent = fs.readFileSync(footerPath, 'utf8');
    }

    const htmlFiles = getHtmlFiles(distDir);
    
    htmlFiles.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        // Simple string replacement matching the exact empty div tag
        // Account for possible whitespace inside the div
        const headerRegex = /<div\s+id=["']global-header["']\s*>[\s\S]*?<\/div>/i;
        const footerRegex = /<div\s+id=["']global-footer["']\s*>[\s\S]*?<\/div>/i;

        if (headerContent && headerRegex.test(content)) {
            content = content.replace(headerRegex, `<div id="global-header">\n${headerContent}\n</div>`);
            modified = true;
        }

        if (footerContent && footerRegex.test(content)) {
            content = content.replace(footerRegex, `<div id="global-footer">\n${footerContent}\n</div>`);
            modified = true;
        }

        if (modified) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Injected layouts into: ${path.relative(distDir, file)}`);
        }
    });

    // 6. CSS Bundling
    console.log("Bundling CSS...");
    const coreFiles = [
        '/styles/tokens.css',
        '/styles/typography.css',
        '/styles/components/icon.css',
        '/styles/base.css',
        '/styles/components/header.css',
        '/styles/components/footer.css'
    ];

    let coreContent = '';
    for (const file of coreFiles) {
        const fullPath = path.join(rootDir, file);
        if (fs.existsSync(fullPath)) {
            let fileContent = fs.readFileSync(fullPath, 'utf8');
            if (file.endsWith('base.css')) {
                fileContent = fileContent.replace(/@import\s+url\([^)]+\);\s*/g, '');
            }
            coreContent += `/* --- ${path.basename(file)} --- */\n` + fileContent + '\n';
        }
    }
    const coreBundlePath = path.join(distDir, 'styles', 'core.bundle.css');
    if (!fs.existsSync(path.dirname(coreBundlePath))) fs.mkdirSync(path.dirname(coreBundlePath), { recursive: true });
    fs.writeFileSync(coreBundlePath, coreContent);

    htmlFiles.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');
        const linkRegex = /<link\s+rel=["']stylesheet["']\s+href=["'](.*?)["']\s*>/gi;
        const links = [...content.matchAll(linkRegex)];
        
        if (links.length > 0) {
            let pageSpecificFiles = [];
            
            for (const match of links) {
                const href = match[1];
                // Remove the old link tag
                content = content.replace(match[0], '');
                
                if (!coreFiles.includes(href) && href !== '/styles/components/icon.css') {
                    pageSpecificFiles.push(href);
                }
            }
            
            // Clean up empty lines left behind by link removal
            content = content.replace(/^[ \t]*\n/gm, '');
            // Restore one newline before </head> for cleanliness if needed, or just let it be.
            
            let pageBundleContent = '';
            for (const href of pageSpecificFiles) {
                const fullPath = path.join(rootDir, href);
                if (fs.existsSync(fullPath)) {
                    pageBundleContent += `/* --- ${path.basename(href)} --- */\n` + fs.readFileSync(fullPath, 'utf8') + '\n';
                }
            }
            
            const pageName = path.basename(file, '.html');
            const bundleName = `${pageName}.bundle.css`;
            const bundlePath = path.join(distDir, 'styles', 'pages', bundleName);
            
            if (pageBundleContent.trim().length > 0) {
                if (!fs.existsSync(path.dirname(bundlePath))) fs.mkdirSync(path.dirname(bundlePath), { recursive: true });
                fs.writeFileSync(bundlePath, pageBundleContent);
            }
            
            const newLinks = `    <!-- Bundled CSS -->\n    <link rel="stylesheet" href="/styles/core.bundle.css">\n` + 
                             (pageBundleContent.trim().length > 0 ? `    <link rel="stylesheet" href="/styles/pages/${bundleName}">\n` : '');
            
            content = content.replace('</head>', newLinks + '</head>');
            fs.writeFileSync(file, content, 'utf8');
        }
    });

    console.log("Build complete! Production output is in /dist");
}

try {
    build();
} catch (error) {
    console.error("Build failed:", error);
    process.exit(1);
}
