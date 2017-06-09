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

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('tiles', 'assets/tilemaps/tiles/super_mario.png');
    this.load.json('map', 'assets/tilemaps/maps/super_mario.json');
}

function create ()
{
    var mapData = this.cache.json.get('map').layers[0].data;

    //  Offset by 1 (because Tiled for some reason exports starting from 1 not zero)

    mapData.forEach(function (current, index, array) {
        mapData[index] = current - 1;
    });

    // add: function (mapData, x, y, tileWidth, tileHeight, mapWidth, mapHeight, texture, frame)

    var tilemap = this.add.staticTilemap(mapData, 0, 0, 16, 16, 212, 15, 'tiles');

    // var tilemap2 = this.add.staticTilemap(mapData, 0, 300, 16, 16, 212, 15, 'tiles');
}

function update (time, delta)
{
    this.cameras.main.scrollX += ((0.1 * delta) | 0);
}