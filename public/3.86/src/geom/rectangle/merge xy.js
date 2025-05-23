class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x0000aa } });

        const rect = new Phaser.Geom.Rectangle(350, 250, 100, 100);

        this.input.on('pointerdown', pointer =>
        {

            Phaser.Geom.Rectangle.MergeXY(rect, pointer.x, pointer.y);

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
