class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.video('train', 'assets/video/train512x256.mp4', true);
    }

    create ()
    {
        const intro = this.add.video(400, 300, 'train');

        intro.on('loop', () => {

            console.log('video loop');

        });

        intro.on('complete', () => {

            console.log('video complete');

        });

        intro.play(true);
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
