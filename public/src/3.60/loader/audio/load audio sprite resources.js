class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setPath('assets/audio/kyobi/');

        this.load.audioSprite('kyobi', 'kyobi.json');
    }

    create ()
    {
        const music = this.sound.addAudioSprite('kyobi');

        music.play('title');

        // music.play('gameOver');
        // music.play('nextLevel');

        // text.setText('Playing Dafunk - Hardcore Power (We Believe In Goa - Remix)');
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
