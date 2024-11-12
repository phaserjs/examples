class Example extends Phaser.Scene
{
    a = 0;
    graphics;
    point;
    ellipse;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00aaaa } });

        this.ellipse = new Phaser.Geom.Ellipse(400, 300, 600, 250);
        this.point = new Phaser.Geom.Rectangle(0, 0, 16, 16);
    }

    update ()
    {
        this.a += 0.015;

        if (this.a > Math.PI * 4)
        {
            this.a -= Math.PI * 4;
        }

        this.point.x = 400 - Math.cos(this.a / 2) * 400;
        this.point.y = 300 - Math.sin(this.a * 2) * 300;

        this.graphics.clear();

        this.graphics.strokeEllipseShape(this.ellipse);

        if (Phaser.Geom.Ellipse.ContainsPoint(this.ellipse, this.point))
        {
            this.graphics.fillStyle(0xaa0000);
        }
        else
        {
            this.graphics.fillStyle(0x0000aa);
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
