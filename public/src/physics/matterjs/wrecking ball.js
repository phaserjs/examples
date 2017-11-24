var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1d1d1d',
    parent: 'phaser-example',
    physics: {
        default: 'matter'
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('crate', 'assets/sprites/crate.png');
    this.load.image('crate32', 'assets/sprites/crate32.png');
}

function create ()
{
    this.physics.world.setBounds();

    //  Increase the solver steps from the default to aid with the stack
    this.physics.world.engine.positionIterations = 30;
    this.physics.world.engine.velocityIterations = 30;

    var stack = this.physics.add.imageStack('crate32', null, 300, 50, 5, 18, 30, 0, { mass: 0.5 });

    this.physics.add.mouseSpring();
}
