class Example extends Phaser.Scene
{
    sprite;
    wall;

    preload ()
    {
        this.load.image('mushroom', 'assets/sprites/mushroom2.png');
        this.load.image('flectrum', 'assets/sprites/flectrum.png');
    }

    create ()
    {
        this.wall = this.physics.add.image(200, 300, 'flectrum').setImmovable();

        this.sprite = this.physics.add.image(500, 300, 'mushroom').setVelocity(-100, 0).setBounce(1).setCollideWorldBounds(true);
    }

    update ()
    {
        this.physics.world.collide(this.wall, this.sprite, () =>
        {
            console.log('hit?');
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
