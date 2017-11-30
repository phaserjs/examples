var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    parent: 'phaser-example',
    pixelArt: true,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var totalTests = 0;
var testsPassed = 0;
var assert = (message, condition) => {
    totalTests++;
    if (condition) testsPassed++;
    console.assert(condition, message);
};

var game = new Phaser.Game(config);

function preload() {
    this.load.tilemapJSON('mario', 'assets/tilemaps/maps/super-mario.json');
    this.load.image('mario-tiles', 'assets/tilemaps/tiles/super-mario.png');

    this.load.image('catastrophi-tiles', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');
    this.load.tilemapCSV('catastrophi-level3', 'assets/tilemaps/csv/catastrophi_level3.csv');
}

function create() {

    // --- FILL ---

    var level = [
        [ 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0 ]
    ]
    var map = this.make.tilemap({ data: level, tileWidth: 16, tileHeight: 16 });
    var tiles = map.addTilesetImage('mario-tiles');
    var layer = map.createDynamicLayer(0, tiles, 0, 0);

    map.fill(11);
    assert('Fill without region specified should fill whole map',
        map.filterTiles(t => t.index === 11).length === 5 * 6
    );

    map.fill(12, 0, 0, 1, 1);
    assert('Fill with a 1x1 should fill one tile',
        map.filterTiles(t => t.index === 12).length === 1
    );

    map.fill(13, 2, 1, 2, 3);
    assert('Fill with a 2x3 should fill 6 tiles',
        map.filterTiles(t => t.index === 13).length === 6
    );

    map.fill(14, -2, -1, 3, 2);
    assert('Fill outside of bounds should be clipped',
        map.filterTiles(t => t.index === 14).length === 1
    );


    // --- SHUFFLE ---

    var level = [
        [ 1,  2,  3,  4],
        [ 5,  6,  7,  8],
        [ 9, 10, 11, 12],
        [13, 14, 15, 16]
    ]
    var map = this.make.tilemap({ data: level, tileWidth: 16, tileHeight: 16 });
    var tiles = map.addTilesetImage('mario-tiles');
    var layer = map.createDynamicLayer(0, tiles, 0, 100);

    map.shuffle();
    var sortedIndexes = map.getTilesWithin()
        .map(t => t.index)
        .sort((a, b) => a - b);
    assert('Shuffle should add or remove tile indexes',
        are1DArrayEqual(sortedIndexes, [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ])
    );


    // --- RANDOMIZE ---

    var level = [
        [ 1,  2,  3,  4],
        [ 5,  6,  7,  8],
        [ 9, 10, 11, 12],
        [13, 14, 15, 16]
    ]
    var map = this.make.tilemap({ data: level, tileWidth: 16, tileHeight: 16 });
    var tiles = map.addTilesetImage('mario-tiles');
    var layer = map.createDynamicLayer(0, tiles, 0, 200);

    map.randomize();
    var incorrectIndexes = map.filterTiles(t => t.index < 1 || t.index > 16);
    assert('Randomize should not add tile indexes that are not in the map',
        incorrectIndexes.length === 0
    );

    map.randomize(0, 0, 4, 4, [ 17, 18, 19 ]);
    var incorrectIndexes = map.filterTiles(t => t.index < 17 || t.index > 19);
    assert('Randomize should not use tile indexes other than those provided',
        incorrectIndexes.length === 0
    );


    // --- REPLACE & SWAP ---

    var level = [
        [ 1,  1,  1,  1],
        [ 2,  2,  2,  2],
        [ 3,  3, 13, 13],
        [13, 14, 15, 16]
    ]
    var map = this.make.tilemap({ data: level, tileWidth: 16, tileHeight: 16 });
    var tiles = map.addTilesetImage('mario-tiles');
    var layer = map.createDynamicLayer(0, tiles, 0, 300);

    map.replaceByIndex(1, 20);
    assert('Replace should change all ID 1 -> ID 20',
        map.filterTiles(t => t.index === 20).length === 4
    );

    map.swapByIndex(2, 3);
    assert('Swap should change all ID 2 -> ID 3',
        map.filterTiles(t => t.index === 2).length === 2
    );
    assert('Swap should change all ID 3 -> ID 2',
        map.filterTiles(t => t.index === 3).length === 4
    );


    // --- COPY ---

    var level = [
        [ 1,  2,  3,  4],
        [ 5,  6,  7,  8],
        [ 9, 10, 11, 12],
        [13, 14, 15, 16]
    ]
    var map = this.make.tilemap({data: level, tileWidth: 16, tileHeight: 16});
    var tiles = map.addTilesetImage('mario-tiles');
    var layer = map.createDynamicLayer(0, tiles, 0, 400);

    layer.copy(0, 0, 2, 2, 2, 2);
    var destIndexes = map.getTilesWithin(2, 2, 2, 2).map(t => t.index);
    assert('Copy should copy tile indexes to the destination',
        are1DArrayEqual(destIndexes, [ 1, 2, 5, 6 ])
    );

    map.copy(-5, -5, 7, 7, 2, 0);
    var destIndexes = map.getTilesWithin(2, 0, 2, 2).map(t => t.index);
    assert('Copy with source/dest out of bounds should be clipped',
        are1DArrayEqual(destIndexes, [ 1, 2, 5, 6 ])
    );


    // Old tests:
    // var layer3 = map.createBlankDynamicLayer('layer3', tiles, 250, 0, 6, 5);
    // map.fill(11);
    // console.log(map.findByIndex(11).x === 0 && map.findByIndex(11).y === 0);
    // console.log(map.findByIndex(11, 1).x === 1 && map.findByIndex(11, 1).y === 0);
    // console.log(map.findByIndex(11, 1, true).x === 4 && map.findByIndex(11, 1, true).y === 4);
    // console.log(layer3.findByIndex(11, 100) === null);
    // console.log(layer3.findByIndex(12) === null);
    // map.fill(11, 0, 0, 3, 5);
    // map.fill(12, 3, 0, 2, 5);
    // map.fill(13, 5, 0, 1, 5);
    // console.log(layer3.findByIndex(13, 1).x === 5 && layer3.findByIndex(13, 1).y === 1);


    console.log(`${testsPassed} / ${totalTests} tests passed`);

    var cursors = this.input.keyboard.createCursorKeys();
    var controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        speed: 0.5
    };
    controls = this.cameras.addKeyControl(controlConfig);
}

function update (time, delta)
{
    controls.update(delta);
}

function are1DArrayEqual(array1, array2) {
    if (array1.length !== array2.length) return false;
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) return false;
    }
    return true;
}
