class Example extends Phaser.Scene
{
    iter = 0;
    ts;

    preload ()
    {
        this.load.atlas('atlas', 'assets/atlas/megaset-2.png', 'assets/atlas/megaset-2.json');
    }

    create ()
    {
        const atlasTexture = this.textures.get('atlas');

        const frames = atlasTexture.getFrameNames();

        frames.splice(frames.indexOf('platform'), 1);

        this.ts = this.add.tileSprite(0, 0, 800, 600, '__MISSING').setOrigin(0);

        this.add.text(10, 10, 'Click to change frame', { font: '16px Courier', fill: '#ffffff' });

        this.input.on('pointerdown', () =>
        {
            this.ts.setTexture('atlas', Phaser.Utils.Array.GetRandom(frames));
        });
    }

    update ()
    {
        const x = 1;

        this.ts.tilePositionX += x;
        this.ts.tilePositionY += x / 2;

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
