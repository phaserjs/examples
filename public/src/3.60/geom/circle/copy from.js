class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ fillStyle: { color: 0x00ff00, alpha: 0.1 } });

        const circles = [];

        for (let x = 0; x < 8; x++)
        {
            circles[x] = [];
            for (let y = 0; y < 6; y++)
            {
                circles[x][y] = new Phaser.Geom.Circle(50 + x * 100, 50 + y * 100, 50);
            }
        }

        const bigCircle = new Phaser.Geom.Circle(400, 300, 250);

        this.input.on('pointerdown', pointer =>
        {
            const x = Math.floor(pointer.x / 100);
            const y = Math.floor(pointer.y / 100);

            Phaser.Geom.Circle.CopyFrom(bigCircle, circles[x][y]);

            redraw();
        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            for (let x = 0; x < 8; x++)
            {
                for (let y = 0; y < 6; y++)
                {
                    graphics.fillCircleShape(circles[x][y]);
                }
            }
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
