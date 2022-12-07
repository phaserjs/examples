class Example extends Phaser.Scene
{
    offset;
    graphics;
    rt;

    preload ()
    {
        this.load.atlas('megaset', 'assets/atlas/megaset-0.png', 'assets/atlas/megaset-0.json');
    }

    create ()
    {
        this.rt = this.add.renderTexture(0, 0, 800, 800);

        const atlasTexture = this.textures.get('megaset');

        const frames = atlasTexture.getFrameNames();

        for (let i = 0; i < frames.length; i++)
        {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(0, 600);

            this.rt.drawFrame('megaset', frames[i], x, y);
        }

        this.graphics = this.add.graphics();

        const cropWidth = 290;
        const cropHeight = 120;

        this.rt.setCrop(200, 200, cropWidth, cropHeight);

        this.offset = this.rt.getTopLeft();

        this.input.on('pointermove', pointer =>
        {

            this.rt.setCrop(
                (pointer.x - this.offset.x) - cropWidth / 2,
                (pointer.y - this.offset.y) - cropHeight / 2,
                cropWidth,
                cropHeight
            );
        });
    }

    update ()
    {
        this.graphics.clear();
        this.graphics.lineStyle(1, 0x00ff00);
        this.graphics.strokeRect(this.offset.x + this.rt._crop.x, this.offset.y + this.rt._crop.y, this.rt._crop.width, this.rt._crop.height);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: 0x2d2d2d,
    scene: Example
};

const game = new Phaser.Game(config);
