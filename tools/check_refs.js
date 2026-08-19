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

const allFiles = getAllFiles(rootDir, ['.html', '.css', '.js']);
const allFilesOnDisk = getAllFiles(rootDir).map(p => p.toLowerCase());
const allFilesOnDiskMap = new Map();
getAllFiles(rootDir).forEach(p => allFilesOnDiskMap.set(p.toLowerCase(), p));

const missingFiles = [];
const caseMismatches = [];

const regex = /(?:href|src|url)\s*(=|\()\s*['"]?([^'"\)\s>]+)['"]?/g;

allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = regex.exec(content)) !== null) {
        let p = match[2];
        if (p.startsWith('http') || p.startsWith('data:') || p.startsWith('#')) continue;
        
        // Remove hash and query string
        p = p.split('#')[0].split('?')[0];
        
        if (p === '/' || p === '') continue;

        // Resolve absolute paths against rootDir
        let absPath;
        if (p.startsWith('/')) {
            absPath = path.join(rootDir, p.replace(/\//g, '\\'));
        } else {
            absPath = path.resolve(path.dirname(file), p.replace(/\//g, '\\'));
        }

        const lowerAbsPath = absPath.toLowerCase();

        if (!allFilesOnDiskMap.has(lowerAbsPath)) {
            missingFiles.push({ file: path.relative(rootDir, file), ref: p });
        } else {
            const actualDiskPath = allFilesOnDiskMap.get(lowerAbsPath);
            if (actualDiskPath !== absPath) {
                caseMismatches.push({ file: path.relative(rootDir, file), ref: p, actual: path.relative(rootDir, actualDiskPath) });
            }
        }
    }
});

console.log("MISSING FILES:");
console.log(missingFiles);
console.log("\nCASE MISMATCHES:");
console.log(caseMismatches);
