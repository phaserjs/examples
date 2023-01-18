class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('ball', 'assets/sprites/wizball.png');
    }

    create ()
    {
        const wheel = this.physics.add.image(50, 300, 'ball')
            .setAccelerationX(100)
            .setBounce(1)
            .setCollideWorldBounds(true);

        this.physics.world.on('worldstep', () =>
        {
            wheel.setAngularVelocity(
                Phaser.Math.RadToDeg(wheel.body.velocity.x / wheel.body.halfWidth)
            );
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
