class Example extends Phaser.Scene
{
    zone;

    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        this.zone = this.add.zone(300, 200, 200, 200);

        // Dynamic body
        this.physics.add.existing(this.zone, false);

        this.zone.body.moves = false;

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

        this.physics.add.overlap(this.zone, blocks, (zone, block) =>
        {
            block.setAlpha(0.5);
        });
    }

    update ()
    {
        this.zone.body.debugBodyColor = this.zone.body.touching.none ? 0x00ffff : 0xffff00;
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
