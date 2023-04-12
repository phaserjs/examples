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

            this.scene.restart();

        }, this);
    }
}


const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: [ SceneA ],
    physics: {
        default: 'matter',
        matter: {
            setBounds: {
                x: 0,
                y: 0,
                width: 800,
                height: 600,
                thickness: 64
            },
            enableSleeping: true
        }
    }
};

const game = new Phaser.Game(config);
