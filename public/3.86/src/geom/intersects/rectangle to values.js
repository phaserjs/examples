class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        const rect = new Phaser.Geom.Rectangle(325, 250, 150, 100);
        const triangle = Phaser.Geom.Triangle.BuildEquilateral(200, 50, 200);
        const circle = new Phaser.Geom.Circle(600, 130, 80);
        const ellipse = new Phaser.Geom.Ellipse(200, 450, 150, 90);
        const line = new Phaser.Geom.Line(550, 400, 650, 550);

        const shapes = [ triangle, circle, ellipse, line ];

        this.input.on('pointermove', pointer =>
        {

            Phaser.Geom.Rectangle.CenterOn(rect, pointer.x, pointer.y);

            redraw();
        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            graphics.lineStyle(2, 0xaaaa00);

            graphics.strokeTriangleShape(triangle);
            graphics.strokeCircleShape(circle);
            graphics.strokeEllipseShape(ellipse);
            graphics.strokeLineShape(line);

            graphics.lineStyle(2, 0x0000aa);

            for (let i = 0; i < shapes.length; i++)
            {
                const shape = shapes[i];
                if (Phaser.Geom.Intersects.RectangleToValues(rect, shape.left, shape.right, shape.top, shape.bottom))
                {
                    graphics.lineStyle(2, 0xaa0000);
                    break;
                }
            }

            graphics.strokeRectShape(rect);
        }
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
