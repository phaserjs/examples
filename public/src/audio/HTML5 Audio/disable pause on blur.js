class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.audio('theme', [
            'assets/audio/oedipus_wizball_highscore.ogg',
            'assets/audio/oedipus_wizball_highscore.mp3'
        ]);

        this.load.image('wizball', 'assets/sprites/wizball.png');
    }

    create ()
    {
        //  Prevent audio being paused when you switch tab
        this.sound.pauseOnBlur = false;

        this.add.image(400, 300, 'wizball').setScale(4);

        const text = this.add.text(10, 10, 'Click to start audio');

        this.input.once('pointerdown', () => {

            const music = this.sound.add('theme');

            music.play();

            text.setText('Music will continue while other tabs are active');

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    scene: Example,
    audio: {
        disableWebAudio: true
    }
};

const game = new Phaser.Game(config);
