class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.spritesheet('ball', 'assets/sprites/balls.png', { frameWidth: 17, frameHeight: 17 });
        this.load.image('wizball', 'assets/sprites/wizball.png');
    }

    create ()
    {
        this.cameras.main.centerOn(0, 0);

        const wizball = this.physics.add.staticImage(0, 0, 'wizball')
            .setCircle(45);

        const balls = this.physics.add.group({
            bounceX: 1,
            bounceY: 1
        });

        balls.createMultiple({
            quantity: 6,
            key: 'ball',
            frame: [ 0, 1, 2, 3, 4 ]
        });

        Phaser.Actions.PlaceOnCircle(balls.getChildren(), { x: 0, y: 0, radius: 300 });

        for (const ball of balls.getChildren())
        {
            ball.setCircle(8);
            this.physics.moveToObject(ball, wizball, 100);
        }

        this.physics.add.collider(wizball, balls);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: { debug: false }
    },
    scene: Example
};

const game = new Phaser.Game(config);
