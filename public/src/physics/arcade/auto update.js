class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('lemming', 'assets/sprites/lemming.png');
        this.load.image('ball', 'assets/sprites/red_ball.png');
    }

    create ()
    {
        this.block = this.physics.add.image(0, 300, 'lemming');

        this.block.body.immovable = true;
        this.block.body.autoUpdate = true;

        this.tweens.add({
            targets: this.block,
            x: 700,
            duration: 3000,
            ease: 'sine.inout',
            repeat: -1,
            yoyo: true
        });

        this.debug = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });

        this.balls = [];

        for (let i = 0; i < 64; i++)
        {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(-1900, 0);

            const ball = this.physics.add.image(x, y, 'ball');

            ball.body.setBounce(1);
            ball.setCollideWorldBounds(true);

            this.balls.push(ball);
        }

        this.physics.world.setBounds(0, -2000, 800, 2600);

        this.physics.add.collider(this.block, this.balls);
    }

    update ()
    {
        const block = this.block;

        this.debug.setText([
            'velocity.x: ' + block.body.velocity.x,
            'velocity.y: ' + block.body.velocity.y
        ]);
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
            gravity: { y: 50 },
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
