class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        this.physics.world.checkCollision.up = false;

        const group = this.physics.add.group({
            key: 'block',
            frameQuantity: 6,
            bounceY: 0.5,
            dragY: 30,
            velocityY: 300,
            collideWorldBounds: true,
            setXY: { x: 400, y: 0, stepY: -200 }
        });

        group.children.iterate(block =>
        {
            block.body.customSeparateY = true;
        });

        this.physics.add.collider(group, group, (s1, s2) =>
        {
            const b1 = s1.body;
            const b2 = s2.body;

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
            debug: true,
            fps: 100,
            gravity: { y: 300 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
