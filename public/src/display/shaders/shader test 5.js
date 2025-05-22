class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.glsl('hsl', 'assets/shaders/hsl.frag');
        this.load.image('logo', 'assets/sprites/phaser3-logo-small.png');
    }

    create()
    {
        const shader = this.add.shader({
            name: 'hsl',
            fragmentKey: 'hsl',
            setupUniforms: (setUniform, drawingContext) =>
            {
                setUniform('time', this.game.loop.getDuration());
            },
        }, 400, 300, this.scale.width, this.scale.width);
        this.add.image(400, 300, 'logo');
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
