class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('atari', 'assets/sprites/atari130xe.png');
        this.load.image('diamond', 'assets/sprites/diamond.png');
    }

    create ()
    {
        // An "immovable" body never separates or bounces during a collision.
        // It can still move by velocity.

        const atari = this.physics.add.image(400, 300, 'atari')
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .setImmovable(true)
            .setVelocity(200, 100);

        const gems = this.physics.add.group({
            key: 'diamond',
            quantity: 24,
            collideWorldBounds: true
        });

        Phaser.Actions.PlaceOnCircle(gems.getChildren(), new Phaser.Geom.Circle(400, 300, 200));

        this.physics.add.collider(atari, gems);
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
