class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        const p0 = new Phaser.Math.Vector2(100, 500);
        const p1 = new Phaser.Math.Vector2(50, 100);
        const p2 = new Phaser.Math.Vector2(600, 100);
        const p3 = new Phaser.Math.Vector2(700, 500);

        const curve = new Phaser.Curves.CubicBezier(p0, p1, p2, p3);

        graphics.lineStyle(1, 0xffffff, 1);

        curve.draw(graphics, 64);

        //  Get 20 points equally spaced out along the curve
        const points = curve.getSpacedPoints(20);

        //  Draw the points
        graphics.fillStyle(0xff0000, 1);

        for (let i = 0; i < points.length; i++)
        {
            graphics.fillCircle(points[i].x, points[i].y, 4);
        }
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
