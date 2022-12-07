class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        const curve = new Phaser.Curves.Line(new Phaser.Math.Vector2(100, 100), new Phaser.Math.Vector2(600, 400));

        graphics.lineStyle(1, 0xffffff, 1);

        curve.draw(graphics);

        //  Get 32 points from the curve
        const points = curve.getPoints(32);

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
