class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('dude', 'assets/sprites/phaser-dude.png');
        this.load.image('ball', 'assets/sprites/blue_ball.png');
        this.load.image('sky', 'assets/skies/cavern2.png');
    }

    create ()
    {
        const targets = [
            new Phaser.Math.Vector2(100, 500),
            new Phaser.Math.Vector2(700, 100),
            new Phaser.Math.Vector2(700, 500),
            new Phaser.Math.Vector2(100, 100)
        ];

        let targetIndex = 0;

        this.add.image(400, 300, 'sky');

        const block = this.physics.add.image(100, 100, 'block');

        block.body.immovable = true;
        block.body.allowGravity = false;

        const dude = this.physics.add.image(100, 0, 'dude');

        this.time.addEvent({
            delay: 2000,
            startAt: 1500,
            loop: -1,
            callback: () =>
            {
                this.physics.moveToObject(block, targets[targetIndex++ % targets.length], 0, 2000);
            }
        });

        this.physics.add.collider(block, dude, () =>
        {
            dude.setGravityY(12000);
        });

        this.input.on('pointerdown', () =>
        {
            if (dude.body.onFloor())
            {
                // Jump!
                dude.setGravityY(0);
                dude.body.velocity.y -= 300;
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
            gravity: { y: 800 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
