class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('cannon_head', 'assets/tests/timer/cannon_head.png');
        this.load.spritesheet('ball', 'assets/sprites/balls.png', { frameWidth: 17, frameHeight: 17 });
    }

    create ()
    {
        const balls = this.physics.add.group({
            active: false,
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true,
            frame: [ 0, 1, 2, 3, 4 ],
            key: 'ball',
            quantity: 12,
            setXY: { x: 400, y: 300 }
        });

        const cannon = this.physics.add.image(400, 300, 'cannon_head')
            .setAngularVelocity(60);

        this.time.addEvent({
            delay: 100,
            startAt: 100,
            repeat: balls.getLength() - 1,
            callback: () =>
            {
                const ball = balls.getFirstDead();

                ball.setActive(true);

                this.physics.velocityFromAngle(cannon.angle, 300, ball.body.velocity);
            }
        });
    }

}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
