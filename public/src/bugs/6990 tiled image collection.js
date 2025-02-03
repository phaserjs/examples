class Example extends Phaser.Scene
{
    controls;

    preload ()
    {
        this.load.image('tiles', 'assets/tilemaps/tiles/dangerous-kiss-x2.png');
        this.load.tilemapTiledJSON('map2', 'assets/tilemaps/maps/dangerous-kiss.json');

        this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/image-collection.json');
        this.load.image('advanced_wars_tank', 'assets/sprites/advanced_wars_tank.png');
        this.load.image('alienbusters', 'assets/sprites/alienbusters.png');
        this.load.image('aqua_ball', 'assets/sprites/aqua_ball.png');
        this.load.image('arrow', 'assets/sprites/arrow.png');
        this.load.image('car90', 'assets/sprites/car90.png');
        this.load.image('car-yellow', 'assets/sprites/car-yellow.png');
        this.load.image('columns-red', 'assets/sprites/columns-red.png');
    }

    create ()
    {
        const map = this.make.tilemap({ key: 'map' });

        // The map was created with 8x8 tiles, but we want to load it with a 2x high resolution tileset
        map.setBaseTileSize(8, 8);

        const tilesetCollections = [];

        map.imageCollections.forEach((collection) =>
        {
            collection.images.forEach((img) =>
            {
                let tmpname = img.image;
                tmpname = tmpname.replace('../../sprites/', '').replace('.png', '');

                const tileset = map.addTilesetImage(img.image, tmpname);
                tilesetCollections.push(tileset);
            });
        })

        const layer = map.createLayer('MapLayer', tilesetCollections, 0, 0);

        const debugWindow = this.add.graphics();
        map.renderDebug(debugWindow);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    scene: Example
};

const game = new Phaser.Game(config);
