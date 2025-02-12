export class Star extends Phaser.Physics.Arcade.Sprite
{
    constructor (scene, x, y)
    {
        super(scene, x, y, 'fantasy', 54);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setSize(24, 20);
        this.setCollideWorldBounds(true);
        this.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    }

    collect()
    {
        this.disableBody(true, true);
    }

    reset()
    {
        this.enableBody(true, this.x, 0, true, true);
    }
}