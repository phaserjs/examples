class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        const polygon = new Phaser.Geom.Polygon([
            200, 150,
            400, 300,
            600, 150,
            750, 300,
            600, 450,
            200, 450,
            50, 300
        ]);

        graphics.fillStyle(0x00aa00);
        graphics.fillPoints(polygon.points, true);

        this.input.on('pointermove', pointer =>
        {

            graphics.clear();

            if (Phaser.Geom.Polygon.ContainsPoint(polygon, pointer))
            {
                graphics.fillStyle(0xaa0000);
            }
            else
            {
                graphics.fillStyle(0x00aa00);
            }

            graphics.fillPoints(polygon.points, true);

        });
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
