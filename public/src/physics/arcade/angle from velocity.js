class Example extends Phaser.Scene
{
    arrow;

    preload ()
    {
        this.load.image('arrow', 'assets/sprites/arrow.png');
    }

    create ()
    {
        this.arrow = this.physics.add.image(400, 100, 'arrow')
            .setVelocity(200, 0)
            .setBounce(1, 1)
            .setCollideWorldBounds(true);
    }

    update ()
    {
        this.arrow.rotation = this.arrow.body.angle;
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
            debug: false,
            gravity: { y: 600 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
