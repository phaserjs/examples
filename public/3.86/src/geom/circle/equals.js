class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ fillStyle: { color: 0x00ff00 } });

        const circles = [];

        for (let x = 0; x < 8; x++)
        {
            for (let y = 0; y < 6; y++)
            {
                const size = Phaser.Math.Between(1, 5) * 10;
                circles.push(new Phaser.Geom.Circle(50 + x * 100, 50 + y * 100, size));
            }
        }

        const mouseCircle = new Phaser.Geom.Circle(-50, -50, 50);

        this.input.on('pointermove', pointer =>
        {

            // round position to 25 pixels
            const x = Math.round(pointer.x / 25) * 25;
            const y = Math.round(pointer.y / 25) * 25;

            mouseCircle.setPosition(x, y);

            redraw();
        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            let strokeRed = false;

            for (let i = 0; i < circles.length; i++)
            {
                graphics.fillCircleShape(circles[i]);
                strokeRed = strokeRed || Phaser.Geom.Circle.Equals(mouseCircle, circles[i]);
            }

            if (strokeRed)
            {
                graphics.lineStyle(5, 0xff0000);
            }
            else
            {
                graphics.lineStyle(5, 0x0000ff);
            }

            graphics.strokeCircleShape(mouseCircle);
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
