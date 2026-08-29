// Tilesets store a one-off `margin` border around the whole image and a `spacing`
// gutter between neighbouring tiles. These are independent: margin=1/spacing=2 is a
// common Tiled layout. The stride from one tile to the next is tileSize + spacing,
// while margin is only added once, at the origin.
//
// This example builds a deliberately unequal sheet (margin=1, spacing=2) that is 32
// rows tall, and draws tiles taken from rows 0, 8, 16, 24 and 31 with both a GPU
// TilemapGPULayer and a CPU TilemapLayer. They match.
//
// Every tile carries its own index and hue, and the gutters between tiles are black,
// so a mis-strided sheet is obvious at a glance: the tile shows the wrong number, or
// black gutter seams bleed across it. Row 0 always looks correct no matter how the
// stride is computed, so the deeper rows are the interesting ones - any per-tile
// stride error accumulates with the row index.

const TILE = 32;
const MARGIN = 1;
const SPACING = 2;
const COLS = 4;
const ROWS = 32;

// Tiled's sheet geometry: a margin either side, and a spacing gutter *between* tiles.
const SHEET_W = MARGIN * 2 + COLS * TILE + (COLS - 1) * SPACING;
const SHEET_H = MARGIN * 2 + ROWS * TILE + (ROWS - 1) * SPACING;

// Rows sampled from the sheet. Spread out so the map covers both the shallow rows and
// the bottom of the sheet.
const SHOWN_ROWS = [ 0, 8, 16, 24, 31 ];

const tileX = (col) => MARGIN + col * (TILE + SPACING);
const tileY = (row) => MARGIN + row * (TILE + SPACING);

// Golden-ratio hue steps, so even neighbouring indices are plainly different colours.
const tileColor = (index) => Phaser.Display.Color.HSVToRGB((index * 0.618034) % 1, 0.85, 0.95).color;

// firstgid is 1, so a local tile index maps to index + 1.
const mapData = {
    width: COLS, height: SHOWN_ROWS.length, tilewidth: TILE, tileheight: TILE,
    orientation: 'orthogonal', renderorder: 'right-down', infinite: false,
    type: 'map', version: '1.10', tiledversion: '1.10',
    layers: [ {
        name: 'sheet', type: 'tilelayer', width: COLS, height: SHOWN_ROWS.length,
        x: 0, y: 0, opacity: 1, visible: true,
        data: SHOWN_ROWS.flatMap(
            (row) => Array.from({ length: COLS }, (_, col) => row * COLS + col + 1)
        )
    } ],
    tilesets: [ {
        name: 'sheet', firstgid: 1, tilewidth: TILE, tileheight: TILE,
        tilecount: COLS * ROWS, columns: COLS, image: 'sheet',
        imagewidth: SHEET_W, imageheight: SHEET_H, margin: MARGIN, spacing: SPACING
    } ]
};

class Example extends Phaser.Scene
{
    preload ()
    {
        this.cache.tilemap.add('sheetmap', { format: Phaser.Tilemaps.Formats.TILED_JSON, data: mapData });
    }

    create ()
    {
        this.buildSheetTexture();

        const top = 0;
        const gpuX = 0;
        const cpuX = 420;
        const scale = 2;
        const bottom = top + SHOWN_ROWS.length * TILE * scale;

        const gpuMap = this.make.tilemap({ key: 'sheetmap' });
        gpuMap.addTilesetImage('sheet', 'sheet');
        gpuMap.createLayer('sheet', 'sheet', gpuX, top, true).setScale(scale);

        const cpuMap = this.make.tilemap({ key: 'sheetmap' });
        cpuMap.addTilesetImage('sheet', 'sheet');
        cpuMap.createLayer('sheet', 'sheet', cpuX, top).setScale(scale);

        this.add.text(gpuX, bottom + 8, 'GPU TilemapGPULayer', { fontSize: '15px', color: '#8fd' });
        this.add.text(cpuX, bottom + 8, 'CPU TilemapLayer', { fontSize: '15px', color: '#8fd' });

        // Label each map row, in the gutter, with the sheet row it was taken from.
        SHOWN_ROWS.forEach((row, i) =>
        {
            this.add.text(272, top + i * TILE * scale + 24, `sheet row ${row}`,
                { fontSize: '12px', color: '#bbbbbb' });
        });

        this.add.text(0, bottom + 40,
            'A tileset with margin=1 and spacing=2 (deliberately unequal), 32 rows tall.\n' +
            'Each tile is labelled with its index; the gutters between tiles are black.\n' +
            'Left: GPU TilemapGPULayer. Right: CPU TilemapLayer. They match.',
            { fontSize: '14px', color: '#ffffff' });
    }

    // Draw the tileset image at runtime rather than shipping a binary asset: a black
    // sheet with each tile painted on at its margin/spacing offset, leaving the
    // gutters visible.
    buildSheetTexture ()
    {
        const rt = this.add.renderTexture(0, 0, SHEET_W, SHEET_H, false).setVisible(false);

        rt.fill(0x000000, 1);

        const g = this.make.graphics({ x: 0, y: 0 }, false);

        for (let row = 0; row < ROWS; row++)
        {
            for (let col = 0; col < COLS; col++)
            {
                const index = row * COLS + col;

                g.fillStyle(tileColor(index), 1);
                g.fillRect(tileX(col), tileY(row), TILE, TILE);
            }
        }

        // One Text per tile, positioned at the tile's centre. Draw commands are only
        // flushed by render(), so these have to stay alive until after that call.
        const labels = [];

        for (let row = 0; row < ROWS; row++)
        {
            for (let col = 0; col < COLS; col++)
            {
                const index = row * COLS + col;

                labels.push(this.make.text({
                    x: tileX(col) + TILE / 2,
                    y: tileY(row) + TILE / 2,
                    text: `${index}`,
                    style: { fontSize: '14px', color: '#000000', stroke: '#ffffff', strokeThickness: 3 }
                }, false).setOrigin(0.5));
            }
        }

        rt.draw(g);
        rt.draw(labels);
        rt.render();
        rt.saveTexture('sheet');

        g.destroy();
        labels.forEach((label) => label.destroy());
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 440,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
