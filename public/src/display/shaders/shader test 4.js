class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.glsl('spiralTime', 'assets/shaders/spiralTime.frag');
        this.load.image('pic', 'assets/pics/rick-and-morty-by-sawuinhaff-da64e7y.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo-x2.png');
        this.load.image('splat1', 'assets/pics/splat1.png');
        this.load.image('splat3', 'assets/pics/splat3.png');
    }

    create ()
    {
        const maskImage1 = this.make.image({ x: 400, y: 300, key: 'splat1', add: false });
        const maskImage2 = this.make.image({ x: 400, y: 300, key: 'splat3', add: false });

        this.cameras.main.filters.external.addMask(maskImage1);

        this.add.image(400, 300, 'pic');

        const shader = this.add.shader({
            name: 'spiralTime',
            fragmentKey: 'spiralTime',
            setupUniforms: (setUniform, drawingContext) =>
            {
                setUniform('time', this.game.loop.getDuration());
            },
        }, 400, 300, this.scale.width, this.scale.width);
        shader.enableFilters().filters.external.addMask(maskImage2);

        this.text = this.add.text(80, 320, '', { font: '16px Courier', fill: '#00ff00' }).setName('text');

        this.add.image(400, 300, 'logo').setName('logo');
    }

    update ()
    {
        if (this.text)
        {
            this.text.setText([
                this.sys.game.loop.getDuration(),
                this.sys.game.loop.getDurationMS()
            ]);
        }
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
