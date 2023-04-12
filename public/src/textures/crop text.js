class Example extends Phaser.Scene
{
    offset;
    graphics;
    bob;

    create ()
    {
        const dull = this.add.text(400, 300, 'Phaser 3\nText Crop\nHell Yeah!', { fontFamily: 'Arial Black', fontSize: 74, color: '#c51b7d', align: 'center' }).setStroke('#de77ae', 16);
        dull.setAlpha(0.15).setOrigin(0.5);

        // dull.setFlipX(true);
        // dull.setFlipY(true);

        this.bob = this.add.text(400, 300, 'Phaser 3\nText Crop\nHell Yeah!', { fontFamily: 'Arial Black', fontSize: 74, color: '#c51b7d', align: 'center' }).setStroke('#de77ae', 16).setOrigin(0.5);

        // bob.setFlipX(true);
        // bob.setFlipY(true);

        this.graphics = this.add.graphics();

        const cropWidth = 200;
        const cropHeight = 50;

        this.bob.setCrop(0, 0, cropWidth, cropHeight);

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
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: 0x2d2d2d,
    scene: Example
};

const game = new Phaser.Game(config);
