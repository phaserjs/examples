class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('wizball', 'assets/sprites/wizball.png');
    }

    create ()
    {
        const ball1 = this.physics.add.image(100, 240, 'wizball');
        const ball2 = this.physics.add.image(700, 240, 'wizball');

        ball1.setCircle(46);
        ball2.setCircle(46);

        ball1.setCollideWorldBounds(true);
        ball2.setCollideWorldBounds(true);

        ball1.setBounce(1);
        ball2.setBounce(1);

        ball1.setVelocity(150);
        ball2.setVelocity(-200, 60);

        this.physics.add.collider(ball1, ball2);
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
            debug: true,
            gravity: { y: 100 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
