const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'gidha-store');
const destDir = path.join(require('os').homedir(), 'Desktop', 'gidha-store-flat');

// Create destDir
if (fs.existsSync(destDir)) {
    fs.rmSync(destDir, { recursive: true, force: true });
}
fs.mkdirSync(destDir);

// Collect all files
const allFiles = [];
function walk(dir) {
    const list = fs.readdirSync(dir);
    for (const file of list) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else {
            allFiles.push(fullPath);
        }
    }
}
walk(srcDir);

// Copy files and flatten
for (const file of allFiles) {
    if (file.endsWith('.git') || file.includes('.git\\')) continue;
    
    const fileName = path.basename(file);
    const destPath = path.join(destDir, fileName);
    fs.copyFileSync(file, destPath);
}

// Update HTML files to use flat links
const htmlFiles = fs.readdirSync(destDir).filter(f => f.endsWith('.html'));

for (const html of htmlFiles) {
    const fullPath = path.join(destDir, html);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace paths
    content = content.replace(/\.\.?\/assets\/css\//g, './');
    content = content.replace(/\.\.?\/assets\/images\//g, './');
    content = content.replace(/\.\.?\/assets\/js\//g, './');
    content = content.replace(/\.\.?\/pages\//g, './');
    content = content.replace(/\.\/pages\//g, './');
    content = content.replace(/\"\.\.\/index\.html\"/g, '"./index.html"');
    
    fs.writeFileSync(fullPath, content);
}

console.log('Flattened successfully to ' + destDir);
