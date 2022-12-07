class Example extends Phaser.Scene
{
    graphics;
    triangleB;
    triangle;

    create ()
    {
        this.graphics = this.add.graphics();

        // triangle = new Phaser.Geom.Triangle.BuildEquilateral(400, 320, 140);
        this.triangle = new Phaser.Geom.Triangle.BuildEquilateral(400, 320, 40);

        this.triangleB = new Phaser.Geom.Triangle(400, 200, 300, 300, 500, 300);

        this.graphics.lineStyle(2, 0x00ff00);
        this.graphics.strokeTriangleShape(this.triangleB);
        this.graphics.lineStyle(2, 0xffff00);
        this.graphics.strokeTriangleShape(this.triangle);

        this.input.on('pointermove', pointer =>
        {

            Phaser.Geom.Triangle.CenterOn(this.triangle, pointer.x, pointer.y);

        });
    }

    update ()
    {
        Phaser.Geom.Triangle.Rotate(this.triangleB, 0.02);

        this.graphics.clear();
        this.graphics.lineStyle(2, 0x00ff00);
        this.graphics.strokeTriangleShape(this.triangleB);

        if (Phaser.Geom.Intersects.TriangleToTriangle(this.triangle, this.triangleB))
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
