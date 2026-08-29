class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.setCORS('anonymous');
        this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.video('spaceace', 'assets/video/spaceace.mp4');
        this.load.image('play', 'assets/ui/play-button.png');
    }

    create ()
    {
        const intro = this.add.video(640, 360, 'spaceace');

        //  Get the first frame of the video to display behind our Play button
        intro.getFirstFrame();

        const playButton = this.add.image(640, 360, 'play').setInteractive();

        playButton.once('pointerdown', () => {

            intro.play();

            playButton.setVisible(false);

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
