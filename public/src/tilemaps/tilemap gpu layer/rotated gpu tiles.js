// TilemapGPULayer supports tiles rotated in Tiled (via the anti-diagonal flip
// flag), matching the CPU TilemapLayer. This example draws the same asymmetric
// "F" tile in all eight orientations (four rotations, each with and without a
// horizontal flip) and renders it with both a CPU and a GPU layer so you can
// see they match.

const TILE = 64;

// Tiled packs rotation/flip into the top three bits of each GID.
const FLIP_H = 0x80000000;
const FLIP_V = 0x40000000;
const FLIP_D = 0x20000000; // anti-diagonal, i.e. a 90-degree rotation

// Base tile is local id 0, so its GID is the tileset's firstgid (1).
const gid = (flags) => (1 | flags) >>> 0;

// Row 0: rotations 0 / 90 / 180 / 270. Row 1: the same rotations, flipped.
const mapData = {
    width: 4, height: 2, tilewidth: TILE, tileheight: TILE,
    orientation: 'orthogonal', renderorder: 'right-down', infinite: false,
    type: 'map', version: '1.10', tiledversion: '1.10',
    layers: [ {
        name: 'rot', type: 'tilelayer', width: 4, height: 2, x: 0, y: 0,
        opacity: 1, visible: true,
        data: [
            gid(0),               gid(FLIP_H | FLIP_D),          gid(FLIP_H | FLIP_V),          gid(FLIP_V | FLIP_D),
            gid(FLIP_H),          gid(FLIP_H | FLIP_V | FLIP_D), gid(FLIP_V),                   gid(FLIP_D)
        ]
    } ],
    tilesets: [ {
        name: 'ftiles', firstgid: 1, tilewidth: TILE, tileheight: TILE,
        tilecount: 1, columns: 1, image: 'ftiles',
        imagewidth: TILE, imageheight: TILE, margin: 0, spacing: 0
    } ]
};

class Example extends Phaser.Scene
{
    preload ()
    {
        this.cache.tilemap.add('rotmap', { format: Phaser.Tilemaps.Formats.TILED_JSON, data: mapData });
    }

    create ()
    {
        // Build the tileset texture: a light tile with an asymmetric "F" and a
        // red corner marker, so both rotation and flipping are obvious.
        const g = this.add.graphics();
        g.fillStyle(0xf4f4f4, 1).fillRect(0, 0, TILE, TILE);
        g.lineStyle(2, 0xb0b0b0, 1).strokeRect(1, 1, TILE - 2, TILE - 2);
        g.fillStyle(0x2e6fdb, 1);
        g.fillRect(18, 10, 10, 44); // stem
        g.fillRect(18, 10, 30, 10); // top bar
        g.fillRect(18, 28, 22, 9);  // middle bar
        g.fillStyle(0xe23b3b, 1).fillRect(6, 6, 8, 8); // top-left marker
        g.generateTexture('ftiles', TILE, TILE);
        g.destroy();

        this.add.text(16, 12, 'The same "F" tile rotated 0/90/180/270 (top row) and flipped (bottom row).\n' +
            'Left: CPU TilemapLayer. Right: GPU TilemapGPULayer. They match.',
        { fontSize: '15px', color: '#ffffff' });

        const top = 90;

        const cpuMap = this.make.tilemap({ key: 'rotmap' });
        cpuMap.addTilesetImage('ftiles', 'ftiles');
        cpuMap.createLayer('rot', 'ftiles', 40, top);

        const gpuMap = this.make.tilemap({ key: 'rotmap' });
        gpuMap.addTilesetImage('ftiles', 'ftiles');
        gpuMap.createLayer('rot', 'ftiles', 40 + 4 * TILE + 60, top, true);

        this.add.text(40, top - 22, 'CPU', { fontSize: '16px', color: '#8fd' });
        this.add.text(40 + 4 * TILE + 60, top - 22, 'GPU', { fontSize: '16px', color: '#8fd' });
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 320,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
