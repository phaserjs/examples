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
            frame: [ 0, 1, 2, 3 ],
            quantity: 12,
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true
        });

        Phaser.Actions.RandomRectangle(balls.getChildren(), this.physics.world.bounds);

        for (const ball of balls.getChildren())
        {
            Phaser.Math.RandomXY(ball.body.velocity, 100);
        }
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
