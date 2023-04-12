class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('lemming', 'assets/sprites/lemming.png');
        this.load.image('ball', 'assets/sprites/shinyball.png');
        this.load.image('mushroom', 'assets/sprites/mushroom-32x32.png');
    }

    create ()
    {
        this.sprite = this.physics.add.image(400, 300, 'lemming');

        const outer = new Phaser.Geom.Rectangle(0, 0, 800, 600);
        const inner = new Phaser.Geom.Rectangle(350, 250, 100, 100);

        //  Create a few balls

        this.balls = this.physics.add.group({ immovable: true });

        for (let i = 0; i < 12; i++)
        {
            const point = Phaser.Geom.Rectangle.RandomOutside(outer, inner);
            const ball = this.balls.create(point.x, point.y, 'ball');

            this.physics.add.existing(ball);

            ball.body.setImmovable();
        }

        //  Create a few mushrooms

        this.mushrooms = this.physics.add.group({ immovable: true });

        for (let i = 0; i < 32; i++)
        {
            const point = Phaser.Geom.Rectangle.RandomOutside(outer, inner);
            const mushroom = this.mushrooms.create(point.x, point.y, 'mushroom');

            this.physics.add.existing(mushroom);

            mushroom.body.setImmovable();
        }

        this.sprite.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true).setGravityY(200);
    }

    update ()
    {
        //  As long as these methods are called as part of the 'update' step
        //  they will process collisions between any physics objects and you
        //  can use the callbacks to handle the results

        this.physics.collide(this.sprite, this.balls);

        this.physics.overlap(this.sprite, this.mushrooms, (sprite, mushroom) =>
        {

            mushroom.destroy();

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
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
