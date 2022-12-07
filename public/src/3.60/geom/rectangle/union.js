class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x0000aa, alpha: 0.6 }, fillStyle: { color: 0x00aa00, alpha: 0.7 } });

        const baseRect = new Phaser.Geom.Rectangle(350, 250, 100, 100);
        const pointerRect = new Phaser.Geom.Rectangle(0, 0, 25, 25);

        const rectangles = [];

        this.input.on('pointermove', pointer =>
        {

            Phaser.Geom.Rectangle.CenterOn(pointerRect, pointer.x, pointer.y);

            redraw();

        });

        this.input.on('pointerdown', pointer =>
        {

            rectangles.push(Phaser.Geom.Rectangle.Union(baseRect, pointerRect));

            redraw();

        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            graphics.fillRectShape(baseRect);

            graphics.fillRectShape(pointerRect);

            for (let i = 0; i < rectangles.length; i++)
            {
                graphics.strokeRectShape(rectangles[i]);
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
