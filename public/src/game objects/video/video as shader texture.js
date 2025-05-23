class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.video('trainSequence', 'assets/video/train512x256.mp4', true);
        this.load.image('noise', 'assets/tests/rgba-noise-medium.png');
        this.load.glsl('hue-shift', 'assets/shaders/hue-shift.frag');
    }

    create ()
    {
        const video = this.add.video(400, 300, 'trainSequence').setVisible(false);

        //  We're using this texture as a shader input.
        video.saveTexture('train');

        video.play(true);

        video.once('textureready', () => {

            this.add.shader({
                name: 'Hue Shift',
                fragmentKey: 'hue-shift',
                initialUniforms: {
                    resolution: [ this.scale.width, this.scale.height ],
                    iChannel0: 0,
                    iChannel1: 1
                },
                setupUniforms: (setUniform, drawingContext) => {
                    setUniform('time', this.game.loop.getDuration());
                }
            }, 400, 300, 800, 600, [ 'train', 'noise' ]);

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
