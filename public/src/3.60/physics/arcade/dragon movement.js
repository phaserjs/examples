class Example extends Phaser.Scene
{
    cursors;
    dragon;

    preload ()
    {
        this.load.image('clouds', 'assets/skies/clouds.png');
        this.load.spritesheet('dragon', 'assets/sprites/stormlord-dragon96x64.png', { frameWidth: 96, frameHeight: 64 });
    }

    create ()
    {
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dragon', { start: 0, end: 5 }),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dragon', { start: 6, end: 11 }),
            frameRate: 12,
            repeat: -1
        });

        this.add.image(400, 400, 'clouds');

        this.dragon = this.physics.add.sprite(400, 300, 'dragon')
            .play('right')
            .setBounce(0.2, 0.2)
            .setCollideWorldBounds(true)
            .setDrag(300, 300)
            .setMaxVelocity(600, 600)
            .setGravity(0, 450);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update ()
    {
        const { left, right, up, down } = this.cursors;

        this.dragon.setAcceleration(0, 0);

        if (left.isDown)
        {
            this.dragon.setAccelerationX(-600);
        }
        else if (right.isDown)
        {
            this.dragon.setAccelerationX(600);
        }

        if (up.isDown)
        {
            this.dragon.setAccelerationY(-600);
        }
        else if (down.isDown)
        {
            this.dragon.setAccelerationY(600);
        }

        const { x } = this.dragon.body.velocity;

        if (x < 0)
        {
            this.dragon.play('left', true);
        }
        else if (x > 0)
        {
            this.dragon.play('right', true);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt: true,
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
