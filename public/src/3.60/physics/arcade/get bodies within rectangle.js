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

            block.setVelocity(Phaser.Math.Between(50, 100), Phaser.Math.Between(50, 100));
            block.setBounce(1).setCollideWorldBounds(true);

            if (Math.random() > 0.5)
            {
                block.body.velocity.x *= -1;
            }
            else
            {
                block.body.velocity.y *= -1;
            }

            this.blocks.push(block);
        }

        this.rect = this.add.rectangle(400, 300, 300, 200).setStrokeStyle(2, 0xffff00);

        this.input.on('pointermove', pointer =>
        {

            this.rect.x = pointer.x;
            this.rect.y = pointer.y;

        }, this);
    }

    update (time, delta)
    {
        this.blocks.forEach(block =>
        {
            block.setTint(0xffffff);
        });

        //  We need the top-left of the rect
        const x = this.rect.x - (this.rect.width / 2);
        const y = this.rect.y - (this.rect.height / 2);

        const within = this.physics.overlapRect(x, y, this.rect.width, this.rect.height);

        within.forEach(body =>
        {
            body.gameObject.setTint(0xff0000);
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
            gravity: { y: 100 },
            debug: false
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
