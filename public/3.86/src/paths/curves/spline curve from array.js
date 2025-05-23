class Example extends Phaser.Scene
{
    graphics;
    points;
    curve;
    path;

    create ()
    {
        this.graphics = this.add.graphics();

        this.path = { t: 0, vec: new Phaser.Math.Vector2() };

        this.points = [
            50, 300,
            164, 246,
            274, 342,
            412, 257,
            522, 341,
            664, 264
        ];

        this.curve = new Phaser.Curves.Spline(this.points);

        this.tweens.add({
            targets: this.path,
            t: 1,
            ease: 'Sine.easeInOut',
            duration: 2000,
            yoyo: true,
            repeat: -1
        });
    }

    update ()
    {
        this.graphics.clear();

        this.graphics.lineStyle(1, 0xffffff, 1);

        this.curve.draw(this.graphics, 64);

        this.graphics.fillStyle(0x00ff00, 1);

        for (let i = 0; i < this.points.length; i++)
        {
            this.graphics.fillCircle(this.points[i].x, this.points[i].y, 4);
        }

        this.curve.getPoint(this.path.t, this.path.vec);

        this.graphics.fillStyle(0xff0000, 1);
        this.graphics.fillCircle(this.path.vec.x, this.path.vec.y, 8);
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
