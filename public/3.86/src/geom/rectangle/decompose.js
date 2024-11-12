class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ fillStyle: { color: 0x0000aa }, lineStyle: { color: 0x0000aa } });

        const points = [];
        const rect = new Phaser.Geom.Rectangle(0, 0, 200, 150);

        this.input.on('pointerdown', () =>
        {
            Phaser.Geom.Rectangle.Decompose(rect, points);
            redraw();
        });

        this.input.on('pointermove', pointer =>
        {
            Phaser.Geom.Rectangle.CenterOn(rect, pointer.x, pointer.y);
            redraw();
        });

        function redraw ()
        {
            graphics.clear();

            graphics.strokeRectShape(rect);

            for (let i = 0; i < points.length; i++)
            {
                graphics.fillCircle(points[i].x, points[i].y, 5);
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
