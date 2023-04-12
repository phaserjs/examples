class Example extends Phaser.Scene
{
    followers;
    graphics;
    path;

    preload ()
    {
        this.load.image('ball', 'assets/sprites/shinyball.png');
    }

    create ()
    {
        this.graphics = this.add.graphics();

        //  Create the zig-zag path

        this.path = new Phaser.Curves.Path(100, -50);

        this.path.lineTo(100, 50);

        const max = 8;
        const h = 500 / max;

        for (let i = 0; i < max; i++)
        {
            if (i % 2 === 0)
            {
                this.path.lineTo(700, 50 + h * (i + 1));
            }
            else
            {
                this.path.lineTo(100, 50 + h * (i + 1));
            }
        }

        this.path.lineTo(100, 650);

        //  Create the path followers

        this.followers = this.add.group();

        for (let i = 0; i < 32; i++)
        {
            const ball = this.followers.create(0, -50, 'ball');

            ball.setData('vector', new Phaser.Math.Vector2());

            this.tweens.add({
                targets: ball,
                z: 1,
                ease: 'Linear',
                duration: 12000,
                repeat: -1,
                delay: i * 100
            });
        }
    }

    update ()
    {
        this.graphics.clear();

        this.graphics.lineStyle(1, 0xffffff, 1);

        this.path.draw(this.graphics);

        const balls = this.followers.getChildren();

        for (let i = 0; i < balls.length; i++)
        {
            const t = balls[i].z;
            const vec = balls[i].getData('vector');

            //  The vector is updated in-place
            this.path.getPoint(t, vec);

            balls[i].setPosition(vec.x, vec.y);

            balls[i].setDepth(balls[i].y);
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
