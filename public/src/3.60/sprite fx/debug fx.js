class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.image('debug', 'assets/pics/checker.png');
        this.load.image('debug', 'assets/sprites/phaser2.png');
        // this.load.image('debug', 'assets/sprites/apple.png');
        this.load.image('noise', 'assets/tests/noisesmall.png');
    }

    create ()
    {
        const debug = this.add.sprite(400, 300, 'debug');

        // debug.enableFX(32);

        // const debug2 = this.add.image(600, 300, 'debug2');

        // const fx = debug.fx.addShine();
        // const fx = debug.fx.addVignette();
        // const fx = debug.fx.addBlur();
        // const fx = debug.fx.addGradient();
        // const fx = debug.fx.addBloom();
        // const fx = debug.fx.addColorMatrix();
        // fx.lsd();
        // const fx = debug.fx.addCircle();
        const fx = debug.fx.addBarrel();
        // const fx = debug.fx.addDisplacement();
        // fx.setTexture('noise');
        // const fx = debug.fx.addWipe();
        // const fx = debug.fx.addBokeh();

        console.log(fx);

        window.fx = fx;
        window.debug = debug;

        /*
        fx.strength = 0.75;
        fx.blurX = 0.5;
        fx.blurY = 5.0;

        this.input.once('pointerdown', () => {

            fx.isTiltShift = true;

            this.tweens.add({
                targets: fx,
                strength: { from: 0, to: 1 },
                duration: 2000,
                ease: 'Sine.inOut',
                yoyo: true,
                repeat: -1
            });

        });
        */

        /*
        this.input.once('pointerdown', () => {

            this.tweens.add({
                targets: fx,
                progress: 1,
                duration: 2000,
                ease: 'Sine.inOut',
                yoyo: true,
                repeat: -1
            });

        });
        */

        /*
        this.input.once('pointerdown', () => {

            this.tweens.add({
                targets: fx,
                x: { from: 0, to: 0.05 },
                y: { from: 0, to: 0.05 },
                duration: 2000,
                ease: 'Sine.inOut',
                yoyo: true,
                repeat: -1
            });

        });
        */

        this.input.once('pointerdown', () => {

            this.tweens.add({
                targets: fx,
                amount: { from: 0.3, to: 3 },
                duration: 2000,
                ease: 'Sine.inOut',
                yoyo: true,
                repeat: -1
            });

        });

    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000044',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
