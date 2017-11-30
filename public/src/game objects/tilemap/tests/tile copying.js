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
    console.assert(condition, message)
};

var game = new Phaser.Game(config);
var controls;

function preload() {
    this.load.tilemapJSON('mario', 'assets/tilemaps/maps/super-mario.json');
    this.load.image('mario-tiles', 'assets/tilemaps/tiles/super-mario.png');

    this.load.image('catastrophi-tiles', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');
    this.load.tilemapCSV('catastrophi-level3', 'assets/tilemaps/csv/catastrophi_level3.csv');
}

function create() {
    var camera = this.cameras.main;
    this.cameras.main.setScroll(-100, -50);

    var map = this.make.tilemap({ key: 'mario' });
    var tiles = map.addTilesetImage('SuperMarioBros-World1-1', 'mario-tiles');
    var layer = map.createDynamicLayer('World1', tiles, 0, 0);

    // --- TILE COPYING ---

    var tile1 = layer.getTileAt(9, 3);
    tile1.alpha = 0.5;
    tile1.flipX = true;
    tile1.flipY = true;
    tile1.visible = false;
    tile1.rotation = 0.1;
    var tile2 = layer.getTileAt(1, 1).copy(tile1);
    assert('Copied tile should NOT have x/y copied',
        tile1.x !== tile2.x && tile1.y !== tile2.y
    );
    assert('Copied tile should have index, alpha, visible, rotation and flip copied',
        tile1.index === tile2.index &&
        tile1.visible === tile2.visible &&
        tile1.alpha === tile2.alpha &&
        tile1.rotation === tile2.rotation &&
        tile1.flipX === tile2.flipX &&
        tile1.flipY === tile2.flipY
    );


    // --- PUTTING A TILE OBJECT ---

    var map = this.make.tilemap({key: 'catastrophi-level3', tileWidth: 16, tileHeight: 16});
    var tiles = map.addTilesetImage('catastrophi-tiles');
    var layer = map.createDynamicLayer(0, tiles, 0, 200);

    var tile1 = layer.getTileAt(20, 10);
    tile1.flipX = true;
    tile1.flipY = true;
    var tile2 = map.putTileAt(tile1, 0, 0);

    assert('Put tile should NOT have x/y copied',
        tile1.x !== tile2.x && tile1.y !== tile2.y
    );
    assert('Copied tile should have index, alpha, visible, rotation and flip copied',
        tile1.index === tile2.index &&
        tile1.visible === tile2.visible &&
        tile1.alpha === tile2.alpha &&
        tile1.rotation === tile2.rotation &&
        tile1.flipX === tile2.flipX &&
        tile1.flipY === tile2.flipY
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
