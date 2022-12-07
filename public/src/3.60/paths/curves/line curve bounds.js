class Example extends Phaser.Scene
{
    graphics;
    bounds;
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

        this.bounds = new Phaser.Geom.Rectangle();

        this.curve = new Phaser.Curves.Line([ 100, 100, 600, 400 ]);

        // curve = new Phaser.Curves.Line(new Phaser.Math.Vector2(100, 100), new Phaser.Math.Vector2(600, 400));

        this.curve.getBounds(this.bounds);

        const point0 = this.add.image(this.curve.p0.x, this.curve.p0.y, 'dragcircle', 0)
            .setDataEnabled()
            .setInteractive();
        const point1 = this.add.image(this.curve.p1.x, this.curve.p1.y, 'dragcircle', 0)
            .setDataEnabled()
            .setInteractive();

        point0.data.set('vector', this.curve.p0);
        point1.data.set('vector', this.curve.p1);

        this.input.setDraggable([ point0, point1 ]);

        this.input.on(Phaser.Input.Events.DRAG_START, (event, gameObject) =>
        {
            console.log(gameObject);
            gameObject.setFrame(1);

        });

        this.input.on(Phaser.Input.Events.DRAG, (event, gameObject, dragX, dragY) =>
        {
            gameObject.x = dragX;
            gameObject.y = dragY;

            gameObject.data.get('vector').set(dragX, dragY);

            this.curve.getBounds(this.bounds);

        });

        this.input.on(Phaser.Input.Events.DRAG_END, (event, gameObject) =>
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

        //  Draw the bounds
        this.graphics.lineStyle(1, 0x00ff00, 1).strokeRectShape(this.bounds);

        //  Draw the curve
        this.graphics.lineStyle(2, 0xffffff, 1);

        this.curve.draw(this.graphics);

        //  Draw the follower
        this.curve.getPoint(this.path.t, this.path.vec);

        this.graphics.fillStyle(0xffff00, 1);
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
