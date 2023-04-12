class Example extends Phaser.Scene
{
    graphics;
    triangle;
    line;

    create ()
    {
        this.graphics = this.add.graphics();

        this.triangle = new Phaser.Geom.Triangle.BuildEquilateral(400, 200, 200);
        this.line = new Phaser.Geom.Line(260, 200, 450, 450);

        this.graphics.lineStyle(2, 0x00ff00);
        this.graphics.strokeTriangleShape(this.triangle);
        this.graphics.lineStyle(2, 0xffff00);
        this.graphics.strokeLineShape(this.line);

        this.input.on('pointermove', pointer =>
        {

            this.line.x2 = pointer.x;
            this.line.y2 = pointer.y;

        });
    }

    update ()
    {
        Phaser.Geom.Triangle.Rotate(this.triangle, 0.02);

        this.graphics.clear();
        this.graphics.fillStyle(0xffffff);
        this.graphics.lineStyle(2, 0x00ff00);
        this.graphics.strokeTriangleShape(this.triangle);

        if (Phaser.Geom.Intersects.TriangleToLine(this.triangle, this.line))
        {
            this.graphics.lineStyle(2, 0xff0000);
        }
        else
        {
            this.graphics.lineStyle(2, 0xffff00);
        }

        this.graphics.strokeLineShape(this.line);
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
