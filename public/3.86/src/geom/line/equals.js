class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 5, color: 0xaa00aa } });

        const lines = [];

        for (let x = 0; x < 8; x++)
        {
            for (let y = 0; y < 6; y++)
            {
                const line = new Phaser.Geom.Line(x * 100 + 10, y * 100 + 50, x * 100 + 90, y * 100 + 50);

                Phaser.Geom.Line.Rotate(line, Phaser.Math.Between(0, 3) * (Math.PI / 4));

                lines.push(line);
            }
        }

        const mouseLine = new Phaser.Geom.Line(-80, 0, 0, 0);

        this.input.on('pointermove', pointer =>
        {

            // round position to (100 * n + 50) pixels
            const x = Math.floor(pointer.x / 100) * 100 + 50;
            const y = Math.floor(pointer.y / 100) * 100 + 50;

            Phaser.Geom.Line.CenterOn(mouseLine, x, y);

            redraw();
        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            let strokeRed = false;

            for (let i = 0; i < lines.length; i++)
            {
                graphics.strokeLineShape(lines[i]);
                strokeRed = strokeRed || Phaser.Geom.Line.Equals(mouseLine, lines[i]);
            }

            if (strokeRed)
            {
                graphics.lineStyle(5, 0xaa0000);
            }
            else
            {
                graphics.lineStyle(5, 0xaa00aa);
            }

            graphics.strokeLineShape(mouseLine);
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
