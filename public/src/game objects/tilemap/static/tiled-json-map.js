var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var controls;

function preload ()
{
    this.load.image('tiles', 'assets/tilemaps/tiles/cybernoid.png');
    this.load.tilemapJSON('map', 'assets/tilemaps/maps/cybernoid.json');
}

function create ()
{
    var map = this.make.tilemap({ key: 'map' });

    // The first parameter is the name of the tileset in Tiled and the second parameter is the key
    // of the tileset image used when loading the file in preload.
    var tiles = map.addTilesetImage('CybernoidMap3BG_bank.png', 'tiles');

    // You can load a layer from the map using the layer name from Tiled, or by using the layer
    // index (0 in this case).
    var layer = map.createStaticLayer(0, tiles, 0, 0);

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

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

    var help = this.add.text(16, 16, ' Arrow keys to scroll ', {
        font: '20px Arial',
        backgroundColor: '#000000',
        fill: '#ffffff'
    });
    help.setScrollFactor(0);
}

function update (time, delta)
{
    controls.update(delta);
}
