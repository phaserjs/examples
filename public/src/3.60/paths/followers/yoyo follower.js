class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('ball', 'assets/sprites/shinyball.png');
    }

    create ()
    {
        const startPoint = new Phaser.Math.Vector2(50, 260);
        const controlPoint1 = new Phaser.Math.Vector2(610, 25);
        const controlPoint2 = new Phaser.Math.Vector2(320, 370);
        const endPoint = new Phaser.Math.Vector2(735, 550);

        const curve = new Phaser.Curves.CubicBezier(startPoint, controlPoint1, controlPoint2, endPoint);

        const graphics = this.add.graphics();

        graphics.lineStyle(1, 0xffffff, 1);

        curve.draw(graphics, 64);

        const ball = this.add.follower(curve, 50, 260, 'ball');

        ball.startFollow({
            duration: 3000,
            yoyo: true,
            ease: 'Sine.easeInOut'
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
