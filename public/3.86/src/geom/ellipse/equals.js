class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ fillStyle: { color: 0x00aaaa } });

        const ellipses = [];

        for (let x = 0; x < 8; x++)
        {
            for (let y = 0; y < 6; y++)
            {
                const width = Phaser.Math.Between(4, 5) * 20;
                const height = Phaser.Math.Between(4, 5) * 20;

                ellipses.push(new Phaser.Geom.Ellipse(50 + x * 100, 50 + y * 100, width, height));
            }
        }

        const mouseEllipse = new Phaser.Geom.Ellipse(-50, -50, 100, 80);

        this.input.on('pointermove', pointer =>
        {

            // round position to (100 * n + 50) pixels
            const x = Math.floor(pointer.x / 100) * 100 + 50;
            const y = Math.floor(pointer.y / 100) * 100 + 50;

            mouseEllipse.setPosition(x, y);

            redraw();
        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            let strokeRed = false;

            for (let i = 0; i < ellipses.length; i++)
            {
                graphics.fillEllipseShape(ellipses[i]);
                strokeRed = strokeRed || Phaser.Geom.Ellipse.Equals(mouseEllipse, ellipses[i]);
            }

            if (strokeRed)
            {
                graphics.lineStyle(5, 0xaa0000);
            }
            else
            {
                graphics.lineStyle(5, 0x0000aa);
            }

            graphics.strokeEllipseShape(mouseEllipse);
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
