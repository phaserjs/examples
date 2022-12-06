class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x0000aa }, fillStyle: { color: 0x00aa00 } });

        const rect = new Phaser.Geom.Rectangle(0, 0, 100, 100);

        this.input.on('pointermove', pointer =>
        {

            rect.width = Phaser.Math.FloorTo(pointer.x, 1, 20);
            rect.height = Phaser.Math.FloorTo(pointer.y, 1, 20);

            redraw();

        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            graphics.strokeRectShape(rect);

            graphics.fillPointShape(Phaser.Geom.Rectangle.GetSize(rect), 10);
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
