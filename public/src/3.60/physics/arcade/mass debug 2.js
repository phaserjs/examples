class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('ball', 'assets/sprites/shinyball.png');
    }

    create ()
    {
        // var blocks = this.physics.add.group({
        //     key: 'block',
        //     frameQuantity: 1,
        //     setXY: { x: 200, y: 100, stepY: 100 }
        // });

        // var ball1 = this.physics.add.image(0, 100, 'ball');
        // ball1.setVelocityX(100);

        // var balls = this.physics.add.group({
        //     defaultKey: 'ball',
        //     velocityX: 100
        // });

        // balls.create(0, 100);
        // balls.create(0, 200);

        // this.physics.add.collider(ball1, blocks, function (ball, block)
        // {
        // console.log('block velocity', block.body.velocity.x);
        // });

        const block = this.physics.add.image(400, 300, 'block');
        const ball = this.physics.add.image(200, 300, 'ball');

        // ball.setBounce(1);
        ball.setMass(10);
        ball.setVelocityX(100);

        // block.setVelocityX(-100);

        this.physics.add.collider(ball, block);
    }
}

// TODO

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        useTree: false,
        arcade: { debug: false }
    },
    scene: Example
};

const game = new Phaser.Game(config);
