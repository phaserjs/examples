class Example extends Phaser.Scene
{
    blocks;

    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        this.blocks = this.physics.add.group({
            bounceX: 0.5,
            bounceY: 0.5,
            collideWorldBounds: true
        });

        this.blocks.create(100, 200, 'block').setVelocity(100, 200);
        this.blocks.create(500, 200, 'block').setVelocity(-100, -100);
        this.blocks.create(300, 400, 'block').setVelocity(60, 100);
        this.blocks.create(600, 300, 'block').setVelocity(-30, -50);

        this.physics.add.collider(this.blocks);
    }

    update ()
    {
        for (const block of this.blocks.getChildren())
        {
            const { velocity } = block.body;

            velocity.setLength(Math.floor(0.99 * velocity.length()));
        }
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
            debug: true,
            gravity: { y: 200 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
