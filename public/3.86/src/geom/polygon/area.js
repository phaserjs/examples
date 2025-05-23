class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaa6622 } });

        const points = [
            new Phaser.Geom.Point(220, 450),
            new Phaser.Geom.Point(200, 200),
            new Phaser.Geom.Point(400, 300)
        ];

        const polygon = new Phaser.Geom.Polygon(points);

        const text = this.add.text(400, 50, '');

        this.input.on('pointermove', pointer =>
        {

            Phaser.Geom.Point.CopyFrom(pointer, points[points.length - 1]);

            polygon.setTo(points);

            redraw();
        });

        this.input.on('pointerdown', pointer =>
        {

            points.push(Phaser.Geom.Point.Clone(points[points.length - 1]));

        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            graphics.strokePoints(polygon.points, true);

            text.setText(`Polygon Area: ${polygon.area}`);
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
