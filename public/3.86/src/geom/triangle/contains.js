class Example extends Phaser.Scene
{
    a = 0;
    graphics;
    triangle;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaaaa00 } });

        this.triangle = new Phaser.Geom.Triangle.BuildEquilateral(400, 25, 450);
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

        Phaser.Geom.Triangle.Rotate(this.triangle, 0.02);

        this.graphics.clear();

        this.graphics.strokeTriangleShape(this.triangle);

        if (Phaser.Geom.Triangle.Contains(this.triangle, x, y))
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
