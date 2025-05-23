class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        const rectangles = [];

        for (let x = 0; x < 16; x++)
        {
            for (let y = 0; y < 12; y++)
            {
                const size = Phaser.Math.Between(1, 5) * 10;

                rectangles.push(new Phaser.Geom.Rectangle(x * 50, y * 50, size, size));
            }
        }

        const pointerRect = new Phaser.Geom.Rectangle(0, 0, 50, 50);

        this.input.on('pointermove', pointer =>
        {

            // round position to 25 pixels
            const x = Math.round(pointer.x / 25) * 25;
            const y = Math.round(pointer.y / 25) * 25;

            pointerRect.setPosition(x, y);

            redraw();
        });

        redraw();

        function redraw ()
        {
            graphics.clear();
            graphics.lineStyle(2, 0x0000aa);

            let strokeRed = false;

            for (let i = 0; i < rectangles.length; i++)
            {
                graphics.strokeRectShape(rectangles[i]);
                strokeRed = strokeRed || Phaser.Geom.Rectangle.Equals(pointerRect, rectangles[i]);
            }

            if (strokeRed)
            {
                graphics.lineStyle(5, 0xaa0000);
            }
            else
            {
                graphics.lineStyle(5, 0x0000aa);
            }

            graphics.strokeRectShape(pointerRect);
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
