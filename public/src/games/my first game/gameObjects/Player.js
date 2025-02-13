export class Player extends Phaser.Physics.Arcade.Sprite
{
    jumpVelocity = -520;

    constructor (scene, x, y)
    {
        super(scene, x, y, 'dude');

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
        this.setDepth(100);

        scene.anims.create({
            key: 'left',
            frames: scene.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });

        scene.anims.create({
            key: 'right',
            frames: scene.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
    }

    moveLeft()
    {
        this.setVelocityX(-160);

        this.anims.play('left', true);
    }

    moveRight()
    {
        this.setVelocityX(160);

        this.anims.play('right', true);
    }

    idle()
    {
        this.setVelocityX(0);

        this.anims.play('turn');
    }

    jump()
    {
        if (this.body.touching.down) this.setVelocityY(this.jumpVelocity);
    }
}