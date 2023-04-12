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
        const chest = this.add.image(400, 600, 'assets', 'blue-closed').setOrigin(0.5, 1);
        const key = this.add.image(-200, 300, 'assets', 'simple-key-gold');

        const chain1 = this.tweens.chain({
            targets: chest,
            tweens: [
                {
                    y: 470,
                    scaleX: 0.7,
                    duration: 300,
                    ease: 'quad.out'
                },
                {
                    y: 600,
                    scaleX: 1,
                    duration: 1000,
                    ease: 'bounce.out'
                },
            ],
            loop: -1,
            loopDelay: 300,
            onComplete: () => this.openChest(chest, key)
        });

        this.input.once('pointerdown', () => {

            chain1.completeAfterLoop(0);

        });
    }

    openChest (chest, key)
    {
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
                    ease: 'linear'
                },
                {
                    scale: 0.65,
                    y: 380,
                    duration: 200,
                    ease: 'power2'
                },
                {
                    x: 410,
                    duration: 300,
                    ease: 'bounce.out'
                },
                {
                    targets: chest,
                    texture: [ 'assets', 'blue-open' ],
                    duration: 100
                },
                {
                    alpha: 0,
                    duration: 400,
                    ease: 'linear'
                }
            ]
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
