class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('platform', 'assets/sprites/platform.png');
        this.load.image('lemming', 'assets/sprites/lemming.png');
        this.load.image('spikedball', 'assets/sprites/spikedball.png');
    }

    create ()
    {
        const platforms = this.physics.add.group({
            key: 'platform',
            frameQuantity: 3,
            setXY: { x: 400, y: 150, stepY: 150 },
            velocityX: 60,
            immovable: true
        });

        const [ platform1, platform2, platform3 ] = platforms.getChildren();

        platform1.setFrictionX(1);
        platform2.setFrictionX(0.5);
        platform3.setFrictionX(0);

        const lemmings = this.physics.add.group({ gravityY: 600 });

        lemmings.createMultiple([
            {
                key: 'lemming',
                repeat: 3,
                setXY: { x: 250, y: 0, stepX: 100 }
            },
            {
                key: 'lemming',
                repeat: 3,
                setXY: { x: 250, y: 200, stepX: 100 }
            },
            {
                key: 'lemming',
                repeat: 3,
                setXY: { x: 250, y: 350, stepX: 100 }
            }
        ]);

        this.physics.add.group({
            key: 'spikedball',
            frameQuantity: 6,
            setXY: { x: 0, y: 625, stepX: 150 },
            angularVelocity: 60
        });

        this.physics.add.collider(lemmings, platforms);

        const graphics = this.add.graphics({ lineStyle: { color: 0xffff00 } });

        this.events.on('postupdate', () =>
        {
            graphics.clear();

            for (const body of this.physics.world.bodies.getArray())
            {
                const { x, y } = body.center;

                graphics.lineBetween(x, y, x + 100 * body.deltaXFinal(), y + 100 * body.deltaYFinal());
            }
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: { default: 'arcade' },
    scene: Example
};

const game = new Phaser.Game(config);
