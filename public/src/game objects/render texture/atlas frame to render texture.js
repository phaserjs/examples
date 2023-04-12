class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('megaset', 'assets/atlas/megaset-0.png', 'assets/atlas/megaset-0.json');
        this.load.image('uv', 'assets/pics/uv-grid-diag.png');
    }

    create ()
    {
        const rt = this.add.renderTexture(400, 300, 800, 600);

        const atlasTexture = this.textures.get('megaset');

        const frames = atlasTexture.getFrameNames();

        for (let i = 0; i < frames.length; i++)
        {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(0, 600);

            rt.drawFrame('megaset', frames[i], x, y);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    scene: Example
};

const game = new Phaser.Game(config);
