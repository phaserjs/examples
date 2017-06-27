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

var culled = 0;
var tilemap;
var game = new Phaser.Game(config);
var time = 0;

function preload ()
{
    this.load.image('image', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');
    this.load.text('map', 'assets/tilemaps/csv/catastrophi_level3.csv');
    this.load.bitmapFont('nokia16', 'assets/fonts/bitmap/nokia16.png', 'assets/fonts/bitmap/nokia16.xml');
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
    tilemap = this.add.tilemap(mapData, 0, 0, tileSize, tileSize, mapWidth, mapHeight, 0, 'image');
    culled = this.add.bitmapText(0, 0, 'nokia16', '');
    tilemap.scrollFactorX = 0.5;
    culled.scrollFactorX = 0.0;
    culled.scrollFactorY = 0.0;
}

function update ()
{
    this.cameras.main.scrollX = (200 + Math.cos(time) * 200)|0;
    this.cameras.main.scrollY = (500 + Math.sin(time) * 500)|0;

    culled.setText('Total Tiles: ' + tilemap.getTotalTileCount(this.cameras.main) + '\nVisible Tiles: ' + tilemap.getVisibleTileCount(this.cameras.main));

    time += 0.01;
}