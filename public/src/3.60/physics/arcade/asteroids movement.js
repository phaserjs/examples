class Example extends Phaser.Scene
{
    text;
    cursors;
    sprite;

    preload ()
    {
        this.load.image('bullet', 'assets/games/asteroids/bullets.png');
        this.load.image('ship', 'assets/games/asteroids/ship.png');
    }

    create ()
    {
        this.sprite = this.physics.add.image(400, 300, 'ship');

        this.sprite.setDamping(true);
        this.sprite.setDrag(0.99);
        this.sprite.setMaxVelocity(200);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
    }

    update ()
    {
        if (this.cursors.up.isDown)
        {
            this.physics.velocityFromRotation(this.sprite.rotation, 200, this.sprite.body.acceleration);
        }
        else
        {
            this.sprite.setAcceleration(0);
        }

        if (this.cursors.left.isDown)
        {
            this.sprite.setAngularVelocity(-300);
        }
        else if (this.cursors.right.isDown)
        {
            this.sprite.setAngularVelocity(300);
        }
        else
        {
            this.sprite.setAngularVelocity(0);
        }

        this.text.setText(`Speed: ${this.sprite.body.speed}`);

        this.physics.world.wrap(this.sprite, 32);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 0 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
