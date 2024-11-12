class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        const ellipse = new Phaser.Geom.Ellipse(400, 300, 250, 150);

        const text = this.add.text(400, 50, '');

        this.input.on('pointermove', pointer =>
        {

            ellipse.setSize(pointer.x, pointer.y);

            redraw();

        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            const circumference = Phaser.Geom.Ellipse.Circumference(ellipse);

            // calculate side size for a square with the same circumference
            const squareSide = circumference / 4;

            graphics.lineStyle(2, 0x0000aa);
            graphics.strokeRect(400 - squareSide / 2, 300 - squareSide / 2, squareSide, squareSide);

            // calculate radius for a circle with the same circumference
            const circleRadius = circumference / (2 * Math.PI);

            graphics.lineStyle(2, 0x00aa00);
            graphics.strokeCircle(400, 300, circleRadius);

            graphics.lineStyle(2, 0x00aaaa);

            graphics.strokeEllipseShape(ellipse);

            text.setText(`Ellipse Circumference: ${circumference}`);
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
