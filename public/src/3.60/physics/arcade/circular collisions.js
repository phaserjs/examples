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
            defaultKey: 'ball',
            bounceX: 1,
            bounceY: 1
        });

        const PlaceOnCircle = Phaser.Actions.PlaceOnCircle;
        let created;

        balls.defaults.setVelocityX = 100;
        balls.defaults.setVelocityY = 100;

        created = balls.createMultiple({
            quantity: 20,
            key: balls.defaultKey,
            frame: 0
        });

        PlaceOnCircle(created, { x: -200, y: -200, radius: 50 });

        balls.defaults.setVelocityX = -100;
        balls.defaults.setVelocityY = 100;

        created = balls.createMultiple({
            quantity: 20,
            key: balls.defaultKey,
            frame: 1
        });

        PlaceOnCircle(created, { x: 400, y: -400, radius: 50 });

        balls.defaults.setVelocityX = -100;
        balls.defaults.setVelocityY = -100;

        created = balls.createMultiple({
            quantity: 20,
            key: balls.defaultKey,
            frame: 2
        });

        PlaceOnCircle(created, { x: 600, y: 600, radius: 50 });

        balls.defaults.setVelocityX = 100;
        balls.defaults.setVelocityY = -100;

        created = balls.createMultiple({
            quantity: 20,
            key: balls.defaultKey,
            frame: 3
        });

        PlaceOnCircle(created, { x: -800, y: 800, radius: 50 });

        balls.children.each(ball =>
        {
            ball.setCircle(8);
        });

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
        arcade: {
            debug: false
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
