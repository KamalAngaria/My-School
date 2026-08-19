const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

function getAllFiles(dir, extFilter) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllFiles(filePath, extFilter));
        } else {
            if (!extFilter || extFilter.some(ext => file.endsWith(ext))) {
                results.push(filePath);
            }
        }
    });
    return results;
}

const allAssetFiles = getAllFiles(path.join(rootDir, 'assets'));
const referencedAssets = new Set();
const allCodeFiles = getAllFiles(rootDir, ['.html', '.css', '.js']);

const regex = /(?:href|src|url)\s*(=|\()\s*['"]?([^'"\)\s>]+)['"]?/g;

allCodeFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = regex.exec(content)) !== null) {
        let p = match[2];
        if (p.startsWith('http') || p.startsWith('data:') || p.startsWith('#')) continue;
        p = p.split('#')[0].split('?')[0];
        if (p === '/' || p === '') continue;

        let absPath;
        if (p.startsWith('/')) {
            absPath = path.join(rootDir, p.replace(/\//g, '\\'));
        } else {
            absPath = path.resolve(path.dirname(file), p.replace(/\//g, '\\'));
        }
        referencedAssets.add(absPath.toLowerCase());
    }
});

const orphaned = [];
allAssetFiles.forEach(file => {
    if (!referencedAssets.has(file.toLowerCase())) {
        orphaned.push(path.relative(rootDir, file));
    }
});

console.log("ORPHANED ASSETS:");
console.log(orphaned);
