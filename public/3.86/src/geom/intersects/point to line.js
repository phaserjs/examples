class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        const line = new Phaser.Geom.Line(300, 200, 500, 400);
        const point = new Phaser.Geom.Point(200, 100);

        this.input.on('pointermove', pointer =>
        {

            point.x = Math.round(pointer.x / 10) * 10;
            point.y = Math.round(pointer.y / 10) * 10;

            redraw();
        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            graphics.lineStyle(2, 0x00ff00);
            graphics.strokeLineShape(line);

            if (Phaser.Geom.Intersects.PointToLine(point, line))
            {
                graphics.fillStyle(0xff0000);
            }
            else
            {
                graphics.fillStyle(0xffff00);
            }

            graphics.fillPointShape(point, 5);
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
