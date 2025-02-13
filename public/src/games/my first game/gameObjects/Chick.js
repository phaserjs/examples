import ANIMATION_KEYS from "../animationKeys.js";
import SPRITE_KEYS from "../spriteKeys.js";

export class Chick extends Phaser.Physics.Arcade.Sprite
{
    jumpVelocity = -520;

    constructor (scene, x, y)
    {
        super(scene, x, y, SPRITE_KEYS.CHICK);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
        this.setDepth(100);
    }

    moveLeft()
    {
        this.setVelocityX(-160);

        this.anims.play(ANIMATION_KEYS.PLAYER_LEFT, true);
    }

    moveRight()
    {
        this.setVelocityX(160);

        this.anims.play(ANIMATION_KEYS.PLAYER_RIGHT, true);
    }

    jump()
    {
        this.setVelocityX(0);

        this.anims.play(ANIMATION_KEYS.PLAYER_IDLE);
    }

    jump()
    {
        if (this.body.touching.down) this.setVelocityY(this.jumpVelocity);
    }
}