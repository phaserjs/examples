class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/pics/purple-bars.jpg');
        this.load.image('monitor', 'assets/pics/commodore1084.png');
    }

    create ()
    {
        this.add.image(440, 340, 'bg');

        const text = this.add.text(440, 40, 'Connecting to Webcam ...', { font: '32px Courier', fill: '#00ff00' }).setShadow(1, 1).setDepth(1).setOrigin(0.5);

        const video = this.add.video(82, 76).setOrigin(0).setVisible(false);

        video.on('locked', () => {
            text.setText('Click to unlock video');
        });

        video.on('play', () => {
            text.setVisible(false);
        });

        video.once('created', () => {

            //  Resize the video stream to fit our monitor once the texture has been created
            video.setDisplaySize(716, 504).setVisible(true);

        });

        navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then((stream) => {

            video.loadMediaStream(stream, true);

            video.play();

        })
        .catch((err) => {

            text.setText(`Error: ${err}`);

        });

        this.add.image(440, 340, 'monitor');
    }
}

const config = {
    type: Phaser.AUTO,
    width: 880,
    height: 680,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
