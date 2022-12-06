class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('platform', 'assets/sprites/platform.png');
        this.load.image('mushroom', 'assets/sprites/mushroom2.png');
    }

    create ()
    {
        const image1 = this.add.image(0, -30, 'mushroom');
        const image2 = this.add.image(-40, 30, 'mushroom');
        const image3 = this.add.image(40, 30, 'mushroom');

        const container = this.add.container(100, 100, [ image1, image2, image3 ]);

        const physicsImage = this.matter.add.gameObject(image1);

        physicsImage.setFrictionAir(0.001);
        physicsImage.setBounce(0.9);

        this.matter.add.image(350, 450, 'platform', null, { isStatic: true }).setScale(2, 0.5).setAngle(10);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1b1464',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            debug: true,
            gravity: {
                y: 0.3
            }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
