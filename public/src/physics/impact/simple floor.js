var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        system: 'impact',
        gravity: 100
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
    var bodyA = this.physics.add.image(100, 60, 'block');
    var bodyB = this.physics.add.image(400, 160, 'block');
    var bodyC = this.physics.add.image(700, 260, 'block');

    //  Create a floor. We don't need to render it, so just make a Body

    var floor = this.physics.add.body(0, 632, 800, 64).setFixed().setGravity(0);

    this.physics.world.setAvsB([ bodyA, bodyB, bodyC ]);
    this.physics.world.setBvsA([ floor ]);
    this.physics.world.setActive([ bodyA, bodyB, bodyC ]);

    // bodyA.setMaxVelocity(600).setBounce(0.7);
    // bodyB.setMaxVelocity(600).setBounce(0.6);
    // bodyC.setMaxVelocity(600).setBounce(0.5);
}
