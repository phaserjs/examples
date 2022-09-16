class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.atlas('assets', 'assets/atlas/tweenparts.png', 'assets/atlas/tweenparts.json');
    }

    create ()
    {
        const chest = this.add.image(400, 350, 'assets', 'blue-closed');
        const key = this.add.image(-200, 300, 'assets', 'simple-key-gold');

        const chain1 = this.tweens.chain({
            targets: chest,
            tweens: [
                {
                    y: 220,
                    scaleX: 0.7,
                    duration: 300,
                    ease: 'quad.out'
                },
                {
                    y: 350,
                    scaleX: 1,
                    duration: 1000,
                    ease: 'bounce.out'
                },
            ],
            loop: -1,
            loopDelay: 300
        });

        this.input.once('pointerdown', () => {

            this.tweens.add({
                targets: chest,
                x: 550,
                ease: 'power3',
                duration: 500
            });

            const chain2 = this.tweens.chain({
                targets: key,
                tweens: [
                    {
                        x: 200,
                        duration: 300,
                        ease: 'quad.out',
                        delay: 500
                    },
                    {
                        angle: 360,
                        duration: 200,
                        ease: 'linear',
                        repeat: 4
                    },
                    {
                        angle: 270,
                        duration: 200,
                        ease: 'linear',
                        onComplete: () => {
                            chain1.completeAfterLoop(0);
                        }
                    },
                    {
                        scale: 0.7,
                        y: 350,
                        duration: 200,
                        ease: 'power2'
                    },
                    {
                        x: 400,
                        duration: 200,
                        ease: 'bounce.out',
                    },
                    {
                        alpha: 0,
                        duration: 200,
                        ease: 'power3'
                    },
                ],
            });


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
