var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    parent: 'phaser-example',
    pixelArt: true,
    scene: {
        create: create
    }
};

var totalTests = 0;
var testsPassed = 0;
var assert = (message, condition) => {
    totalTests++;
    if (condition) testsPassed++;
    console.assert(condition, message)
};

var game = new Phaser.Game(config);

function create ()
{
    // -- BASIC ARRAY LOADING  ---

    var level = [
        [  0,  0, -1, -1, -1,  0,  0 ],
        [  0,  0,  0, 10,  0,  0,  0 ],
        [  0,  0, 14, 13, 14,  0,  0 ],
        [  0,  0,  0,  0,  0,  0,  0 ],
        [  0,  0,  0,  0,  0,  0,  0 ],
        [ 14, 14, 14, 14, 14, 14, 14 ]
    ];
    var map = this.make.tilemap({ data: level, tileWidth: 16, tileHeight: 16, insertNull: false });

    assert('Tile width should be 16',
        map.tileWidth === 16 && map.layers[0].tileWidth === 16
    );
    assert('Tile height should be 16',
        map.tileHeight === 16 && map.layers[0].tileHeight === 16
    );
    assert('widthInPixels should be 16 * 7',
        map.widthInPixels === 16 * 7 && map.layers[0].widthInPixels === 16 * 7
    );
    assert('heightInPixels should be 16 * 6',
        map.heightInPixels === 16 * 6 && map.layers[0].heightInPixels === 16 * 6
    );
    assert('Map should have 1 layer',
        map.layers.length === 1
    );


    // -- ARRAY LOADING WITH NULL INSERTION ---

    var level = [
        [   0,   0,  -1, null,  -1,   0,   0 ],
        [   0,   0,   0,   10,   0,   0,   0 ],
        [   0,   0,  14,   13,  14,   0,   0 ]
    ];
    var map = this.make.tilemap({ data: level, tileWidth: 32, tileHeight: 32, insertNull: true });

    assert('Tile width should be 32',
        map.tileWidth === 32 && map.layers[0].tileWidth === 32
    );
    assert('Tile height should be 32',
        map.tileHeight === 32 && map.layers[0].tileHeight === 32
    );
    assert('widthInPixels should be 32 * 7',
        map.widthInPixels === 32 * 7 && map.layers[0].widthInPixels === 32 * 7
    );
    assert('heightInPixels should be 32 * 3',
        map.heightInPixels === 32 * 3 && map.layers[0].heightInPixels === 32 * 3
    );
    assert('Map should have 1 layer',
        map.layers.length === 1
    );
    assert('Tile at (2, 0) should be null',
        map.layers[0].data[0][2] === null
    );
    assert('Tile at (3, 0) should be null',
        map.layers[0].data[0][3] === null
    );
    assert('Tile at (4, 0) should be null',
        map.layers[0].data[0][4] === null
    );

    console.log(`${testsPassed} / ${totalTests} tests passed`);
}

