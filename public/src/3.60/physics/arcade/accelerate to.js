class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('clown', 'assets/sprites/clown.png');
    }

    create ()
    {
        const block = this.physics.add.staticImage(600, 300, 'block');
        const clown = this.physics.add.image(200, 300, 'clown');

        // Accelerate at 60 px/s/s, maximum velocity 300 px/s
        this.physics.accelerateToObject(clown, block, 60, 300, 300);

        // Same:
        // this.physics.accelerateTo(clown, block.x, block.y, 60, 300, 300);

        const collider = this.physics.add.overlap(clown, block, function (clownOnBlock)
        {
            clownOnBlock.body.stop();

            this.physics.world.removeCollider(collider);
        }, null, this);
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
