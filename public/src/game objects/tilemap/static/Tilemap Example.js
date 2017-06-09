var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true,
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var time = 0;

function preload ()
{
    this.load.image('image', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');
    this.load.text('map', 'assets/tilemaps/csv/catastrophi_level3.csv');
}

function create ()
{
    var rows = game.cache.text.get('map').split('\n');
    var mapWidth = rows[0].split(',').length;
    var mapHeight = rows.length;
    var tileSize = 16;
    var mapData = [];

    for (var i = 0; i < mapHeight; ++i)
    {
        var row = rows[i].split(',').map(function (a) { return parseInt(a);});
        for (var j = 0; j < mapWidth; ++j)
        {
            var id = row[j];
            mapData.push(id);
        }
    }
    var tilemap = this.add.staticTilemap(mapData, 0, 0, tileSize, tileSize, mapWidth, mapHeight, 'image');
}

function update ()
{
    this.cameras.main.scrollX = (200 + Math.cos(time) * 200)|0;
    this.cameras.main.scrollY = (500 + Math.sin(time) * 500)|0;

    time += 0.01;
}