class Example extends Phaser.Scene
{
    rectangles;
    pointerRect;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { color: 0x0000aa }, fillStyle: { color: 0x0000aa, alpha: 0.5 } });

        this.pointerRect = new Phaser.Geom.Rectangle(0, 0, 80, 60);

        this.rectangles = [];

        for (let x = 0; x < 10; x++)
        {
            this.rectangles[x] = [];

            for (let y = 0; y < 10; y++)
            {
                this.rectangles[x][y] = new Phaser.Geom.Rectangle(x * 80, y * 60, 80, 60);
            }
        }

        this.input.on('pointermove', pointer =>
        {
            const x = Math.floor(pointer.x / 80);
            const y = Math.floor(pointer.y / 60);

            this.pointerRect.setPosition(x * 80, y * 60);

            Phaser.Geom.Rectangle.CopyFrom(this.pointerRect, this.rectangles[x][y]);
        });
    }

    update ()
    {
        this.graphics.clear();

        this.graphics.fillRectShape(this.pointerRect);

        for (let x = 0; x < 10; x++)
        {
            for (let y = 0; y < 10; y++)
            {
                const rect = this.rectangles[x][y];

                if (rect.width > 10)
                {
                    rect.width *= 0.95;
                    rect.height *= 0.95;
                }

                this.graphics.strokeRectShape(rect);
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
