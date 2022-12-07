class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00aaaa }, fillStyle: { color: 0x0000aa } });

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

            const area = Phaser.Geom.Ellipse.Area(ellipse);

            const squareSide = Math.sqrt(area);

            graphics.fillRect(0, 0, squareSide, squareSide);

            graphics.strokeEllipseShape(ellipse);

            text.setText(`Ellipse Area: ${area}`);

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
