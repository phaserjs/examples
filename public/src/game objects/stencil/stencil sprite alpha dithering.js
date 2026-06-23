class Example extends Phaser.Scene
{
    sprite1;

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('gradient1', 'assets/skies/darkstone.png');
        this.load.image('gradient2', 'assets/skies/gradient12.png');
        this.load.image('sprite', 'assets/sprites/spinObj_01.png');
    }

    create ()
    {
        this.add.image(400, 300, 'gradient1');
        this.add.image(100, 500, 'sprite');

        this.sprite1 = this.add.image(0, 0, 'sprite').setScale(3);

        // The semi-transparent regions in the sprite
        // are rendered using a dithering algorithm by default.
        this.add.stencil(400, 300, this.sprite1, { stencilInvert: true });

        this.add.image(400, 300, 'gradient2');
    }

    update (time)
    {
        this.sprite1.setRotation(time / 2000);
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
