class Example extends Phaser.Scene
{
    iter = 1;
    ts;

    preload ()
    {
        this.load.atlas('atlas', 'assets/atlas/megaset-2.png', 'assets/atlas/megaset-2.json');
    }

    create ()
    {
        const atlasTexture = this.textures.get('atlas');

        const frames = atlasTexture.getFrameNames();

        const i = 0;
        let size = 64;

        this.ts = this.add.tileSprite(400, 300, size, size, 'atlas', 'hotdog');

        this.add.text(10, 10, 'Click to change frame and size', { font: '16px Courier', fill: '#ffffff' });

        this.input.on('pointerdown', () =>
        {

            size += 16;

            this.ts.setSize(size, size);

            let frame = Phaser.Utils.Array.GetRandom(frames);

            //  Otherwise you can't see it scrolling
            if (frame === 'platform')
            {
                frame = 'hotdog';
            }

            this.ts.setFrame(frame);

        }, this);
    }

    update ()
    {
        this.ts.tilePositionX += this.iter;
        this.ts.tilePositionY += this.iter * 2;
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
