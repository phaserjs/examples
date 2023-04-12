class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('platform', 'assets/demoscene/sunset-raster.png');
        this.load.image('lemming', 'assets/sprites/lemming.png');
    }

    create ()
    {
        const platform = this.physics.add.image(400, 200, 'platform')
            .setFriction(0, 1)
            .setImmovable(true)
            .setVelocityY(100);

        const sprites = this.physics.add.group({
            key: 'lemming',
            quantity: 4,
            setXY: { x: -400, y: 300, stepX: 200, stepY: 0 },
            gravityX: 100,
            velocityX: 300
        });

        this.time.addEvent({
            delay: 2000,
            loop: true,
            callback: function ()
            {
                platform.body.velocity.y *= -1;
            }
        });

        this.physics.add.collider(sprites, platform);
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
