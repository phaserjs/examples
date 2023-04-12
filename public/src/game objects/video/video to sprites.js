class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.rt;
        this.gos = [];
    }

    preload ()
    {
        this.load.video('skeletonSequence', 'assets/video/skeleton.webm', true);
        this.load.audio('tune', 'assets/audio/mag-overkill.m4a');
        this.load.glsl('bundle', 'assets/shaders/blur-bundle.glsl.js');
        this.load.image('graveyard', 'assets/tests/graveyard.png');
    }

    create ()
    {
        const text = this.add.text(400, 300, 'Click to start', { font: '24px Courier', fill: '#00ff00' }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            text.destroy();

            this.buildScene();

            this.sound.play('tune', { loop: true });

        });
    }

    buildScene ()
    {
        //  Here's the Dynamic Texture
        this.rt = this.textures.addDynamicTexture('videoBuffer', 1024, 1024);

        //  The Fire Buffer A shader.
        this.bufferA = this.add.shader('Fire Buffer A', 0, 0, 1024, 1024).setRenderToTexture();

        //  The Fire Buffer B shader.
        this.bufferB = this.add.shader('Fire Buffer B', 0, 0, 1024, 1024).setRenderToTexture();

        //  The final shader. It will render to a texture called 'FireShader'
        this.shader = this.add.shader('Fire', 0, 0, 1024, 1024).setRenderToTexture('FireShader', true);

        //  Hook the sampler2D uniforms up for the multi-pass:

        this.bufferA.setSampler2DBuffer('iChannel0', this.rt.getWebGLTexture(), 1024, 1024, 0);
        this.bufferA.setSampler2DBuffer('iChannel1', this.bufferB.glTexture, 1024, 1024, 1);

        this.bufferB.setSampler2DBuffer('iChannel0', this.shader.glTexture, 1024, 1024, 0);
        this.bufferB.setSampler2DBuffer('iChannel1', this.bufferA.glTexture, 1024, 1024, 1);

        this.shader.setSampler2DBuffer('iChannel0', this.bufferA.glTexture, 1024, 1024, 0);
        this.shader.setSampler2DBuffer('iChannel1', this.bufferB.glTexture, 1024, 1024, 1);

        //  This image just holds the output of the Shader so we can see it on-screen
        this.add.image(400, 216, 'graveyard');

        this.add.image(0, 0, 'FireShader').setOrigin(0);

        this.vid = this.add.video(400, 350, 'skeletonSequence').setDepth(1);

        this.vid.saveTexture('skeleton');

        this.vid.play(true);

        this.vid.once('textureready', () => {

            for (let i = 0; i < 11; i++)
            {
                let skelly = this.add.image(80 * i, 250, 'skeleton').setScale(0.2);

                //  Blends the skeleton feet nicely into the background
                skelly.setAlpha(1, 1, 0.2, 0.2);
            }

            for (let i = 0; i < 10; i++)
            {
                let skelly = this.add.image(100 * i, 380, 'skeleton').setScale(0.5);

                //  Blends the skeleton feet nicely into the background
                skelly.setAlpha(1, 1, 0.2, 0.2);
            }

        });
    }

    update ()
    {
        if (this.rt)
        {
            this.rt.clear();
            this.rt.draw(this.vid, 400, 350);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
