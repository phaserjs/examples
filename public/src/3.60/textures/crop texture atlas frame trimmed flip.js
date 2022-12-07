class Example extends Phaser.Scene
{
    offset;
    graphics;
    bob;

    preload ()
    {
        this.load.atlas('atlas', 'assets/atlas/megaset-2.png', 'assets/atlas/megaset-2.json');
    }

    create ()
    {
        this.add.image(400, 300, 'atlas', 'hello').setAlpha(0.3).setFlipX(true);

        this.graphics = this.add.graphics();

        this.bob = this.add.image(400, 300, 'atlas', 'hello').setFlipX(true);

        const cropWidth = 200;
        const cropHeight = 100;

        this.bob.setCrop(20, 20, cropWidth, cropHeight);

        this.offset = this.bob.getTopLeft();

        this.input.on('pointermove', pointer =>
        {

            this.bob.setCrop(
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
        this.graphics.strokeRect(this.offset.x + this.bob._crop.x, this.offset.y + this.bob._crop.y, this.bob._crop.width, this.bob._crop.height);
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
