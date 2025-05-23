class Example extends Phaser.Scene
{
    graphics;
    size = 32;
    points;
    curve;

    create ()
    {
        this.graphics = this.add.graphics();

        this.curve = new Phaser.Curves.Spline([
            50, 300,
            164, 246,
            274, 342,
            412, 257,
            522, 341,
            664, 264
        ]);

        this.points = this.curve.getDistancePoints(this.size);
    }

    update ()
    {
        this.graphics.clear();

        this.graphics.lineStyle(1, 0xffffff, 1);

        this.curve.draw(this.graphics, 64);

        this.graphics.fillStyle(0x00ff00, 1);

        this.graphics.lineStyle(1, 0x00ff00, 1);

        for (let i = 0; i < this.points.length; i++)
        {
            const p = this.points[i];

            this.graphics.fillCircle(p.x, p.y, 2);

            // var x = p.x - (size / 2);
            // var y = p.y - (size / 2);
            // graphics.strokeRect(x, y, size, size);
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
