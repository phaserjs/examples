class Example extends Phaser.Scene
{
    iter = 0;
    tween;
    offset;
    graphics;
    bob;
    back;

    preload ()
    {
        this.load.image('mushroom', 'assets/sprites/mushroom-32x32.png');
    }

    create ()
    {
        this.back = this.add.tileSprite(400, 300, 32 * 18, 32 * 12, 'mushroom').setAlpha(0.2);

        this.bob = this.add.tileSprite(400, 300, 32 * 18, 32 * 12, 'mushroom');

        this.graphics = this.add.graphics();

        const cropWidth = 200;
        const cropHeight = 100;

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

        this.tween = this.tweens.addCounter({
            from: 1,
            to: 2,
            duration: 5000,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });
    }

    update ()
    {
        this.graphics.clear();
        this.graphics.lineStyle(1, 0x00ff00);
        this.graphics.strokeRect(this.offset.x + this.bob._crop.x, this.offset.y + this.bob._crop.y, this.bob._crop.width, this.bob._crop.height);

        this.back.tilePositionX = Math.cos(this.iter) * 700;
        this.back.tilePositionY = Math.sin(this.iter) * 500;
        this.back.tileScaleX = this.tween.getValue();
        this.back.tileScaleY = this.tween.getValue();

        this.bob.tilePositionX = Math.cos(this.iter) * 700;
        this.bob.tilePositionY = Math.sin(this.iter) * 500;
        this.bob.tileScaleX = this.tween.getValue();
        this.bob.tileScaleY = this.tween.getValue();

        this.iter += 0.001;
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
