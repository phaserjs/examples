class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x0000aa }, fillStyle: { color: 0x00aa00} });

        const points = [];

        const rect = new Phaser.Geom.Rectangle(350, 250, 100, 100);

        this.input.on('pointerdown', pointer =>
        {

            points.push(pointer.position.clone());

            redraw();

        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            for (let i = 0; i < points.length; i++)
            {
                const p = points[i];

                graphics.fillCircle(p.x, p.y, 4);
            }

            Phaser.Geom.Rectangle.MergePoints(rect, points);

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
