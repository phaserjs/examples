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
        this.load.image('debug2', 'assets/sprites/apple.png');
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
        const fx = debug.addColorMatrixFX();

        console.log(fx);

        window.fx = fx;
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
