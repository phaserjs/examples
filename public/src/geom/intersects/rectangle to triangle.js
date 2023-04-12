class Example extends Phaser.Scene
{
    graphics;
    rectangle;
    triangle;

    create ()
    {
        this.graphics = this.add.graphics();

        this.triangle = new Phaser.Geom.Triangle.BuildEquilateral(400, 320, 140);

        this.rectangle = new Phaser.Geom.Rectangle(200, 150, 300, 200);

        this.graphics.lineStyle(2, 0x00ff00);
        this.graphics.strokeRectShape(this.rectangle);
        this.graphics.lineStyle(2, 0xffff00);
        this.graphics.strokeTriangleShape(this.triangle);

        this.input.on('pointermove', pointer =>
        {

            Phaser.Geom.Triangle.CenterOn(this.triangle, pointer.x, pointer.y);

        });
    }

    update ()
    {
        Phaser.Geom.Triangle.Rotate(this.triangle, 0.02);

        this.graphics.clear();
        this.graphics.lineStyle(2, 0x00ff00);
        this.graphics.strokeRectShape(this.rectangle);

        if (Phaser.Geom.Intersects.RectangleToTriangle(this.rectangle, this.triangle))
        {
            this.graphics.lineStyle(2, 0xff0000);
        }
        else
        {
            this.graphics.lineStyle(2, 0xffff00);
        }

        this.graphics.strokeTriangleShape(this.triangle);
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
