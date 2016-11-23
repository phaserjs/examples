var fs = require('fs');

var output = { files: [] };

var examples = fs.readdir('./public/src', function (err, files) {

    files.forEach(function(filename) {

        output.files.push(filename);

    });

    //  Save the JSON

    fs.writeFile('./public/examples.json', JSON.stringify(output), function (error) {

        if (error)
        {
            throw error;
        }
        else
        {
            console.log('examples.json saved');
        }

    });

});