class Example extends Phaser.Scene
{
    create ()
    {

        const graphics = this.add.graphics({ lineStyle: { width: 4, color: 0xaa00aa } });

        const line = new Phaser.Geom.Line(400, 0, 430, 400);

        const text = this.add.text(50, 50, '');

        this.input.on('pointermove', pointer =>
        {

            line.x2 = pointer.x;
            line.y2 = pointer.y;

            redraw();
        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            graphics.strokeLineShape(line);

            const width = Phaser.Geom.Line.Width(line);

            graphics.lineStyle(2, 0x00aa00);
            graphics.lineBetween(400, 2, 400 + width, 2);

            text.setText(`Line Width: ${width}`);
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
