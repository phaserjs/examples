class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('mushroom', 'assets/sprites/mushroom2.png');
        this.load.image('ball', 'assets/sprites/shinyball.png');
    }

    create ()
    {
        const sprite = this.physics.add.image(400, 300, 'mushroom');

        const group = this.physics.add.staticGroup({
            key: 'ball',
            frameQuantity: 30
        });

        Phaser.Actions.PlaceOnRectangle(
            group.getChildren(),
            new Phaser.Geom.Rectangle(84, 84, 616, 416)
        );

        // Static bodies must be refreshed if their game objects are moved.
        group.refresh();

        sprite
            .setVelocity(100, 200)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .setGravityY(200);

        const collider = this.physics.add.collider(sprite, group, null, () =>
        {
            this.physics.world.removeCollider(collider);
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
        arcade: { debug: true }
    },
    scene: Example
};

const game = new Phaser.Game(config);
