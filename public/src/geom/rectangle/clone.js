class Example extends Phaser.Scene
{
    rectangles = [];
    seedRect;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { color: 0x0000aa }, fillStyle: { color: 0x0000aa } });

        this.seedRect = new Phaser.Geom.Rectangle(400, 300, 30, 30);

        this.input.on('pointermove', pointer =>
        {

            Phaser.Geom.Rectangle.CenterOn(this.seedRect, pointer.x, pointer.y);

        });
    }

    update ()
    {
        const clone = Phaser.Geom.Rectangle.Clone(this.seedRect);

        this.rectangles.push(clone);

        this.graphics.clear();

        for (let i = 0; i < this.rectangles.length; i++)
        {
            const rect = this.rectangles[i];

            Phaser.Geom.Rectangle.Inflate(rect, rect.width * 0.05, rect.height * 0.05);

            if (rect.width > 1600)
            {
                this.rectangles.splice(i--, 1);
            }
            else
            {
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
