class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('platform', 'assets/sprites/platform.png');
    }

    create ()
    {
        this.matter.add.image(400, 150, 'platform').setStatic(true);
        this.matter.add.image(600, 350, 'platform').setStatic(true);
        this.matter.add.image(200, 550, 'platform').setStatic(true);

        this.player = this.matter.add.image(200, 300, 'block', null, { isSensor: true });

        this.matter.world.on('collisionstart', (event, bodyA, bodyB) =>
        {
            bodyA.gameObject.setTint(0xff0000);
        });

        this.matter.world.on('collisionend', (event, bodyA, bodyB) =>
        {
            bodyA.gameObject.setTint(0xffffff);
        });

        this.cursors = this.input.keyboard.createCursorKeys();

        this.add.text(10, 10, 'Move with cursor keys. Hit blocks with sensors.', { font: '16px Courier', fill: '#ffffff' });
    }

    update ()
    {
        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-10);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(10);
        }
        else
        {
            this.player.setVelocityX(0);
        }

        if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-10);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityY(10);
        }
        else
        {
            this.player.setVelocityY(0);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1b1464',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            debug: true,
            gravity: {
                y: 0
            }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
