const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'public/3.55/src');

// Function to search for all .js files in the directory and its subdirectories
const getJsFiles = (dir) => {
    let jsFiles = [];
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            jsFiles = jsFiles.concat(getJsFiles(fullPath));
        }
        else if (file.endsWith('.js')) {
            jsFiles.push(fullPath);
        }
    });

    return jsFiles;
};

// Function to modify files
const modifyFile = (filePath) => {
    let fileContent = fs.readFileSync(filePath, 'utf8');

    const preloadPattern = /preload\s*\(\s*\)\s*\n\s*{/g;

    // Check if file contains 'preload () {'
    if (preloadPattern.test(fileContent)) {
        console.log(`Modifying file: ${filePath}`);

        // Replace 'preload () {' with 'preload () {\n        this.load.setBaseURL('https://cdn.phaserfiles.com/v385');'
        fileContent = fileContent.replace(preloadPattern, match => `${match}\n        this.load.setBaseURL('https://cdn.phaserfiles.com/v355');`);

        // Write the modified content back to the file
        fs.writeFileSync(filePath, fileContent, 'utf8');
    }
};

// Main function to execute the script
const main = () => {
    const jsFiles = getJsFiles(directoryPath);

    jsFiles.forEach((file) => {
        modifyFile(file);
    });

    console.log('Script has completed.');
};

main();
