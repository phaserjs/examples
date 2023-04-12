class Example extends Phaser.Scene
{
    graphics;
    points;
    curve;
    path;

    preload ()
    {
        this.load.spritesheet('dragcircle', 'assets/sprites/dragcircle.png', { frameWidth: 16 });
    }

    create ()
    {
        this.path = { t: 0, vec: new Phaser.Math.Vector2() };

        this.curve = new Phaser.Curves.Spline([
            20, 550,
            260, 450,
            300, 250,
            550, 145,
            745, 256
        ]);

        this.points = this.curve.points;

        //  Create drag-handles for each point

        for (let i = 0; i < this.points.length; i++)
        {
            const point = this.points[i];

            const handle = this.add.image(point.x, point.y, 'dragcircle', 0).setInteractive();

            handle.setData('vector', point);

            this.input.setDraggable(handle);
        }

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

        this.graphics = this.add.graphics();
    }

    update ()
    {
        this.graphics.clear();

        this.graphics.lineStyle(2, 0xffffff, 1);

        this.curve.draw(this.graphics, 64);

        this.curve.getPoint(this.path.t, this.path.vec);

        this.graphics.fillStyle(0xffff00, 1);
        this.graphics.fillCircle(this.path.vec.x, this.path.vec.y, 8);
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
