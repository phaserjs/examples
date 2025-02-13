import ANIMATION_KEYS from "../animationKeys.js";
import SPRITE_KEYS from "../spriteKeys.js";

export class Cake extends Phaser.Physics.Arcade.Sprite
{
    constructor (scene, x, y, direction)
    {
        super(scene, x, y, SPRITE_KEYS.CAKE);

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

    idle()
    {
        this.setVelocityX(0);

        this.anims.play(ANIMATION_KEYS.PLAYER_IDLE);
    }

    jump()
    {
        if (this.body.touching.down) this.setVelocityY(this.jumpVelocity);
    }
}