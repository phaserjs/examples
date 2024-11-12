class Example extends Phaser.Scene
{
    a = 0;
    graphics;
    rectangles;
    rect;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x0000aa }, fillStyle: { color: 0xaa0000 }});

        this.rect = new Phaser.Geom.Rectangle(0, 0, 30, 30);

        this.rectangles = [];

        for (let x = 0; x < 10; x++)
        {
            for (let y = 0; y < 10; y++)
            {
                this.rectangles.push(new Phaser.Geom.Rectangle(x * 80, y * 60, 80, 60));
            }
        }
    }

    update ()
    {
        this.a += 0.005;

        if (this.a > Math.PI * 2)
        {
            this.a -= Math.PI * 2;
        }

        this.rect.x = 370 - Math.cos(this.a) * 370;
        this.rect.y = 270 - Math.sin(this.a * 2) * 270;

        this.graphics.clear();
        this.graphics.fillRectShape(this.rect);

        // stroke blue all rectangles NOT overlapping rect
        this.graphics.lineStyle(1, 0x0000aa);

        for (let i = 0; i < this.rectangles.length; i++)
        {
            if (!Phaser.Geom.Rectangle.Overlaps(this.rectangles[i], this.rect))
            {
                this.graphics.strokeRectShape(this.rectangles[i]);
            }
        }

        // stroke red all rectangles that DO overlap rect
        this.graphics.lineStyle(2, 0xaa0000);

        for (let i = 0; i < this.rectangles.length; i++)
        {
            if (Phaser.Geom.Rectangle.Overlaps(this.rectangles[i], this.rect))
            {
                this.graphics.strokeRectShape(this.rectangles[i]);
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
