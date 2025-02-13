import ANIMATION_KEYS from "../animationKeys.js";
import SPRITE_KEYS from "../spriteKeys.js";

export class Coin extends Phaser.GameObjects.Sprite
{
    moveY = 96;

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
    }
}