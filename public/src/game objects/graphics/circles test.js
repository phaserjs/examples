class Example extends Phaser.Scene
{
    balls = [];
    graphics;

    create ()
    {
        this.graphics = this.add.graphics();

        for (let i = 0; i < 2000; i++)
        {
            this.balls.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                v: 1,
                a: Math.random() * 2 * Math.PI
            });
        }
    }

    update ()
    {
        this.graphics.clear();
        this.graphics.fillStyle(0x9966ff, 1);

        for (const b in this.balls)
        {
            const ball = this.balls[b];
            ball.x += ball.v * Math.cos(ball.a);
            ball.y += ball.v * Math.sin(ball.a);
            ball.a += 0.03;

            this.graphics.fillCircle(ball.x, ball.y, ball.a);
        }
    }
}

const config = {
    width: 800,
    height: 600,
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
