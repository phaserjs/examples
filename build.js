const fs = require('fs');
const dirTree = require('directory-tree');
const indexer = require('./search/index-documents');
const flattenPath = require('./tools/flatten-path');

const rootDir = './public/src/';
const examplesJSON = './public/examples.json';
const recentExamplesJSON = './public/recent-examples.json';

var filteredTree = dirTree(rootDir, {
    extensions: /\.(js|json)$/,
    exclude: /(3\.24)/,
    attributes: ["atimeMs", "birthtimeMs"]
});

indexer.index(filteredTree);

filteredTree = JSON.stringify(filteredTree, null, 2);

filteredTree = filteredTree.replace(/public\//g, '');
filteredTree = filteredTree.replace(/public\\\\/g, '');

// Get the 10 more recent examples
const examplesFlatten = flattenPath(JSON.parse(filteredTree))
    .filter(x => x.path.endsWith("js"))
    .sort((a, b) => b.birthtimeMs - a.birthtimeMs)
    .slice(0, 30);

// Save the 10 more recent examples
fs.writeFile(recentExamplesJSON, JSON.stringify(examplesFlatten, null, 4), function (error) {
    if (error)
    {
        throw error;
    }
    else
    {
        console.log('* recent-examples.json saved');
    }
});

//  Save the JSON
fs.writeFile(examplesJSON, filteredTree, function (error) {

    if (error)
    {
        throw error;
    }
    else
    {
        console.log('* examples.json saved');
    }

});
