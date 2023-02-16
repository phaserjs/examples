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
        const debug = this.add.image(400, 300, 'debug');

        // debug.enableFX(32);

        // const debug2 = this.add.image(600, 300, 'debug2');

        // const fx = debug.addShineFX();
        // const fx = debug.addVignetteFX();
        // const fx = debug.addBlurFX();
        // const fx = debug.addGradientFX();
        // const fx = debug.addBloomFX();
        // const fx = debug.addColorMatrixFX();
        // fx.lsd();
        // const fx = debug.addCircleFX();
        // const fx = debug.addBarrelFX();
        const fx = debug.addDisplacementFX();
        fx.setTexture('noise');

        console.log(fx);

        window.fx = fx;
        window.debug = debug;

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

        // this.input.once('pointerdown', () => {

        //     this.tweens.add({
        //         targets: fx,
        //         amount: { from: 0.3, to: 3 },
        //         duration: 2000,
        //         ease: 'Sine.inOut',
        //         yoyo: true,
        //         repeat: -1
        //     });

        // });

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
