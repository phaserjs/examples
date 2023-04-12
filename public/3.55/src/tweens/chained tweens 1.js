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

        /*
        const chain1 = this.tweens.create({
            targets: image,
            tweens: [
                {
                    x: 700,
                },
                {
                    y: 500,
                },
                {
                    x: 100,
                },
                {
                    y: 100,
                }
            ]
        });

        const chain2 = this.tweens.create({
            targets: image,
            tweens: [
                {
                    y: 500,
                },
                {
                    x: 700,
                },
                {
                    y: 100,
                },
                {
                    x: 100,
                }
            ]
        });

        chain1.add(chain2);

        const chain = this.tweens.add(chain1);
        */

        const chain = this.tweens.chain({
            targets: image,
            tweens: [
                {
                    x: 700,
                },
                {
                    y: 500,
                },
                {
                    x: 100,
                },
                {
                    y: 100,
                }
            ],
            // paused: true,
            // delay: 4000,
            loop: 2,
            loopDelay: 500
        });

        console.log(chain);

        this.input.once('pointerdown', () => {
            chain.play();
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
