class Example extends Phaser.Scene
{
    imageHeight = 0;
    imageWidth = 0;
    maxHeight = 120;
    spacing = 12;
    centerY = -200;
    centerX = 400;
    tileHeightHalf = 10;
    tileWidthHalf = 15;
    size = 24;
    gridHeight = 54;
    gridWidth = 54;
    cursors;
    py = 0;
    px = 0;
    land = [];
    heightmap;
    color = new Phaser.Display.Color();

    preload ()
    {
        this.load.image('pic', 'assets/tests/terrain/terrain2.png');
    }

    create ()
    {
        const src = this.textures.get('pic').getSourceImage();

        this.imageWidth = src.width;
        this.imageHeight = src.height;

        this.heightmap = this.textures.createCanvas('map', this.imageWidth, this.imageHeight);

        this.heightmap.draw(0, 0, src);

        for (let y = 0; y < this.gridHeight; y++)
        {
            const row = [];

            for (let x = 0; x < this.gridWidth; x++)
            {
                const tx = (x - y) * this.tileWidthHalf;
                const ty = (x + y) * this.tileHeightHalf;

                const tile = this.add.isobox(this.centerX + tx, this.centerY + ty, this.size, this.size, 0x8dcb0e, 0x3f8403, 0x63a505);

                tile.setDepth(this.centerY + ty);

                row.push(tile);
            }

            this.land.push(row);
        }

        this.updateLand();

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update ()
    {
        let down = false;

        if (this.cursors.left.isDown)
        {
            this.px--;
            this.py++;

            down = true;
        }
        else if (this.cursors.right.isDown)
        {
            this.px++;
            this.py--;

            down = true;
        }

        if (this.cursors.up.isDown)
        {
            this.px--;
            this.py--;

            down = true;
        }
        else if (this.cursors.down.isDown)
        {
            this.px++;
            this.py++;

            down = true;
        }

        if (this.px === this.imageWidth)
        {
            this.px = 0;
        }
        else if (this.px < 0)
        {
            this.px = this.imageWidth;
        }

        if (this.py === this.imageHeight)
        {
            this.py = 0;
        }
        else if (this.py < 0)
        {
            this.py = this.imageHeight;
        }

        if (down)
        {
            this.updateLand();
        }
    }

    updateLand ()
    {
        for (let y = 0; y < this.gridHeight; y++)
        {
            for (let x = 0; x < this.gridWidth; x++)
            {
                const cx = Phaser.Math.Wrap(this.px + x, 0, this.imageWidth);
                const cy = Phaser.Math.Wrap(this.py + y, 0, this.imageHeight);

                this.heightmap.getPixel(cx, cy, this.color);

                const h = this.color.v * this.maxHeight;
                const top = this.color.color;
                const left = this.color.darken(30).color;
                const right = this.color.lighten(15).color;

                this.land[y][x].setFillStyle(top, left, right);

                this.land[y][x].height = h;
            }
        }
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
