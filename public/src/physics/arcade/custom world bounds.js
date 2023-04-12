// TODO rename <group custom world bounds.js>

class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('monitor', 'assets/demoscene/monitor.png');
        this.load.image('sky', 'assets/skies/space2.png');
        this.load.spritesheet('ball', 'assets/sprites/balls.png', { frameWidth: 17, frameHeight: 17 });
    }

    create ()
    {
        this.add.image(400, 300, 'sky');

        // Balls in the default world bounds

        const balls1 = this.physics.add.group({
            key: 'ball',
            frame: 1,
            frameQuantity: 50,
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true,
            velocityX: 100,
            velocityY: 100
        });

        Phaser.Actions.RandomRectangle(balls1.getChildren(), this.physics.world.bounds);

        this.add.image(400, 300, 'monitor');

        // Balls in smaller bounds

        const smallBounds = new Phaser.Geom.Rectangle(254, 186, 292, 210);

        const balls2 = this.physics.add.group({
            key: 'ball',
            frame: 3,
            frameQuantity: 50,
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true,
            velocityX: 100,
            velocityY: 100
        });

        for (const ball of balls2.getChildren())
        {
            ball.body.customBoundsRectangle = smallBounds;
        }

        Phaser.Actions.RandomRectangle(balls2.getChildren(), smallBounds);
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
            gravity: { y: 200 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
