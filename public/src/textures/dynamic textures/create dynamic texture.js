class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

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

        //  Draw a random crest - there are 10 available, from Banner_01 to Banner_10
        const crests = [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10' ];

        banner.stamp('banner', `Banner_${GetRandom(crests)}`, 256, 256, { alpha: 0.3, blendMode: Phaser.BlendModes.ADD });

        //  Draw 3 random runes across the flag - these are frames 'Badges_01' to 'Badges_24' in the atlas
        const runes = [
            '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24'
        ];

        //  By using the 'stamp' config we can scale and offset the frame
        banner.stamp('banner', `Badges_${GetRandom(runes)}`, 256, 100, { scale: 0.5, originX: 1 });
        banner.stamp('banner', `Badges_${GetRandom(runes)}`, 256, 100, { scale: 0.5, originX: 0.5 });
        banner.stamp('banner', `Badges_${GetRandom(runes)}`, 256, 100, { scale: 0.5, originX: 0 });

        //  Now add the finished banner texture to a Sprite
        this.add.sprite(400, 300, 'playerBanner');
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d6d',
    scene: Example
};

const game = new Phaser.Game(config);
