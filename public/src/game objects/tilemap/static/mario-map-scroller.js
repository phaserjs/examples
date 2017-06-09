var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var controls;
var game = new Phaser.Game(config);

function preload ()
{
    this.load.json('map1', 'assets/tilemaps/maps/super-mario.json');
    this.load.image('tiles1', 'assets/tilemaps/tiles/super-mario.png');

    this.load.json('map3', 'assets/tilemaps/maps/super-mario-3.json');
    this.load.image('tiles3', 'assets/tilemaps/tiles/super-mario-3.png');
}

function create ()
{
    var mapData1 = this.cache.json.get('map1').layers[0].data;

    //  Offset by 1 (because Tiled for some reason exports starting from 1 not zero)

    mapData1.forEach(function (current, index, array) {
        mapData1[index] = current - 1;
    });

    var mapData3 = this.cache.json.get('map3').layers[0].data;

    //  Offset by 1 (because Tiled for some reason exports starting from 1 not zero)

    mapData3.forEach(function (current, index, array) {
        mapData3[index] = current - 1;
    });

    var tilemap = this.add.staticTilemap(mapData1, 0, 0, 16, 16, 212, 15, 'tiles1');
    var tilemap2 = this.add.staticTilemap(mapData3, 900, 300, 8, 8, 352, 30, 'tiles3');

    var cursors = this.input.keyboard.createCursorKeys();

    var controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        speed: 0.5
    };

    controls = this.cameras.addKeyControl(controlConfig);

    this.cameras.main.setBounds(0, 0, 3100, 0);
}

function update (time, delta)
{
    controls.update(delta);
}
