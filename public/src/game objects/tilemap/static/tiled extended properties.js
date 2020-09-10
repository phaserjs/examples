var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    pixelArt: true,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var map;
var marker;
var propertiesText;

function preload ()
{
    this.load.tilemapTiledJSON(
        'map', 'assets/tilemaps/maps/tile_extended_data.json'
    );
    this.load.image('tiles', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');
}

function create ()
{
    map = this.make.tilemap({ key: 'map' });
    var tileset = map.addTilesetImage('catastrophi_tiles_16', 'tiles');

    var layer = map.createStaticLayer('tiles', tileset, 0, 0).setInteractive();

    marker = this.add.graphics();
    marker.lineStyle(3, 0xffffff, 1);
    marker.strokeRect(0, 0, map.tileWidth, map.tileHeight);

    var help = this.add.text(16, 400, 'Click on a tile to view its data.', {
        font: '20px Arial',
        fill: '#ffffff'
    });
    help.setScrollFactor(0);

    propertiesText = this.add.text(500, 16, 'Tile Properties: ', {
        fontSize: '12px',
        fill: '#ffffff',
        wordWrap: {
            width: 720,
        },
    });
}

function update (time, delta)
{
    var worldPoint = this.input.activePointer.positionToCamera(this.cameras.main);

    // Rounds down to nearest tile
    var pointerTileX = map.worldToTileX(worldPoint.x);
    var pointerTileY = map.worldToTileY(worldPoint.y);

    // Snap to tile coordinates, but in world space
    marker.x = map.tileToWorldX(pointerTileX);
    marker.y = map.tileToWorldY(pointerTileY);

    if (this.input.manager.activePointer.isDown)
    {
        var tile = map.getTileAt(pointerTileX, pointerTileY);

        if (tile)
        {
            // Note: JSON.stringify will convert the object tile properties to a string
            propertiesText.setText('Tile Properties: ' + JSON.stringify(tile.getTileData(), null, 2));
        }
    }
}

