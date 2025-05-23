class Example extends Phaser.Scene
{
    a = 0;
    pointerRect;
    rect;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ fillStyle: { color: 0xaa0000} });

        this.rect = new Phaser.Geom.Rectangle(0, 0, 100, 150);
        this.pointerRect = new Phaser.Geom.Rectangle(450, 350, 150, 100);

        this.input.on('pointermove', pointer =>
        {

            Phaser.Geom.Rectangle.CenterOn(this.pointerRect, pointer.x, pointer.y);

        });
    }

    update ()
    {
        this.a += 0.015;

        if (this.a > Math.PI * 4)
        {
            this.a -= Math.PI * 4;
        }

        const x = 400 - Math.cos(this.a / 2) * 400;
        const y = 300 - Math.sin(this.a * 2) * 300;

        Phaser.Geom.Rectangle.CenterOn(this.rect, x, y);

        this.graphics.clear();
        this.graphics.fillRectShape(this.rect);

        if (Phaser.Geom.Intersects.RectangleToRectangle(this.rect, this.pointerRect))
        {
            this.graphics.lineStyle(4, 0xaa0000);
        }
        else
        {
            this.graphics.lineStyle(4, 0x00aa00);
        }

        this.graphics.strokeRectShape(this.pointerRect);
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
