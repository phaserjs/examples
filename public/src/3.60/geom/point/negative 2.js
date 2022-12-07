class Example extends Phaser.Scene
{
    points;
    step = 0.5;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 1, color: 0x2266aa } });

        this.points = [];
    }

    update ()
    {
        if (this.step <= Math.PI / 50)
        {
            return;
        }
        else
        {
            this.step = Math.max(this.step * 0.998, Math.PI / 50);
        }

        this.graphics.clear();

        let i = 0;

        for (let angle = 0; angle < Math.PI * 2; angle += this.step)
        {
            const point = this.points[i] || new Phaser.Geom.Point();

            point.setTo(Math.cos(angle) * 290, Math.sin(angle) * 290);

            this.points[i] = point;

            ++i;
            this.points[i] = Phaser.Geom.Point.Negative(point, this.points[i]);

            ++i;
        }

        for (let j = 0; j < this.points.length; j++)
        {
            this.points[j].x += 400;
            this.points[j].y += 300;
        }

        this.graphics.strokePoints(this.points, false);
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
