class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.audio('theme', [
            'assets/audio/kyobi/wavs/nextLevel.wav'
        ]);
    }

    create ()
    {
        this.add.text(32, 32, 'Click to start music', { fill: '#ffffff' });

        this.sound.pauseOnBlur = false;

        this.input.once('pointerdown', () => {

            const music = this.sound.add('theme');

            music.play({ loop: true });

            this.add.text(32, 64, '5 seconds until loop', { fill: '#ffffff' });

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
