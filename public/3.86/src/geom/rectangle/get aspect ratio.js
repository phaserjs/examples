class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x0000aa } });

        const rect = new Phaser.Geom.Rectangle(350, 250, 100, 100);

        const text = this.add.text(100, 100, '');

        this.input.on('pointermove', pointer =>
        {

            rect.width = Phaser.Math.FloorTo((pointer.x - 400) * 2, 1, 25);
            rect.height = Phaser.Math.FloorTo((pointer.y - 300) * 2, 1, 25);

            Phaser.Geom.Rectangle.CenterOn(rect, 400, 300);

            text.setText(`Aspect Ratio: ${Phaser.Geom.Rectangle.GetAspectRatio(rect)}`);

            redraw();

        });

        redraw();

        function redraw ()
        {
            graphics.clear();

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
