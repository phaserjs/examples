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

        const ball = this.add.follower(curve, 50, 400, 'ball');

        ball.startFollow({
            duration: 4000,
            onComplete: () => {
                ball.pathTween.stop();
                ball.pathTween = null;
                ball.setPosition(100, 500);
            }
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    roundPixels: false,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
