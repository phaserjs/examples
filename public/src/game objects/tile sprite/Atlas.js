class Example extends Phaser.Scene
{
    iter = 0;
    images = [];

    preload ()
    {
        this.load.atlas('atlas', 'assets/atlas/megaset-2.png', 'assets/atlas/megaset-2.json');
    }

    create ()
    {
        const frames = [ 'atari400', 'bunny', 'cokecan', 'copy-that-floppy', 'hotdog' ];
        for (let i = 0; i < frames.length; ++i)
        {
            this.images[i] = this.add.tileSprite(i * 160, 0, 160, 600, 'atlas', frames[i]);
            this.images[i].originX = 0;
            this.images[i].originY = 0;
        }
    }

    update ()
    {
        let x = 1;
        for (let i = 0; i < this.images.length; ++i)
        {
            this.images[i].tilePositionX += x;
            x *= -1;
        }
        this.iter += 0.01;
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
