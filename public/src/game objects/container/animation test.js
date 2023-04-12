class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.spritesheet('mummy', 'assets/sprites/metalslug_mummy37x45.png', { frameWidth: 37, frameHeight: 45, endFrame: 17 });
    }

    create ()
    {
        this.anims.create({
            key: 'run',
            frames: 'mummy',
            frameRate: 20,
            repeat: -1
        });

        const sprite1 = this.add.sprite(100, 200, 'mummy').play('run');
        const sprite2 = this.add.sprite(100, 300, 'mummy').play('run');
        const sprite3 = this.add.sprite(100, 400, 'mummy').play('run');

        const container = this.add.container(300, 0, [ sprite1, sprite2, sprite3 ]);

        this.tweens.add({
            targets: container,
            scaleX: 3,
            scaleY: 3,
            duration: 6000,
            yoyo: true,
            repeat: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#010101',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
