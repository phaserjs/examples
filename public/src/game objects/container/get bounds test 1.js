class Example extends Phaser.Scene
{
    graphics;
    bounds3;
    bounds2;
    bounds1;
    image3;
    image2;
    image1;

    preload ()
    {
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
        this.load.image('disk', 'assets/sprites/copy-that-floppy.png');
        this.load.image('tetris', 'assets/sprites/tetrisblock1.png');
    }

    create ()
    {
        this.image1 = this.add.image(700, 200, 'eye');
        this.image2 = this.add.image(180, 180, 'tetris');
        this.image3 = this.add.image(400, 500, 'disk');

        this.image1.setOrigin(1);
        this.image2.setOrigin(0);
        this.image3.setOrigin(0.5);

        this.image3.setScale(0.5);

        const container = this.add.container(100, 0, [ this.image1, this.image2, this.image3 ]).setAngle(20);

        this.graphics = this.add.graphics();

        this.bounds1 = this.image1.getBounds();
        this.bounds2 = this.image2.getBounds();
        this.bounds3 = this.image3.getBounds();

        this.tweens.add({

            targets: this.image3,
            duration: 2000,
            scaleX: 2,
            scaleY: 2,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true

        });
    }

    update ()
    {
        this.image1.rotation += 0.013;
        this.image2.rotation += 0.015;
        this.image3.rotation -= 0.010;

        this.bounds1 = this.image1.getBounds();
        this.bounds2 = this.image2.getBounds();
        this.bounds3 = this.image3.getBounds();

        this.graphics.clear();

        this.graphics.lineStyle(1, 0xff0000);
        this.graphics.strokeRectShape(this.bounds1);

        this.graphics.lineStyle(1, 0xffff00);
        this.graphics.strokeRectShape(this.bounds2);

        this.graphics.lineStyle(1, 0x00ff00);
        this.graphics.strokeRectShape(this.bounds3);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
