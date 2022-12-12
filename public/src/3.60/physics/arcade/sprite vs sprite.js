class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('mushroom', 'assets/sprites/mushroom2.png');
    }

    create ()
    {
        const sprite1 = this.physics.add.image(100, 100, 'mushroom');
        const sprite2 = this.physics.add.image(400, 100, 'mushroom');

        sprite1.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true);
        sprite2.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true);

        this.physics.add.collider(sprite1, sprite2);
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
            gravity: { y: 200 },
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);

