class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ fillStyle: { color: 0x00aaaa }, lineStyle: { width: 2, color: 0xaa0000 } });

        const ellipse = new Phaser.Geom.Ellipse(400, 300, 200, 100);

        this.input.on('pointermove', pointer =>
        {

            ellipse.setSize(pointer.x, pointer.y);

            redraw();
        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            graphics.fillEllipseShape(ellipse);

            const majorRadius = ellipse.getMajorRadius();

            graphics.strokeCircle(400, 300, majorRadius);
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
