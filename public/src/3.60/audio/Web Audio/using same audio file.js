class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.audio('synth1', [
            'assets/audio/tech/synth1.ogg',
            'assets/audio/tech/synth1.mp3'
        ]);
    }

    create ()
    {
        const sound1 = this.sound.add('synth1', { loop: true });
        const sound2 = this.sound.add('synth1', { loop: true });

        sound1.play();
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
