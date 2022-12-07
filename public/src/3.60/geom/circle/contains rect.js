class Example extends Phaser.Scene
{
    a = 0;
    graphics;
    rect;
    circle;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 }, fillStyle: { color: 0xff0000 }});

        this.circle = new Phaser.Geom.Circle(400, 300, 250);
        this.rect = new Phaser.Geom.Rectangle(0, 0, 100, 100);
    }

    update ()
    {
        this.a += 0.01;

        if (this.a > Math.PI * 2)
        {
            this.a -= Math.PI * 2;
        }

        this.rect.x = 350 - Math.sin(this.a * 2) * 350;
        this.rect.y = 250 - Math.cos(this.a) * 250;

        this.graphics.clear();
        this.graphics.strokeCircleShape(this.circle);

        if (Phaser.Geom.Circle.ContainsRect(this.circle, this.rect))
        {
            this.graphics.fillStyle(0xff0000);
        }
        else
        {
            this.graphics.fillStyle(0x0000ff);
        }

        this.graphics.fillRectShape(this.rect);
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
