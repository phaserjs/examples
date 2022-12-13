class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('mushroom', 'assets/sprites/mushroom2.png');
        this.load.image('flectrum', 'assets/sprites/flectrum.png');
    }

    create ()
    {
        const wall = this.physics.add.image(200, 300, 'flectrum').setImmovable();

        const sprite = this.physics.add.image(500, 300, 'mushroom').setVelocity(-100, 0).setBounce(1).setCollideWorldBounds(true);

        this.physics.add.collider(wall, sprite, function ()
        {
            wall.setAlpha(0.5);
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
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
