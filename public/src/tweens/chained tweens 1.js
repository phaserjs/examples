class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        var image = this.add.image(100, 100, 'block');

        var tweens = this.tweens.add([
            {
                targets: image,
                x: 600,
                ease: 'Linear',
                duration: 1000,
                paused: true
            },
            {
                targets: image,
                y: 500,
                ease: 'Linear',
                duration: 1000
            },
            {
                targets: image,
                x: 100,
                ease: 'Linear',
                duration: 1000
            },
            {
                targets: image,
                y: 100,
                ease: 'Linear',
                duration: 1000
            }
        ]);

        this.input.on('pointerdown', () => {
            tweens[0].play();
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example,
    fps: {
        smoothStep: true
    }
};

const game = new Phaser.Game(config);
