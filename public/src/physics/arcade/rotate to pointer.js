// Forward speed in px/s.
const SPEED = 100;

// Turning speed in deg/s.
// At 60 steps/s, this is 1.5 deg/step.
const ROTATION_SPEED = 90;

// The angle tolerance in degrees.
const TOLERANCE = 3;

class Example extends Phaser.Scene
{
    cursor;
    ship;

    preload ()
    {
        this.load.image('space', 'assets/skies/space2.png');
        this.load.image('ship', 'assets/sprites/thrust_ship.png');
        this.load.image('cursor', 'assets/sprites/drawcursor.png');
    }

    create ()
    {
        this.add.image(400, 300, 'space');

        this.ship = this.physics.add.image(200, 150, 'ship')
            .setBodySize(20, 20)
            .setVelocity(SPEED, 0);

        this.cursor = this.add.image(0, 0, 'cursor').setAlpha(0);

        this.add.text(10, 10, 'Click and hold to steer to target.');

        this.input.on('pointermove', (pointer) =>
        {
            this.cursor
                .setPosition(pointer.worldX, pointer.worldY)
                .setAlpha(0.5);
        });
    }

    update ()
    {
        const { isDown, worldX, worldY } = this.input.activePointer;

        if (isDown)
        {
            const angleToPointer = Phaser.Math.RadToDeg(
                Phaser.Math.Angle.Between(this.ship.x, this.ship.y, worldX, worldY)
            );

            const angleDelta = Phaser.Math.Angle.ShortestBetween(this.ship.body.rotation, angleToPointer);

            if (Phaser.Math.Fuzzy.Equal(angleDelta, 0, TOLERANCE))
            {
                this.ship.body.rotation = angleToPointer;
                this.ship.setAngularVelocity(0);
                this.ship.body.debugBodyColor = 0xff0000;
            }
            else
            {
                this.ship.setAngularVelocity(Math.sign(angleDelta) * ROTATION_SPEED);
                this.ship.body.debugBodyColor = 0xffff00;
            }

            this.cursor.setAlpha(1);
        }
        else
        {
            this.cursor.setAlpha(0.5);
        }

        this.physics.velocityFromRotation(
            Phaser.Math.DegToRad(this.ship.body.rotation),
            SPEED,
            this.ship.body.velocity
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
        arcade: { debug: true }
    },
    scene: Example
};

const game = new Phaser.Game(config);
