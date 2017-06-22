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
var bodyB;
var bodyC;

var imageA;
var imageB;
var imageC;

var cursors;
var graphics;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('clown', 'assets/sprites/clown.png');
    // this.load.image('clown', 'assets/sprites/default.png');
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

    imageA = this.add.image(64, 300, 'clown').setOrigin(0);

    world = new Phaser.Physics.Impact.World(500);

    world.collisionMap = new Phaser.Physics.Impact.CollisionMap(impactData.tilesize, impactData.data);

    bodyA = world.create(32, 32, imageA.width, imageA.height);
    bodyA.setMaxVelocity(300);
    bodyA.friction.x = 80;
    bodyA.friction.y = 30;

    // graphics = this.add.graphics();
}

function update (time, delta)
{
    if (cursors.left.isDown)
    {
        bodyA.setVelocityX(-180);
    }
    else if (cursors.right.isDown)
    {
        bodyA.setVelocityX(180);
    }
    else if (cursors.up.isDown && bodyA.standing)
    {
        bodyA.setVelocityY(-260);
    }

    world.update(time, delta);

    // graphics.clear();
    // graphics.lineStyle(1, 0xffff00, 1);
    // graphics.strokeRect(bodyA.pos.x, bodyA.pos.y, bodyA.size.x, bodyA.size.y);

    imageA.setPosition(bodyA.pos.x, bodyA.pos.y);

}
