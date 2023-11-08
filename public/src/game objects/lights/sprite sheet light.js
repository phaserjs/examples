class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', [ 'assets/textures/gold.png', 'assets/textures/gold-n.png' ]);
        this.load.spritesheet('face', [ 'assets/sprites/metalface78x92.png', 'assets/sprites/metalface78x92-n.png' ], { frameWidth: 78, frameHeight: 92 });
    }

    create ()
    {
        this.lights.enable();
        this.lights.setAmbientColor(0x555555);

        this.add.sprite(400, 300, 'bg').setPipeline('Light2D').setAlpha(0.5);

        this.anims.create({
            key: 'eyes',
            frames: this.anims.generateFrameNumbers('face', { start: 0, end: 3 }),
            frameRate: 14,
            repeat: -1
        });

        for (let i = 0; i < 6; i++)
        {
            const x = Phaser.Math.Between(100, 700);
            const y = Phaser.Math.Between(100, 500);

            const face = this.physics.add.sprite(x, y, 'face');

            face.setPipeline('Light2D');
            face.play('eyes');
            face.setVelocity(Phaser.Math.Between(-100, 100), Phaser.Math.Between(-100, 100));
            face.setBounce(1, 1);
            face.setCollideWorldBounds(true);
        }

        const light = this.lights.addLight(400, 300, 200).setIntensity(2);

        this.input.on('pointermove', pointer =>
        {
            light.x = pointer.x;
            light.y = pointer.y;
        });
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade'
    },
    scene: Example
};

const game = new Phaser.Game(config);
