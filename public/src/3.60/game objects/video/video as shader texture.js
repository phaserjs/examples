class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.video('trainSequence', 'assets/video/train512x256.mp4', 'loadeddata', false, true);
        this.load.image('noise', 'assets/tests/rgba-noise-medium.png');
        this.load.glsl('bundle', 'assets/shaders/bundle4.glsl.js');
    }

    create ()
    {
        const vid = this.add.video(400, 300, 'trainSequence').setVisible(false);

        //  We're using this texture as a shader input, so we have to flipY on it
        vid.saveTexture('train', true);

        vid.play(true);

        this.add.shader('Hue Shift', 400, 300, 800, 600, [ 'train', 'noise' ]);
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
