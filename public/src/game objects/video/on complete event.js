class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.video('flight', 'assets/video/endless-flight.mp4', true);
    }

    create ()
    {
        const intro = this.add.video(400, 300, 'flight');

        intro.on('complete', () => {

            let message = this.add.text(400, 30, 'Video Completed - Click to restart', { font: '22px Courier', fill: '#ffffff' }).setOrigin(0.5);

            this.input.once('pointerdown', () => {

                message.destroy();

                intro.play();

            });

        });

        intro.play();
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
