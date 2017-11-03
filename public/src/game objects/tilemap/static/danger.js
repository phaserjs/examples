var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var controls;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('tiles', 'assets/tilemaps/tiles/dangerous-kiss-x2.png');
    this.load.json('map', 'assets/tilemaps/maps/dangerous-kiss.json');
}

function create ()
{
    //  Because, pixel art
    this.textures.get('tiles').setFilter(1);

    var mapData = this.cache.json.get('map').layers[0].data;

    //  Offset by 1 (because Tiled for some reason exports starting from 1 not zero)

    mapData.forEach(function (current, index, array) {
        mapData[index] = current - 1;
    });

    // var map = this.add.staticTilemap(mapData, 0, 0, 16, 16, 192, 154, 0, 'tiles');

    var map = this.add.tilemap(mapData, 0, 0, 16, 16, 192, 154, 0, 'tiles');

    // map.skipIndexZero = false;

    var cursors = this.input.keyboard.createCursorKeys();

    var controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        acceleration: 0.04,
        drag: 0.0005,
        maxSpeed: 0.7
    };

    controls = this.cameras.addSmoothedKeyControl(controlConfig);

    // this.cameras.main.setBounds(0, 0, 2272, 1864);
}

function update (time, delta)
{
    controls.update(delta);
}
