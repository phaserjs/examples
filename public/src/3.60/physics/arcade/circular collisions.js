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

        const globe = this.physics.add.staticImage(0, 0, 'wizball')
            .setCircle(45);

        const balls = this.physics.add.group({
            defaultKey: 'ball',
            bounceX: 1,
            bounceY: 1
        });

        balls.defaults.setVelocityX = 100;
        balls.defaults.setVelocityY = 100;

        let created;

        created = balls.createMultiple({
            quantity: 20,
            key: balls.defaultKey,
            frame: 0
        });

        Phaser.Actions.PlaceOnCircle(created, { x: -200, y: -200, radius: 50 });

        balls.defaults.setVelocityX = -100;
        balls.defaults.setVelocityY = 100;

        created = balls.createMultiple({
            quantity: 20,
            key: balls.defaultKey,
            frame: 1
        });

        Phaser.Actions.PlaceOnCircle(created, { x: 400, y: -400, radius: 50 });

        balls.defaults.setVelocityX = -100;
        balls.defaults.setVelocityY = -100;

        created = balls.createMultiple({
            quantity: 20,
            key: balls.defaultKey,
            frame: 2
        });

        Phaser.Actions.PlaceOnCircle(created, { x: 600, y: 600, radius: 50 });

        balls.defaults.setVelocityX = 100;
        balls.defaults.setVelocityY = -100;

        created = balls.createMultiple({
            quantity: 20,
            key: balls.defaultKey,
            frame: 3
        });

        Phaser.Actions.PlaceOnCircle(created, { x: -800, y: 800, radius: 50 });

        for (const ball of balls.getChildren())
        {
            ball.setCircle(8);
        }

        this.physics.add.collider(globe, balls);
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
