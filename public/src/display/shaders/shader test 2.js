class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.glsl('machineshaman', 'assets/shaders/machine-shaman.frag');
        this.load.image('logo', 'assets/sprites/phaser3-logo-small.png');
        this.load.image('mask', 'assets/tests/camera/grunge-mask.png');
    }

    create()
    {
        this.cameras.main.filters.internal.addMask('mask');

        this.add.shader({
            name: 'machineshaman',
            fragmentKey: 'machineshaman',
            setupUniforms: (setUniform, drawingContext) => {
                setUniform('time', this.game.loop.getDuration());
            },
        }, 400, 300, 800, 800);

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
