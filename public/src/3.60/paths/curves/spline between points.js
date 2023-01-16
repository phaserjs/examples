class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        const line = new Phaser.Geom.Line(50, 400, 700, 200);
        // let line = new Phaser.Geom.Line(700, 500, 100, 300);

        graphics.fillStyle(0xff0000, 1);
        graphics.fillCircle(line.x1, line.y1, 8);
        graphics.fillCircle(line.x2, line.y2, 8);

        const path = { t: 0, vec: new Phaser.Math.Vector2() };

        const points = [];

        points.push(line.getPointA());

        const waves = 4;

        let vx = 100;
        let vy = 100;
        let prevX = line.x1;
        let prevY = line.y1;

        for (let i = 1; i <= waves; i++)
        {
            const currentPoint = line.getPoint(i / waves);

            graphics.fillStyle(0xffff00).fillCircle(currentPoint.x, currentPoint.y, 4);

            const ray = new Phaser.Geom.Line(prevX, prevY, currentPoint.x, currentPoint.y);

            graphics.lineStyle(1, 0xffffff).strokeLineShape(ray);

            const normal = Phaser.Geom.Line.GetNormal(ray);
            const midPoint = Phaser.Geom.Line.GetMidPoint(ray);

            graphics.fillStyle(0x00ff00).fillCircle(midPoint.x + normal.x * vx, midPoint.y + normal.y * vy, 4);

            points.push(new Phaser.Math.Vector2(midPoint.x + normal.x * vx, midPoint.y + normal.y * vy));

            prevX = currentPoint.x;
            prevY = currentPoint.y;

            vy *= -1;
        }

        points.push(line.getPointB());

        const curve = new Phaser.Curves.Spline(points);

        graphics.lineStyle(1, 0xffffff, 1);
        curve.draw(graphics, 64);
    }

}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);

