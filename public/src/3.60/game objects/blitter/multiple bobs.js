class Example extends Phaser.Scene
{
    preload ()
    {

        this.load.image('atari', 'assets/sprites/atari130xe.png');

    }

    create ()
    {

        const blitter = this.add.blitter(0, 0, 'atari');

        blitter.create(0, 0);
        blitter.create(200, 50);
        blitter.create(400, 100);
        blitter.create(600, 150);

    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
