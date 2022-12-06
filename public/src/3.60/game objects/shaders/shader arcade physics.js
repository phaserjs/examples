class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.glsl('bundle', 'assets/shaders/bundle2.glsl.js');
    }

    create ()
    {
        //  Our dynamic shader that will bounce around
        const block = this.add.shader('Marble', 100, 100, 32 * 4, 32 * 2);

        this.physics.add.existing(block, false);

        block.body.setVelocity(130, 180);
        block.body.setBounce(1, 1);
        block.body.setCollideWorldBounds(true);

        //  Our static shader that will just receive collide events
        const staticBlock = this.add.shader('Plasma', 400, 300, 32 * 3, 32 * 8);

        this.physics.add.existing(staticBlock, true);

        this.physics.add.collider(block, staticBlock);
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
