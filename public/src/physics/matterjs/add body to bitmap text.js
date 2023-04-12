class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('platform', 'assets/sprites/platform.png');
        this.load.bitmapFont('desyrel', 'assets/fonts/bitmap/desyrel.png', 'assets/fonts/bitmap/desyrel.xml');
    }

    create ()
    {
        const text = this.add.bitmapText(140, -100, 'desyrel', 'Phaser 3');

        this.matter.add.gameObject(text, { render: { sprite: { yOffset: 0.2 } } });

        text.setFrictionAir(0.001);
        text.setBounce(0.9);

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
