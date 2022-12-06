class SceneA extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneA' });
    }

    preload ()
    {
        this.load.image('ball1', 'assets/sprites/pangball.png');
    }

    create ()
    {
        this.matter.world.setBounds(0, 0, 800, 600, 32, true, true, false, true);

        for (let i = 0; i < 64; i++)
        {
            const ball = this.matter.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(-600, 0), 'ball1');
            ball.setCircle();
            ball.setFriction(0.005);
            ball.setBounce(1);
        }

        this.input.once('pointerdown', function (event)
        {

            this.scene.start('sceneB');

        }, this);
    }
}

class SceneB extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneB' });
    }

    preload ()
    {
        this.load.image('ball2', 'assets/sprites/shinyball.png');
    }

    create ()
    {
        this.matter.world.setBounds(0, 0, 800, 600, 32, true, true, false, true);

        for (let i = 0; i < 64; i++)
        {
            const ball = this.matter.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(-600, 0), 'ball2');
            ball.setCircle();
            ball.setFriction(0.005);
            ball.setBounce(1);
        }

        this.input.once('pointerdown', function (event)
        {

            this.scene.start('sceneA');

        }, this);
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: [ SceneA, SceneB ],
    physics: {
        default: 'matter'
    }
};

const game = new Phaser.Game(config);
