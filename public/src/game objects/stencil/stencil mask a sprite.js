class Example extends Phaser.Scene
{
    container;
    mummy;

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('bg', 'assets/pics/space-wreck.jpg');
        this.load.spritesheet('mummy', 'assets/animations/mummy37x45.png', { frameWidth: 37, frameHeight: 45 });
        this.load.image('mask', 'assets/sprites/brush1.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const mummyAnimation = this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('mummy'),
            frameRate: 16
        });

        // Add a mummy with no stencil.
        this.mummy = this.add.sprite(900, 300, 'mummy').setScale(4).setFlipX(true);
        this.mummy.play({ key: 'walk', repeat: -1 });

        // Add a mummy with a stencil mask, and move them together in a container.
        const mummy = this.add.sprite(0, 0, 'mummy').setScale(4);
        mummy.play({ key: 'walk', repeat: -1 });
        const mask = this.add.image(0, -32, 'mask').setScale(3);
        const stencil = this.add.stencil(0, 0, mask, { stencilInvert: true });

        this.container = this.add.container(-100, 400, [
            stencil,
            mummy,
            // this.add.stencilreference(stencil, { stencilInvert: true, stencilLayerMode: 'subtractLayer' })
        ]);
    }

    update (time, delta)
    {
        this.container.x += delta / 8;
        if (this.container.x > 900) { this.container.x = -100; }
        this.mummy.x -= delta / 8;
        if (this.mummy.x < -100) { this.mummy.x = 900; }
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
