class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.glsl('Marble', 'assets/shaders/marble.frag');
    }

    create ()
    {
        // Here we create our shader. It has a size of 128 x 128.
        const shader = this.add.shader({
            name: 'Marble',
            fragmentKey: 'Marble',
            setupUniforms: (setUniform, drawingContext) => {
                setUniform('time', this.game.loop.getDuration());
            }
        }, 0, 0, 128, 128);

        //  Now we tell it to render to a texture, instead of on the display list.
        //  The string given here is the key that is used when saving it to the Texture Manager:

        shader.setRenderToTexture('wibble');

        //  And now some images that use the texture

        this.add.image(200, 300, 'wibble');

        //  A scaled image
        this.add.image(400, 300, 'wibble').setScale(2);

        //  A tweened image
        const mover = this.add.image(600, 100, 'wibble');

        this.tweens.add({
            targets: mover,
            angle: 180,
            y: 500,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true,
            duration: 2000
        });
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
