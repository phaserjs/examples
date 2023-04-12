class Example extends Phaser.Scene
{
    graphics;
    curve;
    path;

    preload ()
    {
        this.load.spritesheet('dragcircle', 'assets/sprites/dragcircle.png', { frameWidth: 16 });
    }

    create ()
    {
        this.graphics = this.add.graphics();

        this.path = { t: 0, vec: new Phaser.Math.Vector2() };

        this.curve = new Phaser.Curves.Line([ 100, 100, 600, 400 ]);

        // curve = new Phaser.Curves.Line(new Phaser.Math.Vector2(100, 100), new Phaser.Math.Vector2(600, 400));

        const point0 = this.add.image(this.curve.p0.x, this.curve.p0.y, 'dragcircle', 0).setInteractive();
        const point1 = this.add.image(this.curve.p1.x, this.curve.p1.y, 'dragcircle', 0).setInteractive();

        point0.setData('vector', this.curve.p0);
        point1.setData('vector', this.curve.p1);

        this.input.setDraggable([ point0, point1 ]);

        this.input.on('dragstart', (pointer, gameObject) =>
        {

            gameObject.setFrame(1);

        });

        this.input.on('drag', (pointer, gameObject, dragX, dragY) =>
        {

            gameObject.x = dragX;
            gameObject.y = dragY;

            gameObject.data.get('vector').set(dragX, dragY);

        });

        this.input.on('dragend', (pointer, gameObject) =>
        {

            gameObject.setFrame(0);

        });

        this.tweens.add({
            targets: this.path,
            t: 1,
            ease: 'Sine.easeInOut',
            duration: 2000,
            yoyo: true,
            repeat: -1
        });
    }

    update ()
    {
        this.graphics.clear();
        this.graphics.lineStyle(2, 0xffffff, 1);

        this.curve.draw(this.graphics);

        this.curve.getPoint(this.path.t, this.path.vec);

        this.graphics.fillStyle(0xff0000, 1);
        this.graphics.fillRect(this.path.vec.x - 8, this.path.vec.y - 8, 16, 16);
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
