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
var watch = undefined;
var propertiesText;

function preload ()
{
    this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/tile_extended_data.json');
    this.load.image('tiles', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');
    this.load.spritesheet('icons', 'assets/tilemaps/tiles/super-mario.png', { frameWidth: 16, frameHeight: 16 });
}

function create ()
{
    map = this.make.tilemap({ key: 'map' });
    var iconTileset;
    var tileset = [
        map.addTilesetImage('catastrophi_tiles_16', 'tiles'),
        iconTileset = map.addTilesetImage('super-mario', 'icons')
    ];

    this.input.on(
        'gameobjectdown',
        function(pointer, gameObject, event)
        {
            watch = gameObject;
            event.stopPropagation();
        }
    );
    this.input.on(
        'pointerdown',
        function(pointer, currentlyOver)
        {
            watch = undefined;
            event.stopPropagation();
        }
    );

    var layer = map.createStaticLayer('tiles', tileset, 0, 0).setInteractive();
    for (let i = 0; i < map.objects[0].objects.length; i++)
    {
        var obj = map.objects[0].objects[i];
        var tile = iconTileset.getTileData(obj.gid);
        var sprite = this.add.sprite(
            obj.x,
            obj.y,
            'icons',
            obj.gid - iconTileset.firstgid
        ).setInteractive();
        sprite.obj = obj;
        sprite.tile = tile;
    }

    marker = this.add.graphics();
    marker.lineStyle(3, 0xffffff, 1);
    marker.strokeRect(0, 0, map.tileWidth, map.tileHeight);

    var help = this.add.text(16, 400, 'Click on a sprite to view its data.', {
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
    if (!watch)
    {
        propertiesText.setText('Click something!');
        return;
    }
    // Note: JSON.stringify will convert the object tile properties to a string
    propertiesText.setText('Tile Properties: '
        + JSON.stringify(watch.tile, null, 2)
        + '\n& Obj properties: '
        + JSON.stringify(watch.obj, null, 2)
    );
}

