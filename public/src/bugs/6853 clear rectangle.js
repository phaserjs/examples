class Example extends Phaser.Scene
{
    bitmaptext;
    rt;

    preload ()
    {
        this.load.atlas('banner', 'assets/atlas/banners.png', 'assets/atlas/banners.json');
    }

    create ()
    {
        const GetRandom = Phaser.Utils.Array.GetRandom;

        //  Create our Dynamic Texture which is 512x512 in size
        const banner = this.textures.addDynamicTexture('playerBanner', 512, 512);

        //  Draw a flag to our texture
        banner.stamp('banner', 'flag_02_green', 256, 256);

        //  Now add the finished banner texture to a Sprite
        this.add.sprite(400, 300, 'playerBanner');

        banner.clear(100, 100, 100, 100);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
