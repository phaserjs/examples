class Example extends Phaser.Scene
{
    text;
    cursors;
    circle;
    sprite;

    preload ()
    {
        this.load.image('ship', 'assets/games/asteroids/ship.png');
    }

    create ()
    {
        this.sprite = this.physics.add.image(400, 300, 'ship');

        this.sprite.body.setMaxSpeed(200);

        this.circle = this.add.circle(this.sprite.x, this.sprite.y, 0.5 * this.sprite.body.maxSpeed, 0xffffff, 0.2);

        console.log(this.circle);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
    }

    update ()
    {
        if (this.cursors.up.isDown)
        {
            this.physics.velocityFromRotation(this.sprite.rotation, this.sprite.body.maxSpeed, this.sprite.body.acceleration);
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

        this.physics.world.wrap(this.sprite, 100);

        this.circle.setPosition(this.sprite.x, this.sprite.y);
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
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
