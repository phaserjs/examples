class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.video('monkey', 'assets/video/monkey.mp4', true);
    }

    create ()
    {
        const intro = this.add.video(640, 360, 'monkey');

        intro.on('locked', () => {

            let message = this.add.text(640, 100, 'Click to play video', { font: '32px Courier', fill: '#00ff00' }).setShadow(1, 1).setOrigin(0.5);

            intro.on('unlocked', () => {

                message.destroy();

            });

        });

        let loops = 0;
        let counter = this.add.text(640, 690, 'Loops: 0', { font: '32px Courier', fill: '#ffffff' }).setShadow(1, 1).setOrigin(0.5);

        intro.on('loop', () => {

            loops++;

            counter.setText('Loops: ' + loops);

        });

        intro.play(true);
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
