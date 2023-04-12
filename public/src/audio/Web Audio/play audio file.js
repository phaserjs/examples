class Example extends Phaser.Scene
{
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
        this.add.image(400, 300, 'wizball').setScale(4);

        const music = this.sound.add('theme');

        music.play();

        this.sound.pauseOnBlur = true;
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
