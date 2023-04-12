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
        const atlasTexture = this.textures.get('atlas');

        const frames = atlasTexture.getFrameNames();

        const startingFrames = [ 'atari400', 'bunny', 'cokecan', 'copy-that-floppy', 'hotdog' ];

        for (let i = 0; i < 5; i++)
        {
            this.images[i] = this.add.tileSprite(i * 160, 0, 160, 600, 'atlas', startingFrames[i]).setOrigin(0);
        }

        this.add.text(10, 10, 'Click to change frame', { font: '16px Courier', fill: '#ffffff' });

        this.input.on('pointerdown', () =>
        {

            this.images[0].setFrame(Phaser.Utils.Array.GetRandom(frames));
            this.images[1].setFrame(Phaser.Utils.Array.GetRandom(frames));
            this.images[2].setFrame(Phaser.Utils.Array.GetRandom(frames));
            this.images[3].setFrame(Phaser.Utils.Array.GetRandom(frames));
            this.images[4].setFrame(Phaser.Utils.Array.GetRandom(frames));

        }, this);
    }

    update ()
    {
        let x = 1;

        for (let i = 0; i < 5; i++)
        {
            this.images[i].tilePositionX += x;
            this.images[i].tilePositionY += x / 2;

            x *= -1;
        }

        this.iter += 0.01;
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
