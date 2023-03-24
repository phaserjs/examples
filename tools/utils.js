const fs = require("fs-extra");
const p = require("path");

const maxDepth = 25;

const getExamples = (examples, path, depth = 0) => {
    const files = fs.readdirSync(p.resolve(path));
    if (
        depth > maxDepth ||
        path.includes("archived") ||
        path.includes("3.24")
    ) {
        return;
    }

    if (files.includes("boot.json")) {
        examples.push({
            url: path + "/" + "boot.json",
            path: p.resolve(path, "boot.json"),
        });
    } else {
        for (let file of files) {
            const fileInfo = fs.statSync(p.resolve(path, file));
            if (fileInfo.isDirectory() && file[0] !== "_") {
                getExamples(examples, path + "/" + file, depth + 1);
            } else if (file[0] !== "_" && file[0] !== ".") {
                examples.push({
                    url: path + "/" + file,
                    path: p.resolve(path, file),
                });
            }
        }
    }
};

const getScreenshots = (screenshots, path, depth = 0) => {

    const files = fs.readdirSync(path);

    if (depth > maxDepth) {
        return;
    }

    for (let file of files) {

        const loc = p.resolve(path, file);

        const fileInfo = fs.statSync(loc);

        if (fileInfo.isDirectory())
        {
            getScreenshots(screenshots, loc, depth + 1);
        }
        else
        {
            // console.log(loc);
            screenshots.push(loc);
        }
    }

};

module.exports = {
    getExamples,
    getScreenshots,
};
