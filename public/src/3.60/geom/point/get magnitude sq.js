class Example extends Phaser.Scene
{
    a = 0;
    points;
    point;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ fillStyle: { color: 0x2266aa } });

        this.point = new Phaser.Geom.Point();

        this.points = [];

        for (let i = 0; i < 45; i++)
        {
            const x = Math.random() * 800;
            const y = Math.random() * 600;
            this.points.push(new Phaser.Geom.Point(x, y));
        }
    }

    update ()
    {
        this.graphics.clear();

        this.a += 0.005;

        this.point.x = 400 - Math.cos(this.a) * 400;
        this.point.y = 300 - Math.sin(this.a * 4) * 300;

        for (let i = 0; i < this.points.length; i++)
        {
            const temp = Phaser.Geom.Point.Clone(this.point);

            temp.x -= this.points[i].x;
            temp.y -= this.points[i].y;
            const magnitudeSquared = Phaser.Geom.Point.GetMagnitudeSq(temp);

            if (magnitudeSquared < 30 * 30)
            {
                this.graphics.lineStyle(2, 0xaa0000);
            }
            else
            {
                this.graphics.lineStyle(2, 0x0000aa);
            }

            this.graphics.strokeCircle(this.points[i].x, this.points[i].y, 30);
        }

        this.graphics.fillPointShape(this.point, 5);
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
