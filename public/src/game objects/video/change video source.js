class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.intro;
        this.debug;
    }

    preload ()
    {
        this.load.video('mountains', 'assets/video/mountains.mp4', true);
        this.load.video('pumpkins', 'assets/video/pumpkins.mp4', true);
    }

    create ()
    {
        //  960 x 540
        this.intro = this.add.video(0, 0, 'pumpkins').setOrigin(0);

        this.intro.on('locked', () => {

            let message = this.add.text(480, 100, 'Click to play video', { font: '32px Courier', fill: '#00ff00' }).setShadow(1, 1).setOrigin(0.5);

            this.intro.on('unlocked', () => {

                message.destroy();

            });

        });

        this.intro.play(true);

        this.debug = this.add.text(10, 10, '', { font: '22px Courier', fill: '#ffffff' }).setShadow(1, 1);

        //  Listen for the 'play' event to create our input handler
        this.intro.once('play', () => {

            this.input.on('pointerdown', () => {

                if (this.intro.getVideoKey() === 'pumpkins')
                {
                    this.intro.changeSource('mountains', true, true);
                }
                else
                {
                    this.intro.changeSource('pumpkins', true, true);
                }

            });

        });
    }

    update ()
    {
        this.debug.setText([
            'Current Time: ' + this.intro.getCurrentTime() + ' / ' + this.intro.getDuration(),
            'Click to change video'
        ]);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
