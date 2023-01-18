class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.spritesheet('boom', 'assets/sprites/explosion.png', { frameWidth: 64, frameHeight: 64, endFrame: 23 });
    }

    create ()
    {
        this.anims.create({
            key: 'explode',
            frames: 'boom',
            frameRate: 20,
            showOnStart: true,
            hideOnComplete: true
        });

        const blocks = this.physics.add.group({
            defaultKey: 'block',
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true,
            dragX: 0.5,
            dragY: 0.5,
            useDamping: true
        });

        for (let i = 0; i < 10; i++)
        {
            const block = blocks.create(Phaser.Math.Between(100, 700), Phaser.Math.Between(100, 500));

            block.setMass(Phaser.Math.Between(1, 2));
            block.setScale(block.body.mass ** 0.5);
        }

        const boom = this.add.sprite(0, 0, 'boom').setBlendMode('ADD').setScale(4).setVisible(false);

        this.input.on('pointerdown', (pointer) =>
        {
            boom.copyPosition(pointer).play('explode');

            const distance = new Phaser.Math.Vector2();
            const force = new Phaser.Math.Vector2();
            const acceleration = new Phaser.Math.Vector2();

            for (const block of blocks.getChildren())
            {
                distance.copy(block.body.center).subtract(pointer);
                force.copy(distance).setLength(5000000 / distance.lengthSq()).limit(1000);
                acceleration.copy(force).scale(1 / block.body.mass);
                block.body.velocity.add(acceleration);
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
            debug: false
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
