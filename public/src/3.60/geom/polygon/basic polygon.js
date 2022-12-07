class Example extends Phaser.Scene
{
    create ()
    {
        const polygon = new Phaser.Geom.Polygon([
            400, 100,
            200, 278,
            340, 430,
            650, 80
        ]);

        const graphics = this.add.graphics({ x: 0, y: 0 });

        graphics.lineStyle(2, 0x00aa00);

        graphics.beginPath();

        graphics.moveTo(polygon.points[0].x, polygon.points[0].y);

        for (let i = 1; i < polygon.points.length; i++)
        {
            graphics.lineTo(polygon.points[i].x, polygon.points[i].y);
        }

        graphics.closePath();
        graphics.strokePath();
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
