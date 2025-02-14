import ANIMATION_KEYS from "../animationKeys.js";
import SPRITE_KEYS from "../spriteKeys.js";

export class Cake extends Phaser.Physics.Arcade.Sprite
{
    moveVelocity = 50;
    direction = -1;
    sensorSize = 10;
    groundSensor;
    groundOffset;

    constructor(scene, x, y, direction = -1)
    {
        super(scene, x, y, SPRITE_KEYS.CAKE);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
        this.setDepth(100);

        this.anims.play(ANIMATION_KEYS.CAKE_WALK, true);
        this.groundOffset = { x: this.body.halfWidth + (this.sensorSize * 0.5), y: this.body.halfHeight + (this.sensorSize * 0.5) };
        this.groundSensor = scene.addSensor(x - this.groundOffset.x, y + this.groundOffset.y, this.sensorSize, this.sensorSize);
        this.setDirection(direction);
    }

    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);

        if (this.direction === -1)
        {
            this.moveLeft();
        }
        else
        {
            this.moveRight();
        }
    }

    setDirection (direction)
    {
        this.direction = direction || this.direction * -1;

        const sensorPosition = { x: this.x + (this.direction * this.groundOffset.x), y: this.y + this.groundOffset.y };
        this.groundSensor.body.reset(sensorPosition.x, sensorPosition.y);
    }

    moveLeft ()
    {
        const sensorPosition = { x: this.x - this.groundOffset.x, y: this.y + this.groundOffset.y };

        this.setVelocityX(-this.moveVelocity);
        this.groundSensor.setVelocityX(-this.moveVelocity);
        this.flipX = true;

        if (this.groundSensor.body.touching.none && !this.groundSensor.body.wasTouching.none)
        {
            this.setDirection();
        }
    }

    moveRight ()
    {
        const sensorPosition = { x: this.x + this.groundOffset.x, y: this.y + this.groundOffset.y };

        this.setVelocityX(this.moveVelocity);
        this.groundSensor.setVelocityX(this.moveVelocity);

        this.flipX = false;

        if (this.groundSensor.body.touching.none && !this.groundSensor.body.wasTouching.none)
        {
            this.setDirection();
        }
    }
}