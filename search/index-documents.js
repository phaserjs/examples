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
        importantWords : wordMap(title),
        words          : wordMap(contents)
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

function scoreDocument(document, terms) {
    var score = 0;

    for (var i in document.words) {
        terms.forEach(function (term) {
            term = term.toLowerCase();
            if (i === term) {
                score += document.words[i];
            }
        });
    }
    for (var i in document.importantWords) {
        terms.forEach(function (term) {
            term = term.toLowerCase();
            if (i === term) {
                score += document.importantWords[i] * 10;
            }
        });
    }

    return score;
}


function search(phrase) {
    var terms = phrase.split(/[-\[\],:<>+*=;{}'().\s\d/\\]+/);
    var index = JSON.parse(fs.readFileSync(indexFile));

    var results = [];
    for (var i in index) {
        var score = scoreDocument(index[i], terms);
        results.push({
            path  : i,
            score : score
        });

        console.log(score);
    }

    results.sort(function (a, b) {
        var y = a.score;
        var x = b.score;
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });

    results = results.slice(0, 20);

    console.log(results);
}

module.exports = {
    index : index,
    search : search
};