class Example extends Phaser.Scene
{
    a = 0;
    point;
    triangle;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 }, fillStyle: { color: 0xff0000 }});

        // triangle = new Phaser.Geom.Triangle.BuildEquilateral(400, 200, 300);

        // triangle = new Phaser.Geom.Triangle.BuildRight(200, 400, 300, 200);

        //  Random
        const x1 = Phaser.Math.Between(50, 400);
        const y1 = Phaser.Math.Between(50, 300);

        const x2 = Phaser.Math.Between(450, 750);
        const y2 = Phaser.Math.Between(50, 300);

        const x3 = Phaser.Math.Between(50, 750);
        const y3 = Phaser.Math.Between(350, 550);

        this.triangle = new Phaser.Geom.Triangle(x1, y1, x2, y2, x3, y3);

        this.point = new Phaser.Geom.Rectangle(0, 0, 16, 16);
    }

    update ()
    {
        this.a += 0.005;

        if (this.a > 1)
        {
            this.a = 0;
        }

        this.triangle.getPoint(this.a, this.point);

        this.graphics.clear();
        this.graphics.lineStyle(2, 0x00ff00);
        this.graphics.strokeTriangleShape(this.triangle);

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
