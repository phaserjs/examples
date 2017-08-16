var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        system: 'impact'
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
    var blockA = this.physics.add.image(60, 300, 'block');
    var blockB = this.physics.add.image(730, 300, 'block');

    blockA.setTypeA().setCheckAgainstB().setActive().setMaxVelocity(300);
    blockB.setTypeB().setCheckAgainstA().setFixed();

    blockA.setVelocityX(300);

    //  The callback will be sent the arguments: bodyA (which is the body of blockA in this case), the other body it hits and the axis
    blockA.setCollideCallback(collide, this);
}

function collide (bodyA, bodyB, axis)
{
    bodyB.gameObject.tint = 0xff0000;
}
