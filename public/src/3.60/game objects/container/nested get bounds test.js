class Example extends Phaser.Scene
{
    graphics;
    bounds;
    container;
    image;

    preload ()
    {
        this.load.image('disk', 'assets/sprites/copy-that-floppy.png');
    }

    create ()
    {
        this.image = this.add.image(0, 0, 'disk');

        this.container = this.add.container(0, 0, [ this.image ]);

        const container2 = this.add.container(400, 300, [ this.container ]);

        this.graphics = this.add.graphics();

        this.bounds = this.image.getBounds();

        this.tweens.add({

            targets: container2,
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
        this.container.rotation += 0.015;

        this.bounds = this.image.getBounds();

        this.graphics.clear();
        this.graphics.lineStyle(1, 0xffff00);
        this.graphics.strokeRectShape(this.bounds);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d8d2d',
    scene: Example
};

const game = new Phaser.Game(config);
