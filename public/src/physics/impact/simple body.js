var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var world;
var body;
var image;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    image = this.add.image(0, 300, 'block');

    world = new Phaser.Physics.Impact.World();

    body = world.create(image.x, image.y);

    body.vel.x = 100;
}

function update (time, delta)
{
    world.update(time, delta);

    image.x = body.pos.x;
    image.y = body.pos.y;
}
