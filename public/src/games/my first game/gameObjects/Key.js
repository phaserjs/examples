import AUDIO_KEYS from "../audioKeys.js";
import SPRITE_KEYS from "../spriteKeys.js";

export class Key extends Phaser.GameObjects.Sprite
{
    moveY = 32;
    gameUiScene;

    constructor(scene, x, y)
    {
        super(scene, x, y, SPRITE_KEYS.FANTASY_TILES, 51);

        scene.add.existing(this);

        scene.tweens.add({
            targets: this,
            y: y - this.moveY,
            duration: 500,
            ease: 'Quad.easeOut',
            hold: 500,
            onComplete: () =>
            {
                this.destroy();
            }
        });

        this.gameUiScene = scene.scene.get('GameUi');
        this.gameUiScene.playAudio(AUDIO_KEYS.KEY);
    }
}