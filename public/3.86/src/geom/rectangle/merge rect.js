class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x0000aa }, fillStyle: { color: 0x00aa00} });

        const baseRect = new Phaser.Geom.Rectangle(350, 250, 100, 100);
        const pointerRect = new Phaser.Geom.Rectangle(0, 0, 25, 25);

        this.input.on('pointermove', pointer =>
        {

            Phaser.Geom.Rectangle.CenterOn(pointerRect, pointer.x, pointer.y);

            redraw();

        });

        this.input.on('pointerdown', pointer =>
        {

            Phaser.Geom.Rectangle.MergeRect(baseRect, pointerRect);

            redraw();

        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            graphics.fillRectShape(baseRect);

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
