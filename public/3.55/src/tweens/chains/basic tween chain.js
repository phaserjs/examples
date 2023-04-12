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
        const image = this.add.image(800, 300, 'assets', '02_axe_one_projectile');

        image.setAngle(35);

        const chain = this.tweens.chain({
            targets: image,
            tweens: [
                {
                    x: 400,
                    ease: 'power3',
                    duration: 750
                },
                {
                    angle: 0,
                    ease: 'elastic.out',
                    duration: 500
                },
                {
                    scale: { value: 0.5, duration: 1000 },
                    y: { value: 100, duration: 750, ease: 'sine.in' }
                },
                {
                    angle: 35,
                    ease: 'power2',
                    duration: 200
                },
                {
                    x: -100,
                    ease: 'quart.in',
                    duration: 1000
                },
            ]
        });

        this.input.once('pointerdown', () => {

            image.setScale(1)
            image.setPosition(800, 300);

            chain.restart();

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
