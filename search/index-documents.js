var fs = require('fs');

var indexFile = 'public/documentIndex.json';
var excludeDocuments = /archived/;
var includeDocuments = /\.js$/;

function getDocuments(tree, documents) {
    var path = tree.path;

    if (includeDocuments.test(path)) {
        if (!excludeDocuments.test(path)) {
            documents.push(path);
        }
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
    var title    = path.replace(".js", "");
    var contents = fs.readFileSync(documentPath).toString();

    return {
        path           : path,
        titleWords : wordMap(title),
        bodyWords          : wordMap(contents)
    }
}

function index(filteredTree) {

    var documents = getDocuments(filteredTree, []);

    var index = {};
    documents.forEach(function (path, i) {
        var document         = indexDocument(path);
        index[document.path] = document
    });

    fs.writeFileSync(indexFile, JSON.stringify(index, null, 2))
}

module.exports = {
    index : index
};