class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.spritesheet('ball', 'assets/sprites/balls.png', { frameWidth: 17, frameHeight: 17 });
        this.load.image('rect', 'assets/sprites/128x128.png');
    }

    create ()
    {
        this.cameras.main.centerOn(0, 0);

        const rect = this.physics.add.staticImage(0, 0, 'rect');

        const balls = this.physics.add.group({
            bounceX: 1,
            bounceY: 1
        });

        balls.createMultiple({
            frame: [ 0, 1, 2, 3 ],
            key: 'ball',
            quantity: 6
        });

        Phaser.Actions.PlaceOnCircle(balls.getChildren(), { x: 0, y: 0, radius: 200 });

        for (const ball of balls.getChildren())
        {
            ball.setCircle(8);

            this.physics.moveToObject(ball, rect.body.center, 100);
        }

        this.physics.add.collider(rect, balls);
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
