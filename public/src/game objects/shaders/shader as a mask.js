class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.glsl('wave', 'assets/shaders/shader1.frag');
        this.load.image('pic', 'assets/pics/sao-sinon.png');
        this.load.image('bg', 'assets/pics/purple-dots.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const shader = this.make.shader({
            config: {
                name: 'wave',
                fragmentKey: 'wave',
                initialUniforms: {
                    resolution: [ 800, 600 ]
                },
                setupUniforms: (setUniform, drawingContext) => {
                    setUniform('time', this.game.loop.getDuration());
                }
            },
            x: 400,
            y: 300,
            width: 800,
            height: 600,
            add: false
        });

        //  Apply the mask to this image
        this.add.image(400, 300, 'pic').enableFilters().filters.external.addMask(shader);
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
