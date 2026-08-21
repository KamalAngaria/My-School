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

    console.log("Build complete! Production output is in /dist");
}

try {
    build();
} catch (error) {
    console.error("Build failed:", error);
    process.exit(1);
}
