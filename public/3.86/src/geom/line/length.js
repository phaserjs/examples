class Example extends Phaser.Scene
{
    create ()
    {

        const graphics = this.add.graphics({ lineStyle: { width: 4, color: 0xaa00aa } });

        const line = new Phaser.Geom.Line(400, 300, 550, 300);

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

            const length = Phaser.Geom.Line.Length(line);

            graphics.lineStyle(2, 0x00aa00);
            graphics.strokeCircle(400, 300, length);

            text.setText(`Line Length: ${length}`);
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
