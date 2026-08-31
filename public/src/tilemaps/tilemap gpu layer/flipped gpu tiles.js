// TilemapGPULayer resolves a tile's pixels from the tileset in a fragment shader, so a
// flipped tile has to keep sampling inside its own frame even when a fragment lands
// exactly on a tile boundary.
//
// This example fills a layer with a single asymmetric tile and flips it differently in
// each quadrant: unflipped, flipX, flipY, and both. The tile is surrounded in the tileset
// by colours the map never uses - orange directly above it, green directly to its right -
// so a sample straying outside the frame is obvious. The camera creeps through sub-pixel
// offsets, which is when tile boundaries line up with fragment centres.
//
// Nothing on screen should ever be orange or green.
//
// Note the flips are set on the tiles rather than encoded in the map data: Tiled packs
// flips into the high bits of a GID, but ParseGID folds those three bits into `rotation`
// plus a single `flipped` flag, so a map file can only ever produce `tile.flipX`.

const TILE = 32;
const COLS = 16;
const ROWS = 16;

const mapData = {
    width: COLS, height: ROWS, tilewidth: TILE, tileheight: TILE,
    orientation: 'orthogonal', renderorder: 'right-down', infinite: false,
    type: 'map', version: '1.10', tiledversion: '1.10',
    layers: [ {
        name: 'flipped', type: 'tilelayer', width: COLS, height: ROWS, x: 0, y: 0,
        opacity: 1, visible: true,
        // Every cell is local tile id 2, so GID firstgid (1) + 2.
        data: new Array(COLS * ROWS).fill(3)
    } ],
    tilesets: [ {
        name: 'fliptiles', firstgid: 1, tilewidth: TILE, tileheight: TILE,
        tilecount: 4, columns: 2, image: 'fliptiles',
        imagewidth: TILE * 2, imageheight: TILE * 2, margin: 0, spacing: 0
    } ]
};

class Example extends Phaser.Scene
{
    preload ()
    {
        this.cache.tilemap.add('flipmap', { format: Phaser.Tilemaps.Formats.TILED_JSON, data: mapData });
    }

    create ()
    {
        // A 2x2 tileset. Tile 2 (bottom left) is the only one the map uses: a quiet blue
        // checker with a corner marker and a bar, so each flip is visibly different. Its
        // neighbours in the atlas are deliberately garish, so a sample that leaves the
        // frame stands out: orange sits above it, green to its right.
        const g = this.add.graphics();

        g.fillStyle(0xe08a2e, 1).fillRect(0, 0, TILE, TILE);            // 0: orange, above
        g.fillStyle(0xd13fb0, 1).fillRect(TILE, 0, TILE, TILE);         // 1: magenta
        g.fillStyle(0x3fa34d, 1).fillRect(TILE, TILE, TILE, TILE);      // 3: green, right

        g.fillStyle(0x2b3f6b, 1).fillRect(0, TILE, TILE, TILE);         // 2: under test
        g.fillStyle(0x33497a, 1);

        for (let y = 0; y < TILE; y += 8)
        {
            for (let x = 0; x < TILE; x += 8)
            {
                if (((x + y) / 8) % 2 === 0)
                {
                    g.fillRect(x, TILE + y, 8, 8);
                }
            }
        }

        // Asymmetric on both axes, so all four flip combinations look different.
        g.fillStyle(0x9fd0ff, 1).fillRect(3, TILE + 3, 16, 5);
        g.fillStyle(0xf2f2f2, 1).fillRect(3, TILE + 3, 5, 12);

        g.generateTexture('fliptiles', TILE * 2, TILE * 2);
        g.destroy();

        const map = this.make.tilemap({ key: 'flipmap' });

        map.addTilesetImage('fliptiles', 'fliptiles');

        // One quadrant per flip combination.
        map.forEachTile((tile) => {
            tile.flipX = tile.x >= COLS / 2;
            tile.flipY = tile.y >= ROWS / 2;
        });

        map.createLayer('flipped', 'fliptiles', 0, 0, true);

        const label = (x, y, text) => this.add.text(x, y, text,
            { fontSize: '13px', color: '#ffffff', backgroundColor: '#000000cc', padding: 4 }
        ).setScrollFactor(0);

        label(6, 6, 'no flip');
        label(COLS * TILE / 2 + 6, 6, 'flipX');
        label(6, ROWS * TILE / 2 + 6, 'flipY');
        label(COLS * TILE / 2 + 6, ROWS * TILE / 2 + 6, 'flipX + flipY');

        label(6, ROWS * TILE - 46,
            'One tile, flipped four ways. The camera creeps through sub-pixel\n' +
            'offsets. No orange or green should ever appear: those are the\n' +
            'tile\'s neighbours in the tileset.');

        this.phase = 0;
        this.cameras.main.setScroll(0.5, 0.5);
    }

    update ()
    {
        // Creep through sub-pixel camera offsets: tile boundaries land on fragment centres
        // at some of them, which is when a frame-edge sampling error would show.
        this.phase = (this.phase + 1) % 512;

        const offset = Math.floor(this.phase / 16) / 32;

        this.cameras.main.setScroll(0.5 + offset, 0.5 + offset);
    }
}

const config = {
    type: Phaser.WEBGL,
    width: COLS * TILE,
    height: ROWS * TILE,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    render: {
        antialias: false,
        roundPixels: false
    },
    scene: Example
};

const game = new Phaser.Game(config);
