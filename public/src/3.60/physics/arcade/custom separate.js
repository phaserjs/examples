class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('crate', 'assets/sprites/crate32.png');
    }

    create ()
    {
        this.physics.world.checkCollision.up = false;

        const group = this.physics.add.group({
            bounceY: 0.5,
            collideWorldBounds: true,
            dragY: 30,
            frameQuantity: 18,
            key: 'crate',
            setXY: { x: 200, y: 0, stepX: 16, stepY: -64 },
            velocityY: 300
        });

        group.shuffle();

        for (const crate of group.getChildren())
        {
            crate.body.customSeparateY = true;
        }

        this.physics.add.collider(group, group, function (gameObject1, gameObject2)
        {
            const b1 = gameObject1.body;
            const b2 = gameObject2.body;

            if (b1.y > b2.y)
            {
                b2.y += (b1.top - b2.bottom);
                b2.stop();
            }
            else
            {
                b1.y += (b2.top - b1.bottom);
                b1.stop();
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
        arcade: {
            debug: false,
            fps: 60,
            gravity: { y: 600 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
