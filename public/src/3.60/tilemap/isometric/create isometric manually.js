class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('tiles', 'assets/tilemaps/iso/iso-64x64-outside.png');
    }

    create ()
    {
        const mapData = new Phaser.Tilemaps.MapData({
            width: 10,
            height: 10,
            tileWidth: 64,
            tileHeight: 32,
            orientation: Phaser.Tilemaps.Orientation.ISOMETRIC,
            format: Phaser.Tilemaps.Formats.ARRAY_2D
        });

        const map = new Phaser.Tilemaps.Tilemap(this, mapData);

        const tileset = map.addTilesetImage('iso-64x64-outside', 'tiles');

        const layer = map.createBlankLayer('layer', tileset, 350, 200);

        const data = [
            [ 10, 11, 12, 13, 14, 15, 16, 10, 11, 12 ],
            [ 13, 11, 10, 12, 12, 15, 16, 10, 16, 10 ],
            [ 12, 10, 16, 13, 14, 15, 16, 16, 13, 12 ],
            [ 10, 11, 12, 13, 14, 15, 16, 10, 11, 12 ],
            [ 13, 11, 10, 12, 12, 15, 16, 10, 16, 10 ],
            [ 12, 10, 16, 13, 14, 15, 16, 16, 13, 12 ],
            [ 10, 11, 12, 13, 14, 15, 16, 10, 11, 12 ],
            [ 13, 11, 10, 12, 12, 15, 16, 10, 16, 10 ],
            [ 12, 10, 16, 13, 14, 15, 16, 16, 13, 12 ],
            [ 10, 11, 12, 13, 14, 15, 16, 10, 11, 12 ]
        ];

        let y = 0;

        data.forEach(row => {

            row.forEach((tile, x) => {

                layer.putTileAt(tile, x, y);

            });

            y++;

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
