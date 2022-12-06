class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('clown', 'assets/sprites/clown.png');
    }

    create ()
    {
        const block = this.physics.add.image(600, 300, 'block');
        const clown = this.physics.add.image(200, 300, 'clown');

        // Move at 200 px/s:
        this.physics.moveToObject(clown, block, 200);

        // Move to arrive within 2 seconds:
        // this.physics.moveTo(clown, block, null, 2000);

        console.log('velocity', clown.body.velocity.x);

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
