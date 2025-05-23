class Example extends Phaser.Scene
{
    graphics;
    rectangle;
    circle;
    moveShape;

    create ()
    {
        this.graphics = this.add.graphics();

        this.rectangle = new Phaser.Geom.Rectangle(200, 150, 300, 200);
        this.circle = new Phaser.Geom.Circle(300, 400, 60);

        this.moveShape = this.circle;

        this.input.on('pointerup', event =>
        {

            if (this.moveShape === this.circle)
            {
                this.moveShape = this.rectangle;
            }
            else
            {
                this.moveShape = this.circle;
            }

        });

        this.input.on('pointermove', pointer =>
        {

            this.moveShape.x = pointer.x;
            this.moveShape.y = pointer.y;

        });
    }

    update ()
    {
        this.graphics.clear();

        if (Phaser.Geom.Intersects.CircleToRectangle(this.circle, this.rectangle))
        {
            this.graphics.lineStyle(2, 0xff0000);
        }
        else
        {
            this.graphics.lineStyle(2, 0xffff00);
        }

        this.graphics.strokeRectShape(this.rectangle);
        this.graphics.strokeCircleShape(this.circle);
    }
}

const config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
