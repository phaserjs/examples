class Example extends Phaser.Scene
{
    rect;
    blocks = [];

    preload ()
    {
        this.load.image('mushroom', 'assets/sprites/mushroom16x16.png');
    }

    create ()
    {
        const spriteBounds = Phaser.Geom.Rectangle.Inflate(Phaser.Geom.Rectangle.Clone(this.physics.world.bounds), -20, -20);

        for (let i = 0; i < 500; i++)
        {
            const pos = Phaser.Geom.Rectangle.Random(spriteBounds);

            const block = this.physics.add.sprite(pos.x, pos.y, 'mushroom');

            block.setBounce(1).setCollideWorldBounds(true);

            Phaser.Math.RandomXY(block.body.velocity, 100);

            this.blocks.push(block);
        }

        this.rect = this.add.rectangle(400, 300, 300, 200).setStrokeStyle(2, 0xffff00);

        this.input.on('pointermove', (pointer) =>
        {
            this.rect.copyPosition(pointer);
        });
    }

    update ()
    {
        Phaser.Actions.SetAlpha(this.blocks, 0.5);

        const { left, top, width, height } = this.rect.getBounds();

        const bodiesInRect = this.physics.overlapRect(left, top, width, height);

        Phaser.Actions.SetAlpha(bodiesInRect.map(body => body.gameObject), 1);
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
