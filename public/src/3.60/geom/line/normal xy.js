class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 4, color: 0xaa00aa } });

        const line = new Phaser.Geom.Line(400, 300, 550, 300);

        const textX = this.add.text(50, 50, '');
        const textY = this.add.text(50, 75, '');

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

            const normalX = Phaser.Geom.Line.NormalX(line);
            const normalY = Phaser.Geom.Line.NormalY(line);

            graphics.lineStyle(2, 0xaa0000);
            graphics.lineBetween(400, 300, 400 + normalX * 100, 300);

            graphics.lineStyle(2, 0x00aa00);
            graphics.lineBetween(400, 300, 400, 300 + normalY * 100);

            textX.setText(`Line Normal X: ${normalX}`);
            textY.setText(`Line Normal Y: ${normalY}`);
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
