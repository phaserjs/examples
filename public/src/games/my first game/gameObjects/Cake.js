import ANIMATION_KEYS from "../animationKeys.js";
import SPRITE_KEYS from "../spriteKeys.js";

export class Cake extends Phaser.Physics.Arcade.Sprite
{
    moveVelocity = 50;
    direction = -1;

    constructor(scene, x, y, direction = -1)
    {
        super(scene, x, y, SPRITE_KEYS.CAKE);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true, 0, 0, true);
        this.setDepth(100);
        this.setDirection(direction);
        this.anims.play(ANIMATION_KEYS.CAKE_WALK, true);
    }

    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);

        console.log(this.direction)
        if (this.direction === -1)
        {
            this.moveLeft();
        }
        else
        {
            this.moveRight();
        }
    }

    onWorldBounds ()
    {
        this.setDirection();
    }

    setDirection (direction)
    {
        this.direction = direction || this.direction * -1;
    }

    moveLeft ()
    {
        this.setVelocityX(-this.moveVelocity);

        this.flipX = true;

        if (!this.body.touching.bottom)
        {
            this.setDirection();
        }
    }

    moveRight ()
    {
        this.setVelocityX(this.moveVelocity);

        this.flipX = false;

        if (!this.body.touching.bottom)
        {
            this.setDirection();
        }
    }
}