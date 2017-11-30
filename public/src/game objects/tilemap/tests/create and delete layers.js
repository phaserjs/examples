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
    }
};

var totalTests = 0;
var testsPassed = 0;
var assert = (message, condition) =>
{
    totalTests++;
    if (condition) { testsPassed++; }
    console.assert(condition, message);
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.tilemapJSON('mario', 'assets/tilemaps/maps/super-mario.json');
    this.load.image('mario-tiles', 'assets/tilemaps/tiles/super-mario.png');
}

function create ()
{
    var map = this.make.tilemap({ key: 'mario' });
    var tiles = map.addTilesetImage('SuperMarioBros-World1-1', 'mario-tiles');

    // --- LAYERS MUST BE UNIQUE ---

    var layer = map.createStaticLayer(0, tiles, 0, 0);
    assert('Layer 1 should have been successfully created (non-null value)',
        layer
    );

    var layer2 = map.createStaticLayer(0, tiles, 100, 100);
    assert('Two layers are not allowed to be created from the same LayerData - should return null',
        layer2 === null
    );

    layer.destroy();
    assert('Destroyed layer should release LayerData for another layer to use',
        layer.layer === undefined
    );

    layer2 = map.createStaticLayer(0, tiles, 100, 100);
    assert('Destroyed layer should release LayerData for another layer to use',
        layer2 !== null
    );


    // --- REMOVING LAYERS ---

    map.removeAllLayers();
    assert('All LayerData should be removed',
        map.layers.length === 0
    );
    assert('TilemapLayers should be destroyed',
        !layer.scene
    );
    assert('TilemapLayers should be unlinked from LayerData',
        !layer.layer
    );


    // --- DESTROYING MAP ---

    var map = this.make.tilemap({ key: 'mario' });
    var tiles = map.addTilesetImage('SuperMarioBros-World1-1', 'mario-tiles');
    var layer = map.createStaticLayer(0, tiles, 0, 0);

    map.destroy();
    assert('All LayerData should be removed',
        map.layers.length === 0
    );
    assert('TilemapLayers should be destroyed',
        !layer.scene
    );
    assert('TilemapLayers should be unlinked from LayerData',
        !layer.layer
    );

    console.log(`${testsPassed} / ${totalTests} tests passed`);
}
