class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ fillStyle: { color: 0x0000ff }, lineStyle: { color: 0x0000aa } });

        const rectangles = [];

        for (let x = 0; x < 10; x++)
        {
            rectangles[x] = [];
            for (let y = 0; y < 10; y++)
            {
                rectangles[x][y] = new Phaser.Geom.Rectangle(x * 80, y * 60, 80, 60);
            }
        }

        this.input.on('pointerdown', pointer =>
        {
            const x = Math.floor(pointer.x / 80);
            const y = Math.floor(pointer.y / 60);

            rectangles[x][y].setEmpty();

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
                    graphics.fillRectShape(rectangles[x][y]);
                    graphics.strokeRectShape(rectangles[x][y]);
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
