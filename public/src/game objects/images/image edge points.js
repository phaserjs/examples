class Example extends Phaser.Scene
{
    graphics;
    image1;

    preload ()
    {
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    }

    create ()
    {
        this.image1 = this.add.image(400, 300, 'logo');

        this.image1.setScale(0.5);

        this.tweens.add({

            targets: this.image1,
            duration: 2000,
            scaleX: 2,
            scaleY: 4,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true

        });

        this.graphics = this.add.graphics();
    }

    update ()
    {
        this.graphics.clear();

        const topLeft = this.image1.getTopLeft();

        this.graphics.fillStyle(0x00ff00, 1);
        this.graphics.fillRect(topLeft.x, topLeft.y, 6, 6);

        const topCenter = this.image1.getTopCenter();

        this.graphics.fillStyle(0xf0ff0f, 1);
        this.graphics.fillRect(topCenter.x, topCenter.y, 6, 6);

        const topRight = this.image1.getTopRight();

        this.graphics.fillStyle(0xff0000, 1);
        this.graphics.fillRect(topRight.x, topRight.y, 6, 6);

        const leftCenter = this.image1.getLeftCenter();

        this.graphics.fillStyle(0xff00ff, 1);
        this.graphics.fillRect(leftCenter.x, leftCenter.y, 6, 6);

        const rightCenter = this.image1.getRightCenter();

        this.graphics.fillStyle(0x00ff00, 1);
        this.graphics.fillRect(rightCenter.x, rightCenter.y, 6, 6);

        const bottomLeft = this.image1.getBottomLeft();

        this.graphics.fillStyle(0xff00ff, 1);
        this.graphics.fillRect(bottomLeft.x, bottomLeft.y, 6, 6);

        const bottomCenter = this.image1.getBottomCenter();

        this.graphics.fillStyle(0x00fff0, 1);
        this.graphics.fillRect(bottomCenter.x, bottomCenter.y, 6, 6);

        const bottomRight = this.image1.getBottomRight();

        this.graphics.fillStyle(0x0000ff, 1);
        this.graphics.fillRect(bottomRight.x, bottomRight.y, 6, 6);

        this.image1.rotation += 0.013;
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
