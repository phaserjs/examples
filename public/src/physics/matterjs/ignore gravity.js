var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1b1464',
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
    this.load.image('block', 'assets/sprites/block.png');
    this.load.image('platform', 'assets/sprites/platform.png');
}

function create ()
{
    this.physics.world.setBounds();

    //  This body isn't effected by Gravity
    this.physics.add.image(100, 100, 'block').setIgnoreGravity(true);

    this.physics.add.image(300, 100, 'block', null, { restitution: 0.6, frictionAir: 0, mass: 0.1 });
    this.physics.add.image(500, 100, 'block', null, { restitution: 0.8, frictionAir: 0, mass: 0.1 });
    this.physics.add.image(700, 100, 'block', null, { restitution: 1, frictionAir: 0, mass: 0.1 });
}
