class Example extends Phaser.Scene
{
    cursors;
    graphics;
    text;
    wheel;

    preload ()
    {
        this.load.image('wheel', 'assets/sprites/blade.png');
    }

    create ()
    {
        this.wheel = this.physics.add.image(400, 300, 'wheel')
            .setAngularDrag(0)
            .setAngularVelocity(360);

        this.graphics = this.add.graphics({ fillStyle: { color: 0xffff00, alpha: 0.5 } });

        this.text = this.add.text(0, 0, '', {
            fixedWidth: 350,
            fixedHeight: 150,
            fill: 'aqua',
            backgroundColor: '#000c'
        });

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update ()
    {
        const { left, right, down } = this.cursors;

        this.wheel.setAngularAcceleration(0).setAngularDrag(0);

        if (left.isDown)
        {
            this.wheel.setAngularAcceleration(-360);
        }
        else if (right.isDown)
        {
            this.wheel.setAngularAcceleration(360);
        }

        if (down.isDown)
        {
            this.wheel.setAngularDrag(360);
        }

        const deltaZ = this.wheel.body.deltaZ();

        this.graphics
            .clear()
            .slice(
                this.wheel.x,
                this.wheel.y,
                0.5 * this.wheel.width,
                0,
                Phaser.Math.DegToRad(deltaZ),
                deltaZ < 0
            )
            .fillPath();

        const { angularAcceleration, angularDrag, angularVelocity } = this.wheel.body;

        this.text.setText(`
Accelerate with LEFT and RIGHT keys.
Drag with DOWN key.

Angular Acceleration: ${angularAcceleration.toFixed(1)} deg/s²
Angular Drag:         ${angularDrag.toFixed(1)} deg/s²
Angular Velocity:     ${angularVelocity.toFixed(1)} deg/s
Delta Z:              ${deltaZ.toFixed(1)} deg/step`
        );
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: { debug: false }
    },
    scene: Example
};

const game = new Phaser.Game(config);
