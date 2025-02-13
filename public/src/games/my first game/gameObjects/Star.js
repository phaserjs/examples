import AUDIO_KEYS from "../audioKeys.js";
import SPRITE_KEYS from "../spriteKeys.js";

export class Star extends Phaser.Physics.Arcade.Sprite
{
    gameUiScene;

    constructor (scene, x, y)
    {
        super(scene, x, y, SPRITE_KEYS.FANTASY_TILES, 54);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setSize(24, 20);
        this.setCollideWorldBounds(true);
        this.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        this.gameUiScene = scene.scene.get('GameUi');
    }

    collect()
    {
        this.disableBody(true, true);
        this.gameUiScene.playAudio(AUDIO_KEYS.STAR);
    }

    reset()
    {
        this.enableBody(true, this.x, 0, true, true);
    }
}