import ANIMATION_KEYS from "../animationKeys.js";
import AUDIO_KEYS from "../audioKeys.js";
import SPRITE_KEYS from "../spriteKeys.js";

export class Player extends Phaser.Physics.Arcade.Sprite
{
    jumpVelocity = -520;
    moveVelocity = 200;
    gameUiScene;

    constructor(scene, x, y)
    {
        super(scene, x, y, SPRITE_KEYS.DUDE);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.gameUiScene = scene.scene.get('GameUi');
        this.setCollideWorldBounds(true);
        this.setDepth(100);
    }

    moveLeft ()
    {
        this.setVelocityX(-this.moveVelocity);

        this.anims.play(ANIMATION_KEYS.PLAYER_LEFT, true);
        if (this.body.touching.down) this.gameUiScene.playAudio(AUDIO_KEYS.PLAYER_STEP, false);
    }

    moveRight ()
    {
        this.setVelocityX(this.moveVelocity);

        this.anims.play(ANIMATION_KEYS.PLAYER_RIGHT, true);
        if (this.body.touching.down) this.gameUiScene.playAudio(AUDIO_KEYS.PLAYER_STEP, false);
    }

    idle ()
    {
        this.setVelocityX(0);

        this.anims.play(ANIMATION_KEYS.PLAYER_IDLE);
    }

    jump ()
    {
        if (this.body.touching.down) 
        {
            this.setVelocityY(this.jumpVelocity);
            this.gameUiScene.playAudio(AUDIO_KEYS.PLAYER_JUMP);
        }
    }
}