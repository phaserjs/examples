class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('ball', 'assets/sprites/shinyball.png');
    }

    create ()
    {
        const points = [ 50, 400, 200, 200, 350, 300, 500, 500, 700, 400 ];

        const curve = new Phaser.Curves.Spline(points);

        const graphics = this.add.graphics();

        graphics.lineStyle(1, 0xffffff, 1);

        curve.draw(graphics, 64);

        graphics.fillStyle(0x00ff00, 1);

        for (let i = 0; i < points.length; i++)
        {
            graphics.fillCircle(points[i].x, points[i].y, 4);
        }

        const ball1 = this.add.follower(curve, 50, 350, 'ball');
        const ball2 = this.add.follower(curve, 50, 400, 'ball');
        const ball3 = this.add.follower(curve, 50, 450, 'ball');

        //  Providing just a number sets the duration for following the path

        ball1.startFollow(4000);
        ball2.startFollow(4000);
        ball3.startFollow(4000);
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
