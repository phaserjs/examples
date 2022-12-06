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

        const group = this.physics.add.group({
            key: 'ball',
            frameQuantity: 48,
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true,
            velocityX: 180,
            velocityY: 120
        });

        Phaser.Actions.RandomRectangle(group.getChildren(), this.cameras.main);

        Phaser.Actions.Call(group.getChildren(), ball =>
        {
            ball.body.onWorldBounds = true;
        });

        this.physics.world.on('worldbounds', this.onWorldBounds);
    }

    onWorldBounds (body)
    {
        const ball = body.gameObject;
        let frame = ball.frame.name;
        
        frame += 1;
        frame %= 5;

        ball.setFrame(frame);
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
            gravity: {
                y: 200
            }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
