var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    parent: 'phaser-example',
    pixelArt: true,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

var totalTests = 0;
var testsPassed = 0;
var assert = (message, condition) => {
    totalTests++;
    if (condition) testsPassed++;
    console.assert(condition, message)
};

function preload() {
    this.load.tilemapJSON('mario', 'assets/tilemaps/maps/super-mario.json');
    this.load.image('mario-tiles', 'assets/tilemaps/tiles/super-mario.png');
}

function create() {

    // --- ADD JSON ---

    var map = this.add.tilemap('mario');
    var tiles = map.addTilesetImage('SuperMarioBros-World1-1', 'mario-tiles');
    var layer = map.createDynamicLayer('World1', tiles, 0, 0);

    assert('Tile width should be 16',
        map.tileWidth === 16 && map.layers[0].tileWidth === 16
    );
    assert('Tile height should be 16',
        map.tileHeight === 16 && map.layers[0].tileHeight === 16
    );
    assert('Map should have 1 layer',
        map.layers.length === 1
    );
    assert('Map should have a non-empty tile',
        layer.filterTiles(t => t.index !== -1).length > 0
    );


    // --- MAKE JSON ---

    var map = this.make.tilemap({ key: 'mario' });
    var tiles = map.addTilesetImage('SuperMarioBros-World1-1', 'mario-tiles');
    var layer = map.createDynamicLayer('World1', tiles, 0, 300);

    assert('Tile width should be 16',
        map.tileWidth === 16 && map.layers[0].tileWidth === 16
    );
    assert('Tile height should be 16',
        map.tileHeight === 16 && map.layers[0].tileHeight === 16
    );
    assert('Map should have 1 layer',
        map.layers.length === 1
    );
    assert('Map should have a non-empty tile',
        layer.filterTiles(t => t.index !== -1).length > 0
    );


    // --- MAKE 2D ---

    var level = [
        [ 0,  0,  0,  0,  0,  0,  0],
        [ 0,  0,  0, 10,  0,  0,  0],
        [ 0,  0, 14, 13, 14,  0,  0],
        [ 0,  0,  0,  0,  0,  0,  0],
        [ 0,  0,  0,  0,  0,  0,  0],
        [14, 14, 14, 14, 14, 14, 14],
    ]
    var map = this.make.tilemap({ data: level, tileWidth: 16, tileHeight: 16 });
    var tiles = map.addTilesetImage('mario-tiles');
    var layer = map.createDynamicLayer(0, tiles, 0, 0);

    assert('Tile width should be 16',
        map.tileWidth === 16 && map.layers[0].tileWidth === 16
    );
    assert('Tile height should be 16',
        map.tileHeight === 16 && map.layers[0].tileHeight === 16
    );
    assert('Map should have 1 layer',
        map.layers.length === 1
    );
    assert('Map should have a non-empty tile',
        layer.filterTiles(t => t.index !== -1).length > 0
    );


    // --- ADD 2D ARRAY ---

    var level = [
        [ 0,  0,  0,  0,  0,  0,  0],
        [ 0,  0,  0, 10,  0,  0,  0],
        [ 0,  0, 14, 13, 14,  0,  0],
        [ 0,  0,  0,  0,  0,  0,  0],
        [ 0,  0,  0,  0,  0,  0,  0],
        [14, 14, 14, 14, 14, 14, 14],
    ]
    var map = this.add.tilemap(null, 16, 16, null, null, level);
    var tiles = map.addTilesetImage('mario-tiles');
    var layer = map.createDynamicLayer(0, tiles, 150, 0);

    assert('Tile width should be 16',
        map.tileWidth === 16 && map.layers[0].tileWidth === 16
    );
    assert('Tile height should be 16',
        map.tileHeight === 16 && map.layers[0].tileHeight === 16
    );
    assert('Map should have 1 layer',
        map.layers.length === 1
    );
    assert('Map should have a non-empty tile',
        layer.filterTiles(t => t.index !== -1).length > 0
    );



    // --- ADD NON-EXISTENT KEY ---

    var map = this.add.tilemap('non-existent key');

    assert('Tile width should be default 32',
        map.tileWidth === 32
    );
    assert('Tile height should be default 32',
        map.tileHeight === 32
    );
    assert('Map should have 0 layers',
        map.layers.length === 0
    );


    // --- MAKE BLANK ---

    var map = this.make.tilemap({ tileWidth: 16, tileHeight: 16 });
    var tiles = map.addTilesetImage('mario-tiles');
    var layer = map.createBlankDynamicLayer('layer1', tiles, 0, 100, 3, 3);
    map.fill(11);

    assert('Tile width should be 16',
        map.tileWidth === 16 && map.layers[0].tileWidth === 16
    );
    assert('Tile height should be 16',
        map.tileHeight === 16 && map.layers[0].tileHeight === 16
    );
    assert('Map should have 1 layer',
        map.layers.length === 1
    );
    assert('Map should have a non-empty tile',
        layer.filterTiles(t => t.index !== -1).length > 0
    );


    console.log(`${testsPassed} / ${totalTests} tests passed`);
}
