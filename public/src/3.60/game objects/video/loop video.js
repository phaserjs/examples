class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.video('tunnel', 'assets/video/tunnel.mp4', true);
    }

    create ()
    {
        const intro = this.add.video(640, 360, 'tunnel');

        intro.on('locked', () => {

            let message = this.add.text(640, 100, 'Click to play video', { font: '32px Courier', fill: '#00ff00' }).setShadow(1, 1).setOrigin(0.5);

            intro.on('unlocked', () => {

                message.destroy();

            });

        });

        intro.on('complete', () => {

            console.log('video complete');

        });

        intro.on('loop', () => {

            console.log('video loop');

        });

        intro.play();
        // intro.play(true);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
