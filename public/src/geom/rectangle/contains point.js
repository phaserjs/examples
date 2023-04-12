class Example extends Phaser.Scene
{
    a = 0;
    graphics;
    point;
    rect;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x0000aa }, fillStyle: { color: 0xaa0000 }});

        this.rect = new Phaser.Geom.Rectangle(250, 200, 300, 200);
        this.point = new Phaser.Geom.Circle(0, 0, 10);
    }

    update ()
    {
        this.a += 0.015;

        if (this.a > Math.PI * 2)
        {
            this.a -= Math.PI * 2;
        }

        this.point.x = 400 - Math.cos(this.a) * 400;
        this.point.y = 300 - Math.sin(this.a * 2) * 300;

        this.graphics.clear();
        this.graphics.strokeRectShape(this.rect);

        if (Phaser.Geom.Rectangle.ContainsPoint(this.rect, this.point))
        {
            this.graphics.fillStyle(0xaa0000);
        }
        else
        {
            this.graphics.fillStyle(0x0000aa);
        }

        this.graphics.fillCircleShape(this.point);
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
