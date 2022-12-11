class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('ball', 'assets/sprites/shinyball.png');
    }

    create ()
    {
        const blocks = this.physics.add.group({
            key: 'block',
            frameQuantity: 5,
            setXY: { x: 200, y: 100, stepY: 100 },
            bounceX: 1
        });

        const balls = this.physics.add.group({
            defaultKey: 'ball',
            bounceX: 1,
            velocityX: 100
        });

        balls.create(0, 100).setMass(0.1);
        balls.create(0, 200).setMass(0.5);
        balls.create(0, 300).setMass(1);
        balls.create(0, 400).setMass(5);
        balls.create(0, 500).setMass(10);

        for (const ball of balls.getChildren())
        {
            ball.setScale(ball.body.mass ** 0.333);
        }

        this.physics.add.collider(balls, blocks);
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
