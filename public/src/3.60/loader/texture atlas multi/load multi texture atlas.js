class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setPath('assets/loader-tests/');
        // this.load.multiatlas('megaset', 'texture-packer-multi-atlas.json');

        this.load.multiatlas('megaset', 'assets/loader-tests/texture-packer-multi-atlas.json', 'assets/loader-tests/');
    }

    create ()
    {
        const atlasTexture = this.textures.get('megaset');

        const frames = atlasTexture.getFrameNames();

        for (let i = 0; i < frames.length; i++)
        {
            const x = Phaser.Math.Between(0, 1024);
            const y = Phaser.Math.Between(0, 768);

            this.add.image(x, y, 'megaset', frames[i]);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
