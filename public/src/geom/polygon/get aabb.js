class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaa6622 } });

        const points = [
            new Phaser.Math.Vector2(220, 450),
            new Phaser.Math.Vector2(200, 200),
            new Phaser.Math.Vector2(400, 300)
        ];

        const polygon = new Phaser.Geom.Polygon(points);

        const aabb = Phaser.Geom.Polygon.GetAABB(polygon);

        this.input.on('pointermove', pointer =>
        {

            points[points.length - 1].copy(pointer);

            polygon.setTo(points);

            Phaser.Geom.Polygon.GetAABB(polygon, aabb);

            redraw();
        });

        this.input.on('pointerdown', pointer =>
        {

            points.push(points[points.length - 1].clone());

        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            graphics.strokePoints(polygon.points, true);

            graphics.lineStyle(2, 0x0000aa);
            graphics.strokeRectShape(aabb);
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
