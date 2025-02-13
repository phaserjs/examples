import SPRITE_KEYS from "../spriteKeys.js";

export class MysteryBox extends Phaser.Physics.Arcade.Sprite
{
    isActivated = false;
    moveY = 16;

    constructor (scene, x, y)
    {
        super(scene, x, y, SPRITE_KEYS.FANTASY_TILES, 52);

        this.setOrigin(0, 0);
        scene.add.existing(this);
        scene.physics.add.existing(this, true);
    }

    activate()
    {
        if (this.isActivated || !this.body.touching.down) return;

        this.isActivated = true;
        this.setTint(0x666666);
        this.scene.addCoin(this.x + (this.width*0.5), this.y - this.height + (this.height*0.5));

        this.scene.tweens.add({
            targets: this,
            y: this.y - this.moveY,
            duration: 100,
            ease: 'Quad.easeOut',
            yoyo: true,
        });
    }
}