class Example extends Phaser.Scene
{
    a = 0;
    graphics;
    point;
    circle;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 }, fillStyle: { color: 0xff0000 }});

        this.circle = new Phaser.Geom.Circle(400, 300, 200);
        this.point = new Phaser.Geom.Rectangle(0, 0, 16, 16);
    }

    update ()
    {
        this.a += 0.01;

        if (this.a > Math.PI * 2)
        {
            this.a -= Math.PI * 2;
        }

        this.point.x = 400 - Math.cos(this.a) * 400;
        this.point.y = 300 - Math.sin(this.a * 2) * 300;

        this.graphics.clear();
        this.graphics.strokeCircleShape(this.circle);

        if (Phaser.Geom.Circle.ContainsPoint(this.circle, this.point))
        {
            this.graphics.fillStyle(0xff0000);
        }
        else
        {
            this.graphics.fillStyle(0x0000ff);
        }

        this.graphics.fillRect(this.point.x - 8, this.point.y - 8, this.point.width, this.point.height);
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
