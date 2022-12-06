class Example extends Phaser.Scene
{
    circ;
    sprites = [];

    preload ()
    {
        this.load.image('flower', 'assets/sprites/flower-exo.png');
        this.load.image('mushroom', 'assets/sprites/mushroom16x16.png');
    }

    create ()
    {
        for (let i = 0; i < 240; i++)
        {
            const pos = Phaser.Geom.Rectangle.Random(this.physics.world.bounds);

            const block = this.physics.add.image(pos.x, pos.y, 'mushroom');

            block.setBounce(1).setCollideWorldBounds(true);

            Phaser.Math.RandomXY(block.body.velocity, 100);

            this.sprites.push(block);
        }

        this.sprites.push(this.physics.add.staticImage(400, 300, 'flower'));

        this.circ = this.add.circle(400, 300, 150).setStrokeStyle(2, 0xffff00);

        this.input.on('pointermove', pointer =>
        {

            this.circ.x = pointer.x;
            this.circ.y = pointer.y;

        }, this);
    }

    update (time, delta)
    {
        Phaser.Actions.SetAlpha(this.sprites, 0.5);

        const bodies = this.physics.overlapCirc(this.circ.x, this.circ.y, this.circ.radius, true, true);

        Phaser.Actions.SetAlpha(bodies.map((body) => body.gameObject), 1);
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
