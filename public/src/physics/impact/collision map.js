var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'impact',
        impact: {
            gravity: 800,
            setMaxVelocityX: 400,
            setMaxVelocityY: 800
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var cursors;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('clown', 'assets/sprites/clown.png');
    this.load.json('map', 'assets/tilemaps/maps/impact2.json');
    this.load.image('tiles', 'assets/tilemaps/tiles/slopes32.png');
}

function create ()
{
    cursors = this.input.keyboard.createCursorKeys();

    var impactData = this.cache.json.get('map').layer[0];
    var mapData = [];

    //  Build a single array from the data

    impactData.data.forEach(function (row, index, array) {

        row.forEach(function (tile) {

            if (tile === 0)
            {
                tile = 47;
            }

            mapData.push(tile - 1);

        });

    });

    this.add.staticTilemap(mapData, 0, 0, impactData.tilesize, impactData.tilesize, impactData.width, impactData.height, 'tiles');

    this.physics.world.setCollisionMap(impactData.tilesize, impactData.data);

    player = this.physics.add.image(64, 300, 'clown');

    player.setFriction(800, 0);

    player.body.accelGround = 1200;
    player.body.accelAir = 600;
    player.body.jumpSpeed = 500;
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
