class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('lemming', 'assets/sprites/lemming.png');
    }

    create ()
    {
        const points = [];

        points.push(new Phaser.Math.Vector2(50, 400));
        points.push(new Phaser.Math.Vector2(200, 200));
        points.push(new Phaser.Math.Vector2(350, 300));
        points.push(new Phaser.Math.Vector2(500, 500));
        points.push(new Phaser.Math.Vector2(700, 400));

        const curve = new Phaser.Curves.Spline(points);

        const graphics = this.add.graphics();

        graphics.lineStyle(1, 0xffffff, 1);

        curve.draw(graphics, 64);

        graphics.fillStyle(0x00ff00, 1);

        for (let i = 0; i < points.length; i++)
        {
            graphics.fillCircle(points[i].x, points[i].y, 4);
        }

        const lemming = this.add.follower(curve, 50, 400, 'lemming');

        lemming.startFollow({
            duration: 6000,
            yoyo: true,
            repeat: -1,
            rotateToPath: true,
            startAt: 0.5
        });

        this.input.on('pointerdown', () =>
        {

            if (lemming.isFollowing())
            {
                lemming.pauseFollow();
            }
            else
            {
                lemming.resumeFollow();
            }

        });

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
