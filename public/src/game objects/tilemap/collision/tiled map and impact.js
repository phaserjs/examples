var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true,
    physics: {
        default: 'impact',
        impact: { gravity: 200 }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var player;
var cursors;

function preload ()
{
    this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/slopes.json');
    this.load.image('tiles', 'assets/tilemaps/tiles/slopes32mud.png');
    this.load.image('player', 'assets/sprites/phaser-dude.png');
}

function create ()
{
    var map = this.make.tilemap({ key: 'map' });
    var tileset = map.addTilesetImage('slopes32mud', 'tiles');
    var backgroundLayer = map.createStaticLayer('Background Layer', tileset, 0, 0);
    var layer = map.createStaticLayer('Ground Layer', tileset, 0, 0);

    // Construct a collision map - a 2D array that indicates what type of slope each tile has. This
    // corresponds to the slope defs in Phaser.Impact. Check out slopes32mud.png to see a visual
    // representation. E.g. "1" is a normal rectangle collision, "2" is a tile with 45 degree slope,
    // "49" is a blank tile.
    var collisionMap = [];
    for (var y = 0; y < map.height; y++)
    {
        var row = [];
        for (var x = 0; x < map.width; x++)
        {
            var tile = map.getTileAt(x, y);
            if (!tile)
            {
                row.push(49); // No collider
            }
            else
            {
                row.push(tile.index);
            }
        }
        collisionMap.push(row);
    }

    this.impact.world.setCollisionMap(collisionMap, map.tileWidth);

    player = this.impact.add.image(64, 300, 'player');
    player.setMaxVelocity(300, 400).setFriction(800, 0);
    player.body.accelGround = 1200;
    player.body.accelAir = 600;
    player.body.jumpSpeed = 300;

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(player);

    cursors = this.input.keyboard.createCursorKeys();

    var help = this.add.text(16, 16, 'Arrow keys to move. Space to jump.', {
        fontSize: '18px',
        fill: '#ffffff'
    });
    help.setScrollFactor(0);
}

function update (time, delta)
{
    var accel = player.body.standing ? player.body.accelGround : player.body.accelAir;

    if (cursors.left.isDown)
    {
        player.setAccelerationX(-accel);
    }
    else if (cursors.right.isDown)
    {
        player.setAccelerationX(accel);
    }
    else
    {
        player.setAccelerationX(0);
    }

    if (cursors.up.isDown && player.body.standing)
    {
        player.setVelocityY(-player.body.jumpSpeed);
    }
}
