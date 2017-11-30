var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: "#01555f",
    parent: "phaser-example",
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
var controls;

function preload() {
    this.load.tilemapJSON('map', 'assets/tilemaps/maps/multiple-layers.json');
    this.load.image('kenny_platformer', 'assets/tilemaps/tiles/kenny_platformer.png');
}

function create() {
    var map = this.make.tilemap({ key: "map" });
    var tiles = map.addTilesetImage("kenny_platformer");

    var layer1 = map.createStaticLayer('Tile Layer 1', tiles, 0, 0);
    assert('layer1 should be selected after being created',
        map.layer === layer1.layer
    );

    var layer2 = map.createStaticLayer('Tile Layer 2', tiles, 0, 0);
    assert('layer1 should NOT be selected after layer 2 is created',
        map.layer !== layer1.layer
    );
    assert('layer2 should be selected after being created',
        map.layer === layer2.layer
    );

    var layer3 = map.createStaticLayer('Tile Layer 3', tiles, 0, 0);
    var layer4 = map.createStaticLayer('Tile Layer 4', tiles, 0, 0);

    map.setLayer('Tile Layer 1');
    assert('Set layer should work with string',
        map.layer === layer1.layer
    );

    map.setLayer(1);
    assert('Set layer should work with index',
        map.layer === layer2.layer
    );

    map.setLayer(layer3);
    assert('Set layer should work with TilemapLayer',
        map.layer === layer3.layer
    );

    map.layer = 'Tile Layer 4';
    assert('Layer getter should work with string',
        map.layer === layer4.layer
    );

    assert('(0, 0) from layer 1 should have tile id 10',
        map.setLayer('Tile Layer 1').getTileAt(0, 0).index === 10
    );
    assert('(0, 0) from layer 1 should have tile id 10',
        map.setLayer('Tile Layer 2').getTileAt(0, 0, false, layer1).index === 10
    );
    assert('(1, 1) from layer 1 should be null',
        map.setLayer('Tile Layer 1').getTileAt(1, 1) === null
    );
    assert('(1, 24) from layer 2 should be tile id 7',
        map.setLayer(layer2).getTileAt(1, 24).index === 7
    );
    assert('(26, 3) from layer 3 should be tile id 19',
        map.setLayer(2).getTileAt(26, 3).index === 19
    );


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

