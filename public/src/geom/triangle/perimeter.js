class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaaaa00 } });

        const triangle = new Phaser.Geom.Triangle(100, 100, 150, 500, 400, 300);

        const text = this.add.text(50, 50, '');

        this.input.on('pointermove', pointer =>
        {

            triangle.x3 = pointer.x;
            triangle.y3 = pointer.y;

            redraw();
        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            graphics.strokeTriangleShape(triangle);

            text.setText(`Perimeter : ${Phaser.Geom.Triangle.Perimeter(triangle)}`);
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
