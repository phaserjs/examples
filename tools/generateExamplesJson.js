const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'public', 'src'); // Adjust to match your structure
const OUTPUT = path.join(__dirname, '..', 'examples.json');

function walk(dir) {
    const dirents = fs.readdirSync(dir, { withFileTypes: true });
    return dirents.map(dirent => {
        const res = path.join(dir, dirent.name);
        const relative = path.relative(SRC_DIR, res).replace(/\\/g, '/');
        if (dirent.isDirectory()) {
            return {
                name: dirent.name,
                path: 'src/' + relative,
                children: walk(res)
            };
        } else {
            return {
                name: dirent.name,
                path: 'src/' + relative
            };
        }
    });
}

const tree = {
    name: 'examples',
    children: walk(SRC_DIR)
};

fs.writeFileSync(OUTPUT, JSON.stringify(tree, null, 2), 'utf8');
console.log(`✅ Generated: ${OUTPUT}`);
