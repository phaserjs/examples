var fs = require('fs');
var dirTree = require('directory-tree');

var rootDir = './public/src/';
var examplesJSON = './public/examples.json';

var filteredTree = dirTree(rootDir, ['.js', '.json']);

filteredTree = JSON.stringify(filteredTree);

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
