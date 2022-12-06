class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ fillStyle: { color: 0x00aaaa } });

        const ellipses = [];

        for (let x = 0; x < 10; x++)
        {
            ellipses[x] = [];
            for (let y = 0; y < 10; y++)
            {
                ellipses[x][y] = new Phaser.Geom.Ellipse(40 + x * 80, 30 + y * 60, 80, 60);
            }
        }

        this.input.on('pointerdown', pointer =>
        {
            const x = Math.floor(pointer.x / 80);
            const y = Math.floor(pointer.y / 60);

            ellipses[x][y].setEmpty();

            redraw();
        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            for (let x = 0; x < 10; x++)
            {
                for (let y = 0; y < 10; y++)
                {
                    graphics.fillEllipseShape(ellipses[x][y]);
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
