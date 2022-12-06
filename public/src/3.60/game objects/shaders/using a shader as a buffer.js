class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('logo', 'assets/sprites/phaser3-logo-small.png');
        this.load.glsl('bundle', 'assets/shaders/bundle.glsl.js');
        this.load.glsl('bundle2', 'assets/shaders/bundle2.glsl.js');
    }

    create ()
    {
        //  Here we create our shader. It has a size of 512 x 512.
        const bufferA = this.add.shader('Flower Plasma', 0, 0, 512, 512);

        //  Now we tell it to render to a texture, instead of on the display list.
        //  The string given here is the key that is used when saving it to the Texture Manager:
        bufferA.setRenderToTexture('bufferA');

        this.add.shader('Tunnel', 400, 300, 800, 600, [ 'bufferA' ]);

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
