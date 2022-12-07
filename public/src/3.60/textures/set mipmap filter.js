class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('uv', 'assets/pics/uv-grid-4096-ian-maclachlan.png');
    }

    create ()
    {
        //  4096 x 4096 texture

        this.add.image(0, 0, 'uv').setOrigin(0, 0).setDisplaySize(512, 512);

        this.add.image(512, 0, 'uv').setOrigin(0, 0).setDisplaySize(256, 256);

        this.add.image(768, 0, 'uv').setOrigin(0, 0).setDisplaySize(128, 128);

        this.add.image(896, 0, 'uv').setOrigin(0, 0).setDisplaySize(64, 64);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    mipmapFilter: 'LINEAR_MIPMAP_LINEAR',
    scene: Example
};

const game = new Phaser.Game(config);
