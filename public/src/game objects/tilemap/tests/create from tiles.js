var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#ffffff',
    parent: 'phaser-example',
    pixelArt: true,
    scene: {
        preload: preload,
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

function preload()
{
    this.load.tilemapJSON('mario', 'assets/tilemaps/maps/super-mario.json');
    this.load.image('mario-tiles', 'assets/tilemaps/tiles/super-mario.png');
    this.load.image('tomato', 'assets/sprites/tomato.png');
}

function create()
{
    var level = [
        [ 1,  2,  3,  4,  7,  7,  7, 10, 11, 12, 13, 14, 15, 16, 17],
        [ 5,  6,  7,  7,  4,  4,  7, 10, 11, 12, 13, 14, 15, 16, 17],
        [ 9, 10, 11, 12,  4,  4,  7, 10, 11, 12, 13, 14, 15, 16, 17],
        [13, 14, 15, 16,  7,  7,  7, 10, 11, 12, 13, 14, 15, 16, 17]
    ]
    var map = this.make.tilemap({ data: level, tileWidth: 16, tileHeight: 16 });
    var tileset = map.addTilesetImage('mario-tiles');
    var layer = map.createDynamicLayer(0, tileset);

    var sprites = map.createFromTiles(7, null, {
        key: 'tomato', flipY: true, scale: 1, origin: 0, alpha: 0.5
    });
    assert('Tiles with index 7 should be unchanged - there should still be 10',
        map.filterTiles(tile => tile.index === 7).length === 10
    );
    assert('10 sprites should be created',
        sprites.length === 10
    );
    assert('Sprites should have an alpha of 0.5',
        sprites.every(sprite => alpha = 0.5)
    );

    var sprites = map.createFromTiles(4, -1, {
        key: 'tomato', scale: 0.5, origin: 0, alpha: 0.5
    });
    assert('Tiles with index 4 should have been changed to -1',
        layer.filterTiles((tile) => tile.index === 4).length === 0
        && layer.filterTiles((tile) => tile.index === -1).length === 5
    );

    var sprites = layer.createFromTiles([ 10, 11 ], 20, {
        key: 'tomato', scale: 0.5, origin: 0, alpha: 0.5
    });
    assert('Tiles with index 10 & 11 should have been changed to 20',
        map.filterTiles((tile) => tile.index === 10).length === 0
        && map.filterTiles((tile) => tile.index === 11).length === 0
        && map.filterTiles((tile) => tile.index === 20).length === 10
    );

    var set1 = map.filterTiles((tile) => tile.index === 12);
    var set2 = map.filterTiles((tile) => tile.index === 13);
    var sprites = map.createFromTiles([ 12, 13 ], [ 21, 22 ], {
        key: 'tomato', scale: 0.5, origin: 0, alpha: 0.5
    });
    assert('Tiles with index 12 should have been changed to 21',
        set1.every(tile => tile.index === 21)
    );
    assert('Tiles with index 13 should have been changed to 22',
        set2.every(tile => tile.index === 22)
    );

    console.log(`${testsPassed} / ${totalTests} tests passed`);
}

