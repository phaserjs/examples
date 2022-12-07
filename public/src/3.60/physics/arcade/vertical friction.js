class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('dude', 'assets/sprites/phaser-dude.png');
    }

    create ()
    {

        // Friction movement is parallel to the movement of the immovable body
        // and perpendicular to the direction of overlap/separation

        const block = this.physics.add.image(400, 200, 'block')
            .setFriction(0, 1)
            .setImmovable(true)
            .setVelocityY(100);

        const sprite = this.physics.add.image(200, 300, 'dude')
            .setGravityX(100)
            .setVelocityX(100);

        this.time.addEvent({
            delay: 2000,
            loop: true,
            callback: function ()
            {
                block.body.velocity.y *= -1;
            }
        });

        this.physics.add.collider(block, sprite);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: { default: 'arcade', arcade: { debug: true } },
    scene: Example
};

const game = new Phaser.Game(config);
