const http = require('http');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:8000';
const DIST_DIR = path.resolve(__dirname, '..', 'dist');

async function checkUrl(url) {
    return new Promise((resolve) => {
        http.get(url, (res) => {
            resolve({ url, status: res.statusCode });
        }).on('error', (e) => {
            resolve({ url, status: 500, error: e.message });
        });
    });
}

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

async function runTests() {
    console.log("Starting Production Dist Test...");
    
    // 1. Test HTML Pages
    const htmlFiles = getHtmlFiles(DIST_DIR);
    const pageUrls = htmlFiles.map(file => {
        let rel = path.relative(DIST_DIR, file).replace(/\\/g, '/');
        return `${BASE_URL}/${rel}`;
    });

    let failures = 0;
    const assetsToTest = new Set();
    const regex = /(?:href|src|url)\s*(=|\()\s*['"]?([^'"\)\s>]+)['"]?/g;

    console.log(`\nTesting ${pageUrls.length} pages directly...`);
    for (const url of pageUrls) {
        const result = await checkUrl(url);
        if (result.status !== 200) {
            console.error(`FAIL: ${url} (Status: ${result.status})`);
            failures++;
        } else {
            console.log(`PASS: ${url}`);
        }
    }

    // 2. Extract and test all internal assets from HTML files
    htmlFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        let match;
        while ((match = regex.exec(content)) !== null) {
            let p = match[2];
            if (p.startsWith('http') || p.startsWith('data:') || p.startsWith('#')) continue;
            p = p.split('#')[0].split('?')[0]; // strip hash/query
            if (p === '/' || p === '') {
                assetsToTest.add(`${BASE_URL}/`);
            } else if (p.startsWith('/')) {
                assetsToTest.add(`${BASE_URL}${p}`);
            } else {
                // relative path logic (simplified as we use absolute mostly)
                const dir = '/' + path.relative(DIST_DIR, path.dirname(file)).replace(/\\/g, '/');
                assetsToTest.add(`${BASE_URL}${dir}/${p}`.replace(/(?<!:)\/\//g, '/'));
            }
        }
    });

    console.log(`\nTesting ${assetsToTest.size} unique assets (Images, CSS, JS, Fonts, SVGs)...`);
    let assetFailures = { img: 0, css: 0, js: 0, font: 0, svg: 0, other: 0 };
    
    for (const url of assetsToTest) {
        const result = await checkUrl(url);
        if (result.status !== 200 && result.status !== 304) {
            console.error(`FAIL: ${url} (Status: ${result.status})`);
            failures++;
            if (url.endsWith('.webp') || url.endsWith('.png')) assetFailures.img++;
            else if (url.endsWith('.css')) assetFailures.css++;
            else if (url.endsWith('.js')) assetFailures.js++;
            else if (url.endsWith('.woff2')) assetFailures.font++;
            else if (url.endsWith('.svg')) assetFailures.svg++;
            else assetFailures.other++;
        }
    }

    console.log("\n--- TEST RESULTS ---");
    console.log(`Images: ${assetFailures.img} failures`);
    console.log(`CSS: ${assetFailures.css} failures`);
    console.log(`JS: ${assetFailures.js} failures`);
    console.log(`Fonts: ${assetFailures.font} failures`);
    console.log(`Icons/SVG: ${assetFailures.svg} failures`);
    
    if (failures === 0) {
        console.log("READY FOR CLOUDFLARE");
    } else {
        console.log(`BLOCKED - ${failures} failures found`);
    }
}

runTests();
