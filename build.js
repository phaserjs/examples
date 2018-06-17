var fs = require('fs');
var dirTree = require('directory-tree');
var indexer = require('./search/index-documents');

var rootDir = './public/src/';
var examplesJSON = './public/examples.json';

var filteredTree = dirTree(rootDir, ['.js', '.json']);

indexer.index(filteredTree);

filteredTree = JSON.stringify(filteredTree, null, 2);

filteredTree = filteredTree.replace(/public\//g, '');
filteredTree = filteredTree.replace(/public\\\\/g, '');

//  Save the JSON

fs.writeFile(examplesJSON, filteredTree, function (error) {

    if (error)
    {
        throw error;
    }
    else
    {
        console.log('examples.json saved');
    }

});
