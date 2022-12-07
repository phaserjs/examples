class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('ball', 'assets/sprites/shinyball.png');
    }

    create ()
    {
        const block = this.physics.add.image(200, 300, 'block');

        block.setBounce(1);

        const ball = this.physics.add.image(0, 300, 'ball');

        ball.setBounce(1);
        ball.setMass(10);
        ball.setVelocityX(100);

        this.physics.add.collider(ball, block);
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
