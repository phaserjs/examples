class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('kenney_redux_64x64', 'assets/tilemaps/tiles/kenney_redux_64x64.png');
        this.load.image('flipped-tiles-screenshot', 'assets/tilemaps/visual-tests/flipped-tiles-screenshot.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/flipped-tiles.json');
    }

    create ()
    {
        // Visual test to make sure tiles flip properly - should match the given screenshot from Tiled

        this.add.text(10, 10, 'Tilemap Rendering:', {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            fill: '#000000',
            backgroundColor: '#ffffff'
        });

        const map = this.make.tilemap({ key: 'map'});
        const tileset = map.addTilesetImage('kenney_redux_64x64');
        const layer = map.createLayer(0, tileset, 0, 50);

        this.add.text(310, 10, 'Tiled Screenshot of Map:', {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            fill: '#000000',
            backgroundColor: '#ffffff'
        });

        const image = this.add.image(300, 40, 'flipped-tiles-screenshot');
        image.setOrigin(0);
        image.setScale(0.65);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#312136',
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
