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
        const image = this.add.image(100, 100, 'block');

        const tweens = [];

        for (let i = 0; i < 5; i++)
        {
            tweens.push({
                targets: image,
                x: Phaser.Math.Between(100, 700),
                y: Phaser.Math.Between(100, 500),
                duration: 1000,
                ease: 'Linear',
                paused: (i === 0)
            });
        }

        const tween = this.tweens.chain(tweens);

        this.input.once('pointerdown', () => {
            tween.play();
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
