class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('lolly', 'assets/sprites/lollipop.png');
        this.load.image('coffee', 'assets/sprites/coffee.png');
        this.load.image('ghost', 'assets/sprites/ghost1.png');
        this.load.image('planet', 'assets/sprites/planet1.png');
        this.load.image('logo', 'assets/sprites/phaser2.png');
        this.load.image('debug', 'assets/pics/checker.png');
        this.load.image('sky', 'assets/skies/fire.png');
    }

    create ()
    {
        // const pipeline = 'GlowFX';
        // const pipeline = 'ShadowFX';
        // const pipeline = 'PixelateFX';
        // const pipeline = 'VignetteFX';
        // const pipeline = 'ShineFX';
        // const pipeline = 'BlurFX';
        // const pipeline = 'GradientFX';
        // const pipeline = 'BloomFX';
        // const pipeline = 'ColorMatrixFX';
        const pipeline = 'CircleFX';

        const c = this.add.container();

        // const sky = this.add.image(400, 300, 'sky');
        const debug = this.add.image(400, 300, 'debug');
        // const planet = this.add.image(400, 300, 'planet');
        const lolly = this.add.image(150, 100, 'lolly');
        const logo = this.add.image(400, 300, 'logo');
        const coffee = this.add.image(650, 300, 'coffee');
        const ghost = this.add.image(500, 450, 'ghost');

        // c.add([ sky ]);

        c.add([ debug, lolly, logo, coffee, ghost ]);
        // c.add([ lolly, logo, coffee, ghost ]);
        c.setPostPipeline(pipeline);

        // const instance = c.postPipelines[0];
        // instance.colorMatrix.lsd();

        // debug.enableFX();
        // debug.addShineFX();
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
