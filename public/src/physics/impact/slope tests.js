var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var world;
var bodyA;
var imageA;
var cursors;
var graphics;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.json('map', 'assets/tilemaps/maps/slopes.json');
    this.load.image('tiles', 'assets/tilemaps/tiles/slopes32mud.png');
}

function create ()
{
    cursors = this.input.keyboard.createCursorKeys();

    var jsonData = this.cache.json.get('map').layers[0];

    var colMapData = [];
    var renderData = [];

    //  Build a CollisionMap compatible array from the data

    var mapWidth = jsonData.width;
    var mapHeight = jsonData.height;
    var x = 0;
    var y = 0;

    jsonData.data.forEach(function (tile, index, array) {

        if (x === 0)
        {
            colMapData[y] = [];
        }

        if (tile === 0)
        {
            tile = 49;
        }

        colMapData[y][x] = tile;
        renderData.push(tile - 1);

        x++;

        if (x === mapWidth)
        {
            x = 0;
            y++;
        }

    });

    this.add.staticTilemap(renderData, 0, 0, 32, 32, mapWidth, mapHeight, 'tiles');

    // imageA = this.add.image(64, 300, 'clown').setOrigin(0);

    world = new Phaser.Physics.Impact.World(800);

    world.collisionMap = new Phaser.Physics.Impact.CollisionMap(32, colMapData);

    bodyA = world.create(32, 32, 40, 40);
    bodyA.setMaxVelocity(400, 800);
    bodyA.friction.x = 800;
    bodyA.friction.y = 0;

    bodyA.accelGround = 1200;
    bodyA.accelAir = 600;
    bodyA.jumpSpeed = 500;

    this.cameras.main.startFollow(bodyA.pos);
    this.cameras.main.setBounds(0, 0, mapWidth * 32, mapHeight * 32);

    graphics = this.add.graphics();
}

function update (time, delta)
{
    var accel = bodyA.standing ? bodyA.accelGround : bodyA.accelAir;

    if (cursors.left.isDown)
    {
        bodyA.setAccelerationX(-accel);
    }
    else if (cursors.right.isDown)
    {
        bodyA.setAccelerationX(accel);
    }
    else
    {
        bodyA.setAccelerationX(0);
    }

    if (cursors.up.isDown && bodyA.standing)
    {
        bodyA.setVelocityY(-bodyA.jumpSpeed);
    }

    world.update(time, delta);

    graphics.clear();
    graphics.lineStyle(1, 0xffff00, 1);
    graphics.strokeRect(bodyA.pos.x, bodyA.pos.y, bodyA.size.x, bodyA.size.y);

    // imageA.setPosition(bodyA.pos.x, bodyA.pos.y);

}
