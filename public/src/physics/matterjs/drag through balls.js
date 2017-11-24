var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1d1d1d',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            enableSleeping: false
        }
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
    this.load.image('ball', 'assets/sprites/pangball.png');
    this.load.image('blue', 'assets/particles/blue.png');
}

function create ()
{
    this.physics.world.setBounds(0, 0, 800, 550);

    for (var i = 0; i < 512; i++)
    {
        var ball = this.physics.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(200, 400), 'blue', null, { isCircle: true, radius: 16, ignorePointer: false });

        ball.setScale(0.7);
        ball.setBlendMode('ADD');
        ball.setFriction(0.005);
        ball.setBounce(0.8);
        ball.setMass(1);
    }

    this.physics.add.image(400, 0, 'block').setBounce(0.8).setMass(60);

    this.physics.add.mouseSpring();
}
