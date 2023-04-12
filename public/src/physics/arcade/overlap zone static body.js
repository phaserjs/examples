class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        const zone = this.add.zone(300, 200, 200, 200);

        // Static body
        this.physics.add.existing(zone, true);

        const blocks = this.physics.add.group({
            defaultKey: 'block',
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true
        });

        blocks.create(100, 200).setVelocity(100, 200);
        blocks.create(500, 200).setVelocity(-100, -100);
        blocks.create(300, 400).setVelocity(60, 100);
        blocks.create(600, 300).setVelocity(-30, -50);

        this.physics.add.overlap(zone, blocks, (_zone, block) =>
        {
            block.setAlpha(0.5);
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
            debug: true,
            gravity: { y: 200 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);

