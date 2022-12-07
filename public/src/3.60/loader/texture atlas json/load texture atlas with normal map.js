class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setPath('assets/loader-tests/');

        this.load.atlas('megaset', [ 'texture-packer-atlas-with-normals-0.png', 'texture-packer-atlas-with-normals-0_n.png' ], 'texture-packer-atlas-with-normals.json');
    }

    create ()
    {
        const light = this.lights.addLight(0, 0, 200);

        this.lights.enable().setAmbientColor(0x555555);

        this.input.on('pointermove', pointer =>
        {

            light.x = pointer.x;
            light.y = pointer.y;

        });

        const atlasTexture = this.textures.get('megaset');

        const frames = atlasTexture.getFrameNames();

        Phaser.Utils.Array.Shuffle(frames);

        for (let i = 0; i < frames.length; i++)
        {
            const x = Phaser.Math.Between(100, 700);
            const y = Phaser.Math.Between(100, 500);

            this.add.image(x, y, 'megaset', frames[i]).setPipeline('Light2D');
        }
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
