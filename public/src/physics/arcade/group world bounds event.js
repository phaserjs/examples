class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/space2.png');
        this.load.spritesheet('ball', 'assets/sprites/balls.png', { frameWidth: 17, frameHeight: 17 });
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const balls = this.physics.add.group({
            key: 'ball',
            frameQuantity: 48,
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true,
            velocityX: 200,
            velocityY: 150
        });

        Phaser.Actions.RandomRectangle(balls.getChildren(), this.physics.world.bounds);

        for (const ball of balls.getChildren())
        {
            ball.body.onWorldBounds = true;
        }

        this.physics.world.on('worldbounds', (body) =>
        {
            const ball = body.gameObject;

            ball.setFrame((ball.frame.name + 1) % 5);
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
            debug: false,
            gravity: {
                y: 200
            }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
