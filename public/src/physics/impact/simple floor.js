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
    imageA = this.add.image(100, 60, 'block');
    imageB = this.add.image(400, 60, 'block');
    imageC = this.add.image(700, 60, 'block');

    //  150 = gravity
    world = new Phaser.Physics.Impact.World(150);

    //  Create a floor. We don't need to render it, so just make a Body

    var floor = world.create(0, 632, 800, 64);
    floor.setTypeB().setCheckAgainstA().setFixed();
    floor.gravityFactor = 0;

    bodyA = world.create(imageA.x, imageA.y, 95, 95);
    bodyA.setTypeA().setCheckAgainstB().setActive();

    bodyB = world.create(imageB.x, imageB.y, 95, 95);
    bodyB.setTypeA().setCheckAgainstB().setActive();

    bodyC = world.create(imageC.x, imageC.y, 95, 95);
    bodyC.setTypeA().setCheckAgainstB().setActive();

    bodyA.setMaxVelocity(300).setBounce(1);
    bodyB.setMaxVelocity(300).setBounce(1);
    bodyC.setMaxVelocity(300).setBounce(1);
}

function update (time, delta)
{
    world.update(time, delta);

    imageA.setPosition(bodyA.pos.x, bodyA.pos.y);
    imageB.setPosition(bodyB.pos.x, bodyB.pos.y);
    imageC.setPosition(bodyC.pos.x, bodyC.pos.y);
}

