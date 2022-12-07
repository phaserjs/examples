class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setPath('assets/loader-tests/');

        this.load.multiatlas('megaset', 'texture-packer-multi-atlas-with-normals.json');
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

        this.add.image(0, 0, 'megaset', 'brick').setOrigin(0).setPipeline('Light2D');

        const atlasTexture = this.textures.get('megaset');

        const frames = atlasTexture.getFrameNames();

        for (let i = 1; i < frames.length; i++)
        {
            const x = Phaser.Math.Between(100, 924);
            const y = Phaser.Math.Between(100, 668);

            this.add.image(x, y, 'megaset', frames[i]).setPipeline('Light2D');
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 1024,
    height: 768,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
