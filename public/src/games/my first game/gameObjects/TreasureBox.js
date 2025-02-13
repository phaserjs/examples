import SPRITE_KEYS from "../spriteKeys.js";

export class TreasureBox extends Phaser.Physics.Arcade.Sprite
{
    isActivated = false;

    constructor (scene, x, y)
    {
        super(scene, x, y, SPRITE_KEYS.FANTASY_TILES, 49);

        this.setOrigin(0, 0);
        scene.add.existing(this);
        scene.physics.add.existing(this, true);
    }

    activate()
    {
        if (this.isActivated) return;

        this.isActivated = true;
        this.setFrame(50);
        this.scene.addKey(this.x + (this.width*0.5), this.y + (this.height*0.5));
    }
}