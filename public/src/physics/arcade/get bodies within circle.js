class Example extends Phaser.Scene
{
    circle;
    sprites = [];

    preload ()
    {
        this.load.image('flower', 'assets/sprites/flower-exo.png');
        this.load.image('mushroom', 'assets/sprites/mushroom16x16.png');
    }

    create ()
    {
        this.sprites = [];

        // 240 Dynamic Bodies

        for (let i = 0; i < 240; i++)
        {
            const pos = Phaser.Geom.Rectangle.Random(this.physics.world.bounds);

            const block = this.physics.add.image(pos.x, pos.y, 'mushroom');

            block.setBounce(1).setCollideWorldBounds(true);

            Phaser.Math.RandomXY(block.body.velocity, 100);

            this.sprites.push(block);
        }

        // 1 Static Body

        this.sprites.push(this.physics.add.staticImage(400, 300, 'flower'));

        this.circle = this.add.circle(400, 300, 150).setStrokeStyle(2, 0xffff00);

        this.input.on('pointermove', (pointer) =>
        {
            this.circle.copyPosition(pointer);
        });
    }

    update ()
    {
        Phaser.Actions.SetAlpha(this.sprites, 0.5);

        const { x, y, radius } = this.circle;

        const bodiesInCircle = this.physics.overlapCirc(x, y, radius, true, true);

        Phaser.Actions.SetAlpha(bodiesInCircle.map(body => body.gameObject), 1);
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
            gravity: { y: 100 },
            debug: false
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
