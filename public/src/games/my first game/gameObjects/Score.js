import SPRITE_KEYS from "../spriteKeys.js";

export class Score extends Phaser.GameObjects.BitmapText
{
    moveY = 96;

    constructor (scene, x, y, points)
    {
        super(scene, x, y, SPRITE_KEYS.FONT_NOKIA16, points);

        this.setOrigin(0.5);
        scene.add.existing(this);
        
        scene.tweens.add({
            targets: this,
            y: y - this.moveY,
            duration: 1000,
            ease: 'Quad.easeOut',
            onComplete: () => {
                this.destroy();
            }
        });
    }
}