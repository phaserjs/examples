class Example extends Phaser.Scene
{
    secret;

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('sky', 'assets/skies/sky4.png');
        this.load.image('birdy', 'assets/pics/birdy.png');
        this.load.image('secret', 'assets/sprites/planet1.png');
        this.load.image('stone', 'assets/particles/stone.png');
    }

    create ()
    {
        this.add.image(400, 300, 'sky');

        this.add.image(100, 600, 'birdy').setOrigin(0.5, 1).setTint(0x000044).setTintMode(Phaser.TintModes.ADD);

        // Something inside...
        this.secret = this.add.image(400, 300, 'secret');

        // Add a complex stencil made from some stone sprites.
        const stencil = this.add.stencil(0, 0, [
            this.add.image(250, 350, 'stone'),
            this.add.image(250, 320, 'stone'),
            this.add.image(300, 280, 'stone'),
            this.add.image(350, 280, 'stone'),
            this.add.image(400, 280, 'stone'),
            this.add.image(450, 300, 'stone'),
            this.add.image(500, 300, 'stone'),
        ]);

        // This sprite is affected by the stencil, revealing the secret.
        this.add.image(400, 600, 'birdy').setOrigin(0.5, 1).setTint(0x000022).setTintMode(Phaser.TintModes.ADD).setScale(1.1);

        // Add a stencil reference which reverses the first stencil.
        this.add.stencilreference(stencil, { stencilLayerMode: 'subtractLayer' });

        // This sprite is no longer affected by the stencil.
        this.add.image(700, 600, 'birdy').setOrigin(0.5, 1).setScale(1.2);
    }

    update (time)
    {
        this.secret.setPosition(400, 320 + 16 * Math.sin(time / 500));
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
