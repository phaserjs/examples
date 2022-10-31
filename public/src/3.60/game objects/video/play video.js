class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.video('spaceace', 'assets/video/spaceace.mp4');
    }

    create ()
    {
        const intro = this.add.video(640, 360, 'spaceace');

        //  Depending on browser settings video playback is locked
        //  from autoplaying because this video has audio.

        //  Catch the event here. Playback will start
        //  as soon as you click on the game (regardless if you have a
        //  click handler or not). Here we use it to display a message.

        intro.on('error', () => {

            let message = this.add.text(640, 100, 'Click to unlock video', { font: '32px Courier', fill: '#00ff00' }).setShadow(1, 1).setOrigin(0.5);

            this.input.once('pointerdown', () => {

                message.destroy();

            });

        });

        intro.play();
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
