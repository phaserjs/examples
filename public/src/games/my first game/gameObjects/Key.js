export class Key extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y)
    {
        const moveY = 32;

        super(scene, x, y, 'fantasy', 51);

        scene.add.existing(this);

        scene.tweens.add({
            targets: this,
            y: y - moveY,
            duration: 500,
            ease: 'Quad.easeOut',
            hold: 500,
            onComplete: () =>
            {
                this.destroy();
            }
        });
    }
}