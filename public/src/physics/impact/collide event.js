var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'impact'
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    var blockA = this.impact.add.image(60, 300, 'block');
    var blockB = this.impact.add.image(730, 300, 'block');

    blockA.setTypeA().setCheckAgainstB().setActiveCollision().setMaxVelocity(300);
    blockB.setTypeB().setCheckAgainstA().setFixedCollision();

    blockA.setVelocityX(300);

    this.impact.world.on('COLLIDE_EVENT', collide);
}

function collide (event)
{
    //  The event has the following properties:

    //  event.bodyA
    //  event.bodyB
    //  event.gameObjectA (the GO linked to bodyA, if any)
    //  event.gameObjectB (the GO linked to bodyB, if any)
    //  event.axis (either 'x' or 'y')

    event.gameObjectA.tint = 0xff0000;
}
