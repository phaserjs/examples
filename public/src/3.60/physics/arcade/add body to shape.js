class Example extends Phaser.Scene
{
    player;
    cursors;

    create ()
    {
        this.player = this.add.rectangle(400, 300, 64, 64, 0xffffff);

        this.physics.add.existing(this.player, false);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.player.body.setCollideWorldBounds(true);
    }

    update ()
    {
        this.player.body.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.player.body.setVelocityX(-300);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.body.setVelocityX(300);
        }

        if (this.cursors.up.isDown)
        {
            this.player.body.setVelocityY(-300);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.body.setVelocityY(300);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    backgroundColor: '#0072bc',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
