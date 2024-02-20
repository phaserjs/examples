class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.spritesheet('fantasy-tiles', 'assets/tilemaps/tiles/fantasy-tiles.png', { frameWidth: 64 });
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/create from tiles.json');
    }

    create ()
    {
        const map = this.add.tilemap('map');

        const tiles = map.addTilesetImage('fantasy-tiles');

        const layer = map.createLayer('Tile Layer 1', tiles);

        //  Because we have loaded the tileset as a spritesheet, we can set the
        //  'useSpriteSheet' property to set the texture and frame when creating the sprites.
        //  If you have loaded the tileset as an image, then this will not work and you
        //  should set the texture and frame manually after creating the sprites.

        const sprites = map.createFromTiles([ 53, 50 ], -1, { useSpriteSheet: true });

        //  Bounce the sprites just to show they're no longer tiles:

        this.tweens.add({
            targets: sprites,
            y: '-=32',
            duration: 1000,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#00000',
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
