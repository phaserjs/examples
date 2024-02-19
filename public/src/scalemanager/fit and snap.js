class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('pic', 'assets/pics/dr-ick.png');
    }

    create ()
    {
        this.add.image(0, 0, 'pic').setOrigin(0);
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#2dab2d',
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 240,
        height: 160,
        min: {
            width: 240,
            height: 160
        },
        snap: {
            width: 240,
            height: 160
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
