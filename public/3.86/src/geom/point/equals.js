class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ fillStyle: { color: 0x2266aa } });

        const points = [];

        for (let i = 0; i < 100; i++)
        {
            const x = Phaser.Math.Between(1, 40) * 20;
            const y = Phaser.Math.Between(1, 30) * 20;
            points.push(new Phaser.Geom.Point(x, y));
        }

        const pointerPoint = new Phaser.Geom.Point();

        this.input.on('pointermove', pointer =>
        {

            // round position to 20 pixels
            const x = Math.round(pointer.x / 20) * 20;
            const y = Math.round(pointer.y / 20) * 20;

            pointerPoint.setTo(x, y);

            redraw();
        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            let strokeRed = false;

            for (let i = 0; i < points.length; i++)
            {
                graphics.fillPointShape(points[i], 15);
                strokeRed = strokeRed || Phaser.Geom.Point.Equals(pointerPoint, points[i]);
            }

            if (strokeRed)
            {
                graphics.fillStyle(0xaa0000);
            }
            else
            {
                graphics.fillStyle(0x0000aa);
            }

            graphics.fillPointShape(pointerPoint, 15);
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
