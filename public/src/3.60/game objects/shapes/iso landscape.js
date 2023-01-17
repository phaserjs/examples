class Example extends Phaser.Scene
{
    waterHeight = 60;
    maxHeight = 120;
    offsetY = 90;
    spacing = 12;
    size = 20;
    gridHeight = 46;
    gridWidth = 39;
    cursors;
    py = 0;
    px = 0;
    land = [];
    heightmap;
    color = new Phaser.Display.Color();

    preload ()
    {
        this.load.image('noise', 'assets/tests/noise.png');

        // this.load.image('noise', 'assets/tests/heightmap.png');
    }

    create ()
    {
        this.heightmap = this.textures.createCanvas('map', 512, 512);

        this.heightmap.draw(0, 0, this.textures.get('noise').getSourceImage());

        let ox = this.size;
        let r = 0;
        const h = this.size;

        for (let y = 0; y < this.gridHeight; y++)
        {
            const row = [];

            for (let x = 0; x < this.gridWidth - r; x++)
            {
                const tile = this.add.isobox(ox + x * this.size, this.offsetY + y * this.spacing, this.size, h, 0x8dcb0e, 0x3f8403, 0x63a505);

                row.push(tile);
            }

            r++;
            ox += this.size / 2;

            if (r === 2)
            {
                r = 0;
                ox = this.size;
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

            if (this.px < 0)
            {
                this.px = 512;
            }

            down = true;
        }
        else if (this.cursors.right.isDown)
        {
            this.px++;

            if (this.px === 512)
            {
                this.px = 0;
            }

            down = true;
        }

        if (this.cursors.up.isDown)
        {
            this.py--;

            if (this.py < 0)
            {
                this.py = 512;
            }

            down = true;
        }
        else if (this.cursors.down.isDown)
        {
            this.py++;

            if (this.py === 512)
            {
                this.py = 0;
            }

            down = true;
        }

        if (down)
        {
            this.updateLand();
        }
    }

    updateLand ()
    {
        let r = 0;

        for (let y = 0; y < this.gridHeight; y++)
        {
            for (let x = 0; x < this.gridWidth - r; x++)
            {
                const cx = Phaser.Math.Wrap(this.px + x, 0, 512);
                const cy = Phaser.Math.Wrap(this.py + y, 0, 512);

                this.heightmap.getPixel(cx, cy, this.color);

                const h = (Math.max(this.color.r, this.color.g, this.color.b) / 255) * this.maxHeight;

                if (h < this.waterHeight)
                {
                    this.land[y][x].setFillStyle(0x00b9f2, 0x016fce, 0x028fdf);
                }
                else if (h === this.maxHeight)
                {
                    this.land[y][x].setFillStyle(0xffe31f, 0xf2a022, 0xf8d80b);
                }
                else
                {
                    this.land[y][x].setFillStyle(0x8dcb0e, 0x3f8403, 0x63a505);
                }

                this.land[y][x].height = h;
            }

            r++;

            if (r === 2)
            {
                r = 0;
            }
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#efefef',
    scene: Example
};

const game = new Phaser.Game(config);
