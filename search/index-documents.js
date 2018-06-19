var fs = require('fs');

//toggles debug output.
var debug = false;
//list of directories containing files which should be excluded from the index.
var excludedDirectories = [];
//files that were excluded due to being part of a bootable project
var excludedFiles = [];
//the path to output the index file
var indexFile           = 'public/documentIndex.json';
//exclude files and folders beginning with `_` or `archived`
var excludeDocuments    = /\/(?:archived|_)/;
//includes files ending with `.json` or `.js`
var includeDocuments    = /\.(?:js|json)$/;
//it is bootable if the path ends in boot.json
var isBootableRegex = /boot\.json$/;

function getContainingDirectory(filePath) {
    var parts    = filePath.split('/');

    //remove last segment of path
    parts.pop();

    //join the rest of the path
    return parts.join('/');
}

function isBootableProject(path){
    return isBootableRegex.test(path);
}

function pathIsExcluded(path){
    //we do want to include the actual bootable json in the search, so we dont exclude it
    if(isBootableProject(path)){

        return false;
    }

    var containingDirectory = getContainingDirectory(path);
    if(excludedDirectories.includes(containingDirectory)){
        excludedFiles.push(path);
        return true;
    }

    return false;
}

function excludeIfBootableProject(path) {
    if (isBootableProject(path)) {
        var directory = getContainingDirectory(path);

        excludedDirectories.push(directory);
    }
}

function getDocuments(tree, documents) {
    var path = tree.path;

    if (includeDocuments.test(path)) {
        if (excludeDocuments.test(path)) {
            excludedFiles.push(path);
        }
        else {
            documents.push(path);

            excludeIfBootableProject(path);
        }
    }
    else {
        excludedFiles.push(path);
    }

    if (!tree.children) {
        return documents;
    }

    for (var i in tree.children) {
        documents = getDocuments(tree.children[i], documents);
    }

    return documents;
}

function wordMap(string) {
    var map   = {},
        words = string.split(/[-\[\],:<>+*=;{}'().\s\d/\\]+/);

    words.forEach(function (word) {
        word = word.toLowerCase();
        if (!map.hasOwnProperty(word)) {
            map[word] = 0;
        }

        map[word]++;
    });

    return map;
}

function indexDocument(documentPath) {

    var path     = documentPath.replace("public/src/", "");
    var title    = path.replace(".json", "");
    var contents = fs.readFileSync(documentPath).toString();

    title = title.replace(".js", "");

    return {
        path       : path,
        titleWords : wordMap(title),
        bodyWords  : wordMap(contents)
    }
}

function debugOutput() {
    if(debug !== true){
        return;
    }

    excludedFiles.forEach(function(file){
        console.log("Excluded File: " + file);
    });
}

function index(filteredTree) {

    var documents = getDocuments(filteredTree, []);

    var index = {};
    documents.forEach(function (path) {
        if(pathIsExcluded(path)){
            return;
        }

        var document         = indexDocument(path);
        index[document.path] = document;
    });

    var indexCount = Object.keys(index).length;
    var excludeCount = excludedFiles.length;

    console.log("Indexed " + indexCount + " Files. Excluded " + excludeCount + " Files.");

    debugOutput();

    if(debug){
        //use prettiefied version for dev and testing
        fs.writeFileSync(indexFile, JSON.stringify(index, null, 2))
    }
    else {
        //use minified version for production
        fs.writeFileSync(indexFile, JSON.stringify(index))
    }

}

module.exports = {
    index : index
};