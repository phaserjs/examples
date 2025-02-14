import ANIMATION_KEYS from "../animationKeys.js";
import SPRITE_KEYS from "../spriteKeys.js";

export class Chick extends Phaser.Physics.Arcade.Sprite
{
    jumpVelocity = -520;
    jumpTimer = 2000;
    moveVelocity = 220;
    timer = 0;
    direction = -1;

    constructor(scene, x, y, direction = -1)
    {
        super(scene, x, y, SPRITE_KEYS.CHICK);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true, 0, 0, true);
        this.setDepth(100);
        this.setDirection(direction);
        this.anims.play(ANIMATION_KEYS.CHICK_WALK, true);
    }

    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);

        this.timer += delta;

        if (this.timer > this.jumpTimer)
        {
            this.jump();
            this.timer -= this.jumpTimer;
        }

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
    }

    moveLeft ()
    {
        this.setVelocityX(-this.moveVelocity);

        this.flipX = true;

        if (this.body.touching.left || this.body.blocked.left)
        {
            this.setDirection();
        }
    }

    moveRight ()
    {
        this.setVelocityX(this.moveVelocity);

        this.flipX = false;

        if (this.body.touching.right || this.body.blocked.right)
        {
            this.setDirection();
        }
    }

    jump ()
    {
        if (this.body.touching.down) this.setVelocityY(this.jumpVelocity);
    }
}