class Example extends Phaser.Scene
{
    text;

    preload ()
    {
        this.text = this.add.text(10, 10, 'Loading audio ...', { font: '16px Courier', fill: '#00ff00' });

        this.load.audio('dafunk', [
            'assets/audio/Dafunk - Hardcore Power (We Believe In Goa - Remix).ogg',
            'assets/audio/Dafunk - Hardcore Power (We Believe In Goa - Remix).mp3',
            'assets/audio/Dafunk - Hardcore Power (We Believe In Goa - Remix).m4a'
        ]);
    }

    create ()
    {
        this.sound.pauseOnBlur = false;

        const music = this.sound.add('dafunk');

        music.play();

        this.text.setText('Playing Dafunk - Hardcore Power (We Believe In Goa - Remix)');
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
