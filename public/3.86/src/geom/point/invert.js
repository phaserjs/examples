class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ fillStyle: { color: 0x2266aa } });

        const point = new Phaser.Geom.Point(400, 100);

        this.input.on('pointermove', pointer =>
        {

            Phaser.Geom.Point.CopyFrom(pointer, point);

            redraw();
        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            graphics.fillPointShape(point, 15);

            Phaser.Geom.Point.Invert(point);

            graphics.fillStyle(0x00aa00);
            graphics.fillPointShape(point, 15);
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
