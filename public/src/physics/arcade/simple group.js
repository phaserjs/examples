class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        const group = this.physics.add.group({
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true
        });

        group.create(100, 200, 'block').setVelocity(100, 200);
        group.create(500, 200, 'block').setVelocity(-100, -100);
        group.create(300, 400, 'block').setVelocity(60, 100);
        group.create(600, 300, 'block').setVelocity(-30, -50);

        this.physics.add.collider(group);
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
