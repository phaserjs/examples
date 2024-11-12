class Example extends Phaser.Scene
{
    a = 0;
    point;
    line;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 }, fillStyle: { color: 0xff0000 }});

        this.line = new Phaser.Geom.Line(100, 100, 600, 500);
        this.point = new Phaser.Geom.Rectangle(0, 0, 16, 16);
    }

    update ()
    {
        this.a += 0.005;

        if (this.a > 1)
        {
            this.a = 0;
        }

        this.line.getPoint(this.a, this.point);

        this.graphics.clear();
        this.graphics.lineStyle(2, 0x00ff00);
        this.graphics.strokeLineShape(this.line);

        this.graphics.fillStyle(0xff00ff);
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
