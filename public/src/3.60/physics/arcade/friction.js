class Example extends Phaser.Scene
{
    lemmings;
    platforms;

    preload ()
    {
        this.load.image('platform', 'assets/sprites/platform.png');
        this.load.image('lemming', 'assets/sprites/lemming.png');
        this.load.image('spikedball', 'assets/sprites/spikedball.png');
    }

    create ()
    {
        this.platforms = this.physics.add.group({
            key: 'platform',
            frameQuantity: 3,
            setXY: { x: 400, y: 150, stepY: 150 },
            velocityX: 60,
            immovable: true
        });

        const [ platform1, platform2, platform3 ] = this.platforms.getChildren();

        platform1.setFrictionX(1);
        platform2.setFrictionX(0.5);
        platform3.setFrictionX(0);

        this.lemmings = this.physics.add.group({ gravityY: 600 });

        this.lemmings.createMultiple([
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

        this.physics.add.collider(this.lemmings, this.platforms);
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
