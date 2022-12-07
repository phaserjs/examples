class Example extends Phaser.Scene
{
    offset;
    graphics;
    bob;

    preload ()
    {
        this.load.image('pic', 'assets/sprites/hotdog.png');
    }

    create ()
    {
        this.add.image(400, 300, 'pic').setAlpha(0.3).setScale(2);

        this.bob = this.add.image(400, 300, 'pic').setScale(2);

        this.graphics = this.add.graphics();

        const cropRect = new Phaser.Geom.Rectangle(0, 0, 100, 40);

        this.bob.setCrop(cropRect);

        this.offset = this.bob.getTopLeft();

        this.input.on(Phaser.Input.Events.POINTER_MOVE, pointer =>
        {

            this.bob.setCrop(
                (pointer.x - this.offset.x - cropRect.width) / 2,
                (pointer.y - this.offset.y - cropRect.height) / 2,
                cropRect.width,
                cropRect.height
            );

        });
    }

    update ()
    {
        this.graphics.clear();
        this.graphics.lineStyle(1, 0x00ff00);
        this.graphics.strokeRect(this.offset.x + (this.bob._crop.x * 2), this.offset.y + (this.bob._crop.y * 2), this.bob._crop.width * 2, this.bob._crop.height * 2);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
