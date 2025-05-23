class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('swatch', 'assets/swatches/colormap.png');
    }

    create ()
    {
        const texture = this.textures.get('swatch');
        const textureBase = texture.get();
        const width = textureBase.width;
        const height = textureBase.height;
        for (let y = 0; y < height; y++)
        {
            for (let x = 0; x < width; x++)
            {
                // Create a frame for each pixel in the texture
                texture.add(`${x + y * width}`, 0, x, y, 1, 1);
            }
        }

        const caption = this.add.text(10, 10, '1,000,000 Sprites (1 per pixel)', { font: '16px Courier', fill: '#ffffff' }).setDepth(1);

        const layer = this.add.spriteGPULayer('swatch', 1000000);

        const template = {
            alpha:
            {
                base: 1,
                amplitude: -1,
                ease: 'Quad.easeInOut',
                duration: 1000
            },
            originX: 0.5,
            originY: 0.5
        };

        // Create a coarse grid of cells with noise values.
        const grid = [];
        for (let x = 0; x < 10; x++)
        {
            grid[x] = [];
            for (let y = 0; y < 10; y++)
            {
                grid[x][y] = Math.random();
            }
        }

        for (let y = 0; y < 1000; y++)
        {
            for (let x = 0; x < 1000; x++)
            {
                // Get a weighted average of the noise value at this point.
                const x0 = Math.floor(x / 100);
                const x1 = Math.ceil(x / 100) % 10;
                const y0 = Math.floor(y / 100);
                const y1 = Math.ceil(y / 100) % 10;
                const dx = x / 100 - x0;
                const dy = y / 100 - y0;
                const v00 = grid[x0][y0];
                const v01 = grid[x0][y1];
                const v10 = grid[x1][y0];
                const v11 = grid[x1][y1];
                const v0 = v00 * (1 - dx) + v10 * dx;
                const v1 = v01 * (1 - dx) + v11 * dx;
                const v = v0 * (1 - dy) + v1 * dy;

                template.x = x;
                template.y = y;
                template.frame = `${(x % width) + (y % height) * width}`;
                template.alpha.duration = 1000 + v * 100;
                template.alpha.delay = (x + y) * 2 - 10000;
                layer.addMember(template);
            }
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1000,
    height: 1000,
    scene: Example
};

const game = new Phaser.Game(config);
