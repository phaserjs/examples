class Example extends Phaser.Scene
{
    zone;

    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        this.zone = this.add.zone(300, 200).setSize(200, 200);
        this.physics.world.enable(this.zone);
        this.zone.body.setAllowGravity(false);
        this.zone.body.moves = false;

        const group = this.physics.add.group({
            key: 'block',
            frameQuantity: 4,
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true,
            velocityX: 120,
            velocityY: 60
        });

        this.physics.add.overlap(group, this.zone);
    }

    update ()
    {
        this.zone.body.debugBodyColor = this.zone.body.touching.none ? 0x00ffff : 0xffff00;
    }
}

// TODO

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
