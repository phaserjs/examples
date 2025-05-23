class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('logo', 'assets/sprites/phaser3-logo-small.png');
        this.load.glsl('Flower Plasma', 'assets/shaders/flower-plasma.frag');
        this.load.glsl('Tunnel', 'assets/shaders/tunnel.frag');
    }

    create ()
    {
        //  Here we create our shader. It has a size of 512 x 512.
        const bufferA = this.add.shader({
            name: 'Flower Plasma',
            fragmentKey: 'Flower Plasma',
            initialUniforms: {
                resolution: [ 512, 512 ]
            },
            setupUniforms: (setUniform, drawingContext) => {
                setUniform('time', this.game.loop.getDuration());
            }
        }, 0, 0, 512, 512);

        //  Now we tell it to render to a texture, instead of on the display list.
        //  The string given here is the key that is used when saving it to the Texture Manager:
        bufferA.setRenderToTexture('bufferA');

        this.add.shader({
            name: 'Tunnel',
            fragmentKey: 'Tunnel',
            initialUniforms: {
                resolution: [ 800, 600 ],
                iChannel0: 0,
                alpha: 1,
                origin: 2
            },
            setupUniforms: (setUniform, drawingContext) => {
                setUniform('time', this.game.loop.getDuration());
            }
        }, 400, 300, 800, 600, [ 'bufferA' ]);

        this.add.image(400, 300, 'logo');
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
