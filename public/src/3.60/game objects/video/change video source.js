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
        this.load.video('mountains', 'assets/video/mountains.mp4', 'loadeddata', false, true);
        this.load.video('pumpkins', 'assets/video/pumpkins.mp4', 'loadeddata', false, true);
    }

    create ()
    {
        //  960 x 540
        this.intro = this.add.video(0, 0, 'pumpkins').setOrigin(0);

        this.intro.play(true);

        this.debug = this.add.text(0, 0, '', { font: '22px Courier', fill: '#00ff00' }).setShadow(1, 1);

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
    }

    update ()
    {
        this.debug.setText('Current Time: ' + this.intro.getCurrentTime() + ' / ' + this.intro.getDuration());
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
