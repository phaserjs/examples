class Example extends Phaser.Scene
{
    ball;

    preload ()
    {
        this.load.image('ball', 'assets/sprites/wizball.png');
        this.load.image('platform', 'assets/sprites/platform.png');
    }

    create ()
    {
        this.ball = this.matter.add.image(50, 0, 'ball');

        this.ball.setCircle();
        this.ball.setFriction(0.005);
        this.ball.setBounce(0.6);
        this.ball.setVelocityX(1);
        this.ball.setAngularVelocity(0.15);

        const ground = this.matter.add.image(400, 400, 'platform');

        ground.setStatic(true);
        ground.setScale(2, 0.5);
        ground.setAngle(10);
        ground.setFriction(0.005);
    }

    update ()
    {
        if (this.ball.y > 600)
        {
            this.ball.setPosition(50, 0);
            this.ball.setVelocity(0, 0);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1b1464',
    parent: 'phaser-example',
    physics: {
        default: 'matter'
    },
    scene: Example
};

const game = new Phaser.Game(config);
