class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ fillStyle: { color: 0x0000aa }, lineStyle: { color: 0xaa0000 } });

        const rectangles = [];

        for (let x = 0; x < 4; x++)
        {
            rectangles[x] = [];
            for (let y = 0; y < 3; y++)
            {
                const width = Phaser.Math.Between(100, 200);
                const height = Phaser.Math.Between(100, 200);

                rectangles[x][y] = new Phaser.Geom.Rectangle(x * 200, y * 200, width, height);
            }
        }

        const rect = new Phaser.Geom.Rectangle(0, 0, 150, 100);

        this.input.on('pointermove', pointer =>
        {

            const x = Math.floor(pointer.x / 200);
            const y = Math.floor(pointer.y / 200);

            Phaser.Geom.Rectangle.FitInside(rect, rectangles[x][y]);

            redraw();
        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            for (let x = 0; x < 4; x++)
            {
                for (let y = 0; y < 3; y++)
                {
                    graphics.strokeRectShape(rectangles[x][y]);
                }
            }

            graphics.fillRectShape(rect);
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
