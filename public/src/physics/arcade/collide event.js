class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('atari', 'assets/sprites/atari130xe.png');
        this.load.image('ball', 'assets/sprites/shinyball.png');
        this.load.image('mushroom', 'assets/sprites/mushroom2.png');
    }

    create ()
    {
        const atari = this.physics.add.image(250, 200, 'atari')
            .setImmovable(true);

        const sprite = this.physics.add.image(400, 300, 'mushroom')
            .setVelocity(100, 200)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .setGravityY(200);

        // This enables the world 'collide' event, which will be detected by the collider below.
        sprite.body.onCollide = true;

        const balls = this.physics.add.staticGroup({
            key: 'ball',
            frameQuantity: 30
        });

        Phaser.Actions.PlaceOnRectangle(
            balls.getChildren(),
            new Phaser.Geom.Rectangle(84, 84, 616, 416)
        );

        // Static bodies must be updated manually if their parent game objects are moved.
        balls.refresh();

        this.physics.add.collider(sprite, atari);
        this.physics.add.collider(sprite, balls);

        this.physics.world.on('collide', (gameObject1, gameObject2, body1, body2) =>
        {
            gameObject1.setAlpha(0.5);
            gameObject2.setAlpha(0.5);
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
        arcade: { debug: false }
    },
    scene: Example
};

const game = new Phaser.Game(config);
