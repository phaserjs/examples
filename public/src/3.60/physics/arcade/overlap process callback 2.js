class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('atari', 'assets/sprites/atari800.png');
        this.load.image('chunk', 'assets/sprites/chunk.png');
    }

    create ()
    {
        const atari = this.physics.add.image(400, 300, 'atari')
            .setAngularVelocity(30);

        atari.setBodySize(280, 280);

        const chunks = this.physics.add.group({
            key: 'chunk',
            quantity: 240,
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true,
            velocityX: 100,
            velocityY: 100
        });

        Phaser.Actions.RandomRectangle(chunks.getChildren(), { x: 0, y: 0, width: 800, height: 100 });

        const atariRect = new Phaser.Geom.Rectangle(0, 0, atari.width, atari.height);

        this.physics.add.overlap(
            atari,
            chunks,
            null,
            function process (_atari, chunk)
            {
                const { x, y } = _atari.getLocalPoint(chunk.body.center.x, chunk.body.center.y);

                return atariRect.contains(x, y);
            }
        );
    }

    update ()
    {
        for (const body of this.physics.world.bodies.getArray())
        {
            body.debugBodyColor = body.touching.none ? 0x00ff00 : 0xff0000;
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
        arcade: {
            debug: true,
            debugShowVelocity: false
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
