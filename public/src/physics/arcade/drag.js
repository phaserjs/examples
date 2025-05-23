class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        this.physics.add.image(100, 100, 'block').setVelocityX(100).setDragX(10);
        this.physics.add.image(100, 200, 'block').setVelocityX(100).setDragX(20);
        this.physics.add.image(100, 300, 'block').setVelocityX(100).setDragX(50);
        this.physics.add.image(100, 400, 'block').setVelocityX(100).setDragX(100);
        this.physics.add.image(100, 500, 'block').setVelocityX(100).setDragX(1000);

        const bodies = Array.from(this.physics.world.bodies);
        for (const body of bodies)
        {
            const { drag, velocity } = body;

            console.log('Body will stop after %.3f seconds', velocity.x / drag.x);
        }
    }

    update ()
    {
        const bodies = Array.from(this.physics.world.bodies);
        for (const body of bodies)
        {
            body.debugBodyColor = body.speed > 0 ? 0x00ff00 : 0xff0000;
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
        arcade: { debug: true }
    },
    scene: Example
};

const game = new Phaser.Game(config);
