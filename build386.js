const fs = require('fs');
const dirTree = require('directory-tree');
const indexer = require('./search/index-documents');
const flattenPath = require('./tools/flatten-path');

const rootDir = './public/3.86/src/';
const examplesJSON = './public/3.86/examples.json';
const recentExamplesJSON = './public/3.86/recent-examples.json';

var filteredTree = dirTree(rootDir, {
    extensions: /\.(js|json)$/,
    exclude: /(3\.24)/,
    exclude: /(3\.55)/,
    attributes: ["birthtimeMs"]
});

indexer.index(filteredTree);

filteredTree = JSON.stringify(filteredTree, null, 2);

filteredTree = filteredTree.replaceAll(`public/3.86/`, ``);
filteredTree = filteredTree.replaceAll(`public\\3.86\\`, ``);

const lastExamplesQuantity = 30;
// Get the 30 more recent examples
const examplesFlatten = flattenPath(JSON.parse(filteredTree))
    .filter(x => x.path.endsWith("js"))
    .sort((a, b) => b.birthtimeMs - a.birthtimeMs)
    .slice(0, lastExamplesQuantity);

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
