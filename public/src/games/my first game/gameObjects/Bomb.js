export class Bomb extends Phaser.Physics.Arcade.Sprite
{
    constructor (scene, x, y)
    {
        super(scene, x, y, 'fantasy', 62);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setSize(18, 18);
        this.setBounce(1);
        this.setCollideWorldBounds(true);
        this.setVelocity(Phaser.Math.Between(-200, 200), 20);
        this.setAngularVelocity(Phaser.Math.Between(-10, 10) * 10)
    }
}