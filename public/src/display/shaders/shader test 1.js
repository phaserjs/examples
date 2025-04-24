class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.glsl('hannae', 'assets/shaders/love-u-hanne-e.frag');
        this.load.glsl('yinyang', 'assets/shaders/yin-yang.frag');
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        const shader = this.add.shader({
            name: 'hannae',
            fragmentKey: 'hannae',
            setupUniforms: (setUniform, drawingContext) => {
                setUniform('time', this.game.loop.getDuration());
            },
        }, 400, 300, 800, 800);

        this.add.image(200, 300, 'block');

        const shader2 = this.add.shader({
            name: 'yinyang',
            fragmentKey: 'yinyang',
            setupUniforms: (setUniform, drawingContext) => {
                setUniform('time', this.game.loop.getDuration());
            },
        }, 400, 300, 256, 256);

        this.add.image(400, 300, 'block');

        this.add.image(600, 300, 'block');

        this.tweens.add({
            targets: shader2,
            scaleX: 4,
            scaleY: 4,
            repeat: -1,
            yoyo: true,
            duration: 2000
        });

        this.input.on('pointermove', function (pointer)
        {

            shader2.setPosition(pointer.x, pointer.y);
        });
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example,
};

const game = new Phaser.Game(config);
