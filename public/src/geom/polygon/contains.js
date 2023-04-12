class Example extends Phaser.Scene
{
    a = 0;
    graphics;
    polygon;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaa6622 } });

        this.polygon = new Phaser.Geom.Polygon([
            200, 150,
            400, 300,
            600, 150,
            750, 300,
            600, 450,
            200, 450,
            50, 300
        ]);
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

        this.graphics.clear();

        this.graphics.strokePoints(this.polygon.points, true);

        if (Phaser.Geom.Polygon.Contains(this.polygon, x, y))
        {
            this.graphics.fillStyle(0xaa0000);
        }
        else
        {
            this.graphics.fillStyle(0x0000aa);
        }

        this.graphics.fillCircle(x, y, 8);
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
