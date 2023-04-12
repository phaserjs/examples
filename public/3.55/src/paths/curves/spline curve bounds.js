
class Example extends Phaser.Scene
{
    path;
    curve;
    bounds;
    points;
    graphics;

    preload ()
    {
        this.load.spritesheet('dragcircle', 'assets/sprites/dragcircle.png', { frameWidth: 16 });
    }

    create ()
    {
        this.path = { t: 0, vec: new Phaser.Math.Vector2() };

        this.bounds = new Phaser.Geom.Rectangle();

        this.curve = new Phaser.Curves.Spline([
            20, 550,
            260, 450,
            300, 250,
            550, 145,
            745, 256
        ]);

        this.points = this.curve.points;

        this.curve.getBounds(this.bounds);

        //  Create drag-handles for each point

        for (var i = 0; i < this.points.length; i++)
        {
            var point = this.points[i];

            var handle = this.add.image(point.x, point.y, 'dragcircle', 0)
                .setName(i)
                .setInteractive();

            handle.setData('vector', point);

            this.input.setDraggable(handle, true);
        }

        this.input.on(Phaser.Input.Events.DRAG_START, (pointer, gameObject) => {

            gameObject.setFrame(1);

        });

        this.input.on(Phaser.Input.Events.DRAG, (pointer, gameObject) => {

            gameObject.x = pointer.x;
            gameObject.y = pointer.y;

            gameObject.setData('vector', { x: pointer.x, y: pointer.y });

            // Update the this.curve and this.bounds
            const index = gameObject.name;
            this.curve.points[index].x = gameObject.getData('vector').x;
            this.curve.points[index].y = gameObject.getData('vector').y;

            this.curve.getBounds(this.bounds);
        });

        this.input.on(Phaser.Input.Events.DRAG_END, (pointer, gameObject) => {

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

        //  Draw the this.bounds
        this.graphics.lineStyle(1, 0x00ff00, 1).strokeRectShape(this.bounds);

        //  Draw the this.curve through the this.points
        this.graphics.lineStyle(2, 0xffffff, 1);

        this.curve.draw(this.graphics, 64);

        //  Draw t
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
