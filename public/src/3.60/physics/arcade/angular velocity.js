class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        const group = this.physics.add.group({
            defaultKey: 'block',
            // Initial angular speed of 60 degrees per second.
            // Drag reduces it by 5 degrees/s/s, thus to zero after 12 seconds.
            angularDrag: 5,
            angularVelocity: 60,
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true,
            dragX: 60,
            dragY: 60
        });

        group.create(100, 200).setVelocity(100, 200);
        group.create(500, 200).setVelocity(-100, -100);
        group.create(300, 400).setVelocity(60, 100);
        group.create(600, 300).setVelocity(-30, -50);
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
