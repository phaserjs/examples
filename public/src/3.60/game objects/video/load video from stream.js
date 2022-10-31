class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/purple-bars.jpg');
        this.load.image('monitor', 'assets/commodore1084.png');
    }

    create ()
    {
        this.add.image(440, 340, 'bg');

        const text = this.add.text(440, 40, 'Connecting to Live Stream ...', { font: '32px Courier', fill: '#00ff00' }).setShadow(1, 1).setDepth(1).setOrigin(0.5);

        const stream = this.add.video(82, 76).setOrigin(0).setVisible(false);

        //  Hopefully this stream works for you.
        //  It did at the time of writing, but I appreciate these things are a bit temperamental

        stream.loadURL('http://samsonsheim.de:8000/demos.ogg');

        stream.play(true);

        stream.once('created', () => {

            //  Resize the video stream to fit our monitor once the texture has been created
            stream.setDisplaySize(716, 504).setVisible(true);

        });

        stream.on('error', () => {
            text.setText('Click to unlock video');
        });

        stream.on('unlocked', () => {
            text.setVisible(false);
        });

        this.add.image(440, 340, 'monitor');
    }
}

//  We use CANVAS because the video stream doesn't have CORs enabled, so it'll taint a WebGL Canvas

const config = {
    type: Phaser.CANVAS,
    width: 880,
    height: 680,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
