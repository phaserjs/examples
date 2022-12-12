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
            angularAcceleration: 60
        });

        group.create(100, 200);
        group.create(500, 200);
        group.create(300, 400);
        group.create(600, 300);

        // After 6 seconds, slow them down again.
        this.time.delayedCall(6000, () =>
        {
            for (const block of group.getChildren())
            {
                block.setAngularAcceleration(0).setAngularDrag(60);
            }
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
        arcade: { debug: true }
    },
    scene: Example
};

const game = new Phaser.Game(config);
