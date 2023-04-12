class Example extends Phaser.Scene
{
    downKeyDebug;
    upKeyDebug;
    rightKeyDebug;
    leftKeyDebug;
    player;
    cursors;

    preload ()
    {
        this.load.image('elephant', 'assets/sprites/elephant.png');
    }

    create ()
    {
        this.cursors = this.input.keyboard.createCursorKeys();

        this.player = this.physics.add.image(400, 300, 'elephant');

        this.player.setCollideWorldBounds(true);

        this.leftKeyDebug = this.add.text(10, 300, 'Left', { font: '16px Courier', fill: '#00ff00' });
        this.rightKeyDebug = this.add.text(570, 300, 'Right', { font: '16px Courier', fill: '#00ff00' });
        this.upKeyDebug = this.add.text(300, 10, 'Up', { font: '16px Courier', fill: '#00ff00' });
        this.downKeyDebug = this.add.text(300, 530, 'Down', { font: '16px Courier', fill: '#00ff00' });
    }

    update ()
    {
        this.player.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-300);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(300);
        }

        if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-300);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityY(300);
        }

        this.leftKeyDebug.setText([
            `Left: ${this.cursors.left.isDown}`,
            `down: ${this.cursors.left.timeDown}`,
            `up: ${this.cursors.left.timeUp}`,
            `duration: ${(this.cursors.left.isDown) ? this.cursors.left.getDuration() : this.cursors.left.duration}`
        ]);

        this.rightKeyDebug.setText([
            `Right: ${this.cursors.right.isDown}`,
            `down: ${this.cursors.right.timeDown}`,
            `up: ${this.cursors.right.timeUp}`,
            `duration: ${(this.cursors.right.isDown) ? this.cursors.right.getDuration() : this.cursors.right.duration}`
        ]);

        this.upKeyDebug.setText([
            `Up: ${this.cursors.up.isDown}`,
            `down: ${this.cursors.up.timeDown}`,
            `up: ${this.cursors.up.timeUp}`,
            `duration: ${(this.cursors.up.isDown) ? this.cursors.up.getDuration() : this.cursors.up.duration}`
        ]);

        this.downKeyDebug.setText([
            `Down: ${this.cursors.down.isDown}`,
            `down: ${this.cursors.down.timeDown}`,
            `up: ${this.cursors.down.timeUp}`,
            `duration: ${(this.cursors.down.isDown) ? this.cursors.down.getDuration() : this.cursors.down.duration}`
        ]);
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
