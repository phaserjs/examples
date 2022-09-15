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
        const fish1 = this.add.image(0, 700, 'assets', 'fishing_134_t');
        const fish2 = this.add.image(800, 700, 'assets', 'fishing_128_t');

        fish2.setFlipX(true);

        this.tweens.chain({
            tweens: [
                {
                    targets: fish1,
                    x: 400,
                    y: 300,
                    angle: 40,
                    duration: 1000,
                    ease: 'quad.out'
                },
                {
                    targets: fish1,
                    x: 800,
                    y: 700,
                    angle: 80,
                    duration: 1000,
                    ease: 'quad.in'
                },
                {
                    targets: fish2,
                    x: 400,
                    y: 300,
                    angle: -30,
                    duration: 1000,
                    ease: 'quad.out'
                },
                {
                    targets: fish2,
                    x: 0,
                    y: 700,
                    angle: -60,
                    duration: 1000,
                    ease: 'quad.in'
                },
            ],
            loop: -1
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
