class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x2266aa }, fillStyle: { color: 0x2266aa } });

        const points = [
            new Phaser.Math.Vector2(Math.random() * 300, Math.random() * 200),
            new Phaser.Math.Vector2(Math.random() * 400 + 400, Math.random() * 200),
            new Phaser.Math.Vector2(Math.random() * 400 + 400, Math.random() * 200 + 200),
            new Phaser.Math.Vector2(Math.random() * 400, Math.random() * 300 + 300),
            new Phaser.Math.Vector2(Math.random() * 400, Math.random() * 300 + 300)
        ];

        this.input.on('pointermove', pointer =>
        {
            points[0].copy(pointer);

            redraw();
        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            graphics.strokePoints(points, true);

            const centroid = Phaser.Math.GetCentroid(points);

            graphics.fillPointShape(centroid, 20);

            graphics.lineStyle(1, 0x2266aa);

            for (let i = 0; i < points.length; i++)
            {
                graphics.lineBetween(points[i].x, points[i].y, centroid.x, centroid.y);
            }
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
