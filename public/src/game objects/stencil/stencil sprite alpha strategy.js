class Example extends Phaser.Scene
{
    logo1;
    logo2;

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('marble', 'assets/textures/blue-marble.jpg');
        this.load.image('gradient', 'assets/skies/gradient22.png');
        this.load.image('sprite', 'assets/sprites/blade.png');
    }

    create ()
    {
        this.add.image(400, 300, 'marble');

        // Exactly the same sprite...
        this.logo1 = this.add.image(0, 0, 'sprite').setScale(0.6);
        this.logo2 = this.add.image(0, 0, 'sprite').setScale(0.6);

        // ... but different transparency results.
        // This is because WebGL stencil treats alpha 0 as opaque.
        this.add.stencil(200, 300, this.logo1, { stencilAlphaStrategy: 'keep' });
        this.add.stencil(600, 300, this.logo2); // Uses stencil-compatible alpha strategy by default.

        this.add.image(400, 300, 'gradient');
    }

    update (time)
    {
        this.logo1.setRotation(time / 1000);
        this.logo2.setRotation(-time / 1000);
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
