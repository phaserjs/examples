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

var bodyA;
var bodyB;
var bodyC;

var imageA;
var imageB;
var imageC;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    imageA = this.add.image(300, 300, 'block');
    imageB = this.add.image(60, 300, 'block');
    imageC = this.add.image(730, 300, 'block');

    world = new Phaser.Physics.Impact.World();

    bodyA = world.create(imageA.x, imageA.y, 95, 95);
    bodyA.setTypeA().setCheckAgainstB().setActive();
    bodyA.setMaxVelocity(300);

    bodyB = world.create(imageB.x, imageB.y, 95, 95);
    bodyB.setTypeB().setCheckAgainstA().setFixed();

    bodyC = world.create(imageC.x, imageC.y, 95, 95);
    bodyC.setTypeB().setCheckAgainstA().setFixed();

    bodyA.vel.x = 300;
    bodyA.bounciness = 1;
}

function update (time, delta)
{
    world.update(time, delta);

    imageA.setPosition(bodyA.pos.x, bodyA.pos.y);
    imageB.setPosition(bodyB.pos.x, bodyB.pos.y);
    imageC.setPosition(bodyC.pos.x, bodyC.pos.y);
}

