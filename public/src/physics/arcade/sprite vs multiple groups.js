class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('mushroom', 'assets/sprites/mushroom2.png');
        this.load.image('ball', 'assets/sprites/shinyball.png');
        this.load.image('crate', 'assets/sprites/crate32.png');
    }

    create ()
    {
        const sprite = this.physics.add.image(400, 300, 'mushroom');

        const outer = new Phaser.Geom.Rectangle(0, 0, 800, 600);
        const inner = new Phaser.Geom.Rectangle(350, 250, 100, 100);

        //  Create a few balls

        const balls = this.physics.add.group({ immovable: true });

        for (let i = 0; i < 8; i++)
        {
            const point = Phaser.Geom.Rectangle.RandomOutside(outer, inner);
            const ball = balls.create(point.x, point.y, 'ball');

            this.physics.add.existing(ball);

            ball.body.setImmovable();
        }

        //  Create a few crates

        const crates = this.physics.add.group({ immovable: true });

        for (let i = 0; i < 8; i++)
        {
            const point = Phaser.Geom.Rectangle.RandomOutside(outer, inner);
            const ball = crates.create(point.x, point.y, 'crate');

            this.physics.add.existing(ball);

            ball.body.setImmovable();
        }

        sprite.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true).setGravityY(200);

        this.physics.add.collider(sprite, [ balls, crates ]);
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
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
