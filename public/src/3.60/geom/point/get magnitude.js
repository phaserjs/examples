class Example extends Phaser.Scene
{
    create ()
    {

        const graphics = this.add.graphics({ lineStyle: { width: 1, color: 0x2266aa }, fillStyle: { color: 0x2266aa } });

        const point = new Phaser.Geom.Point(400, 300);

        const text = this.add.text(50, 50, '');

        this.input.on('pointermove', pointer =>
        {

            Phaser.Geom.Point.CopyFrom(pointer, point);

            redraw();
        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            graphics.fillPointShape(point, 20);

            graphics.lineBetween(0, 0, point.x, point.y);

            const magnitude = Phaser.Geom.Point.GetMagnitude(point);

            text.setText(`Point Magnitude: ${magnitude}`);
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
