class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('pic', 'assets/pics/zero-two.png');
    }

    create ()
    {
        this.add.image(0, 0, 'pic').setOrigin(0);
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#2dab2d',
    scale: {
        mode: Phaser.Scale.ENVELOP,
        parent: 'phaser-example',
        width: 800,
        height: 600,
        min: {
            width: 800,
            height: 600
        },
        max: {
            width: 1600,
            height: 1200
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
