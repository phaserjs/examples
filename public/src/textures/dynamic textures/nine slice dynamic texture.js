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
        const banner = this.textures.addDynamicTexture('playerBanner', 512, 512)

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

    /**
    create: function (slices)
    {
        var x = 0;
        var y = 0;
        var width = this.width;
        var height = this.height;
        var alpha = 1;
        var tint = 0xffffff;

        var textureManager = this.textureManager;

        var topLeft = textureManager.parseFrame(GetFastValue(slices, 'topLeft', null));
        var topBg = textureManager.parseFrame(GetFastValue(slices, 'topBackground', null));
        var topRight = textureManager.parseFrame(GetFastValue(slices, 'topRight', null));
        var leftBg = textureManager.parseFrame(GetFastValue(slices, 'left', null));
        var rightBg = textureManager.parseFrame(GetFastValue(slices, 'right', null));

        // var background = textureManager.parseFrame(GetFastValue(slices, 'background', null));

        var botLeft = textureManager.parseFrame(GetFastValue(slices, 'botLeft', null));
        var botBg = textureManager.parseFrame(GetFastValue(slices, 'botBackground', null));
        var botRight = textureManager.parseFrame(GetFastValue(slices, 'botRight', null));

        var topLeftPos = { x: x, y: y };
        var topRightPos = { x: x + width, y: y };
        var topPos = { x: x, y: y, w: width };
        var botLeftPos = { x: x, y: y + height };
        var botRightPos = { x: x + width, y: y + height };
        var botPos = { x: x, y: y + height, w: width };
        var leftPos = { x: x, y: y, h: height };
        var rightPos = { x: x + width, y: y, h: height };

        if (topLeft)
        {
            topPos.x += topLeft.width;
            topPos.w -= topLeft.width;
            leftPos.y += topLeft.height;
            leftPos.h -= topLeft.height;
        }

        if (topRight)
        {
            topRightPos.x -= topRight.width;
            topPos.w -= topRight.width;
            rightPos.y += topRight.height;
            rightPos.h -= topRight.height;
        }

        if (botBg)
        {
            botPos.y -= botBg.height;
        }

        if (botLeft)
        {
            botLeftPos.y -= botLeft.height;
            botPos.x += botLeft.width;
            botPos.w -= botLeft.width;
            leftPos.h -= botLeft.height;
        }

        if (botRight)
        {
            botRightPos.x -= botRight.width;
            botRightPos.y -= botRight.height;
            botPos.w -= botRight.width;
            rightPos.h -= botRight.height;
        }

        if (rightBg)
        {
            rightPos.x -= rightBg.width;
        }

        // console.log('topLeftPos', topLeftPos);
        // console.log('topRightPos', topRightPos);
        // console.log('topPos', topPos);
        // console.log('botLeftPos', botLeftPos);
        // console.log('botRightPos', botRightPos);
        // console.log('botPos', botPos);
        // console.log('leftPos', leftPos);
        // console.log('rightPos', rightPos);

        var stamp = this.resetStamp(alpha, tint);

        this.clear();

        this.beginDraw();

        //  None of these need cropping:

        if (topLeft)
        {
            stamp.setFrame(topLeft);

            this.drawGameObject(stamp, topLeftPos.x, topLeftPos.y);
        }

        if (topRight)
        {
            stamp.setFrame(topRight);

            this.drawGameObject(stamp, topRightPos.x, topRightPos.y);
        }

        if (botLeft)
        {
            stamp.setFrame(botLeft);

            this.drawGameObject(stamp, botLeftPos.x, botLeftPos.y);
        }

        if (botRight)
        {
            stamp.setFrame(botRight);

            this.drawGameObject(stamp, botRightPos.x, botRightPos.y);
        }

        //  These all use crop if they don't fit perfectly

        if (topBg)
        {
            this.repeat(topBg, null, topPos.x, topPos.y, topPos.w, topBg.height, alpha, tint, true);
        }

        if (leftBg)
        {
            this.repeat(leftBg, null, leftPos.x, leftPos.y, leftBg.width, leftPos.h, alpha, tint, true);
        }

        if (rightBg)
        {
            this.repeat(rightBg, null, rightPos.x, rightPos.y, rightBg.width, rightPos.h, alpha, tint, true);
        }

        if (botBg)
        {
            this.repeat(botBg, null, botPos.x, botPos.y, botPos.w, botBg.height, alpha, tint, true);
        }

        this.endDraw();

        return this;
    }
     */
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
