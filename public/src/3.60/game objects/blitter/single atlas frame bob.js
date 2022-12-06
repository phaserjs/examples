class Example extends Phaser.Scene
{
    preload ()
    {

        this.load.atlas('atlas', 'assets/atlas/megaset-2.png', 'assets/atlas/megaset-2.json');

    }

    create ()
    {

        const blitter = this.add.blitter(0, 0, 'atlas', 'hotdog');

        const bob = blitter.create(100, 100);

    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
