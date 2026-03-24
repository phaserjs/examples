class Example extends Phaser.Scene
{
    cursors;
    isoWidth = 16;
    isoHeight = 8;
    isoboxes = [];
    scroll = { x: 0, y: 0 };
    scrollSpeed = 0.5; // Increase this to explore further!
    simplexConfig = {
        noiseCells: [ 4, 3 ],
        noiseIterations: 6,
        noiseContributionPower: 1.5,
        noiseWarpAmount: 0.1,
        noiseWarpIterations: 4
    };
    ramp;
    tempColor = new Phaser.Display.Color();
    lightBlue = new Phaser.Display.Color(167, 147, 255);
    darkBlue = new Phaser.Display.Color(91, 127, 191);

    create()
    {
        const { width, height } = this.scale;

        let offsetX = 0;
        for (let y = 0; y < height + 64; y += this.isoHeight)
        {
            offsetX = (y / this.isoHeight) % 2 == 0 ? this.isoWidth / 2 : 0;
            for (let x = 0; x <= width; x += this.isoWidth)
            {
                const isobox = this.add.isobox(x + offsetX, y, this.isoWidth);
                this.isoboxes.push(isobox);
            }
        }

        this.ramp = new Phaser.Display.ColorRamp(this, [
            {
                // Ocean
                colorStart: 0x00007f,
                colorEnd: 0x3fbfff,
                size: 0.5,
                middle: 0.7
            },
            {
                // Shoreline
                colorStart: 0x8faf6f,
                colorEnd: 0xafef4f,
                size: 0.05
            },
            {
                // Greenery
                colorStart: 0x00af00,
                colorEnd: 0x005f4f,
                size: 0.3
            },
            {
                // Stone
                colorStart: 0x9f8f6f,
                colorEnd: 0x8f9faf,
                size: 0.1
            },
            {
                // Snow
                colorStart: 0xefefef,
                colorEnd: 0xffffff,
                size: 0.4
            },
        ], false);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.updateLand();
    }

    update (time, delta)
    {
        let down = false;
        let { x, y } = this.scroll;

        if (this.cursors.left.isDown)
        {
            x -= this.scrollSpeed;
            down = true;
        }
        else if (this.cursors.right.isDown)
        {
            x += this.scrollSpeed;
            down = true;
        }

        if (this.cursors.up.isDown)
        {
            y -= this.scrollSpeed;
            down = true;
        }
        else if (this.cursors.down.isDown)
        {
            y += this.scrollSpeed;
            down = true;
        }

        if (down)
        {
            this.scroll.x = x;
            this.scroll.y = y;
            this.updateLand();
        }
    }

    updateLand ()
    {
        const { simplexConfig, ramp, isoWidth, tempColor, lightBlue, darkBlue } = this;
        const { width, height } = this.scale;
        const { x: sx, y: sy } = this.scroll;

        for (const isobox of this.isoboxes)
        {
            let { x, y } = isobox;
            x += sx;
            y += sy;
            let value = Phaser.Math.HashSimplex([ x / width / 8, y / height / 8 ], simplexConfig);

            const col = ramp.getColor(Math.min(1, Math.max(0, value * 0.5 + 0.5)));
            tempColor.setFromRGB(col);
            const colTop = tempColor.color;

            tempColor.redGL *= lightBlue.redGL;
            tempColor.greenGL *= lightBlue.greenGL;
            tempColor.blueGL *= lightBlue.blueGL;
            const colLeft = tempColor.color;

            tempColor.setFromRGB(col);
            tempColor.redGL *= darkBlue.redGL;
            tempColor.greenGL *= darkBlue.greenGL;
            tempColor.blueGL *= darkBlue.blueGL;
            const colRight = tempColor.color;

            isobox.setSize(isoWidth, Math.max(0, 48 * value) + 4)
            .setFillStyle(colTop, colLeft, colRight);
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1280,
    height: 720,
    scene: Example
};

const game = new Phaser.Game(config);
