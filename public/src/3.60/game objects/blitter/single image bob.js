class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('atari', 'assets/sprites/atari130xe.png');
    }

    create ()
    {
        const blitter = this.add.blitter(0, 0, 'atari');

        const bob = blitter.create(100, 100);

        console.log(blitter.children);
        console.log(blitter.getRenderList());
    }
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
