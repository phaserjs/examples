import ANIMATION_KEYS from "../animationKeys.js";
import AUDIO_KEYS from "../audioKeys.js";
import SPRITE_KEYS from "../spriteKeys.js";

export class Coin extends Phaser.GameObjects.Sprite
{
    moveY = 96;
    gameUiScene;

    constructor (scene, x, y)
    {
        super(scene, x, y, SPRITE_KEYS.FANTASY_TILES, 52);

        scene.add.existing(this);
        
        scene.tweens.add({
            targets: this,
            y: y - this.moveY,
            duration: 300,
            ease: 'Quad.easeOut',
            yoyo: true,
            onComplete: () => {
                this.destroy();
                scene.addScore(this.x, this.y, 100);
            }
        });

        this.play(ANIMATION_KEYS.COIN_SPIN);
        this.gameUiScene = scene.scene.get('GameUi');
        this.gameUiScene.playAudio(AUDIO_KEYS.COIN);
    }
}