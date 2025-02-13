import SPRITE_KEYS from "../spriteKeys.js";

export class Exit extends Phaser.Physics.Arcade.Sprite
{
    constructor (scene, x, y)
    {
        super(scene, x, y, SPRITE_KEYS.FANTASY_TILES, 31);

        this.setOrigin(0, 0);
        scene.add.existing(this);
        scene.physics.add.existing(this, true);
    }
}