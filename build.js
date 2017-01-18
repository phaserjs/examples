var fs = require('fs');
var dirTree = require('directory-tree');

var rootDir = './public/src/';
var examplesJSON = './public/examples.json';

var filteredTree = dirTree(rootDir, ['.js']);

//  Save the JSON

fs.writeFile(examplesJSON, JSON.stringify(filteredTree), function (error) {

    if (error)
    {
        throw error;
    }
    else
    {
        console.log('examples.json saved');
    }

});
