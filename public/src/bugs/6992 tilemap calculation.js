    class Example extends Phaser.Scene
{
    controls;

    preload ()
    {
        this.load.image('tiles', 'assets/tilemaps/iso/tilesets/tileset.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/iso/hexagonal.json');
    }

    create ()
    {
        // setup tilemap
        const map = this.add.tilemap('map');
        const tileset = map.addTilesetImage('tileset', 'tiles');
        map.createLayer('Calque 1', tileset);

        this.cameras.main.setZoom(1);
        this.cameras.main.centerOn(200, 100);
        
        const tileLayer = map.layers[0];

        /** Suggested Calculation **/
        // if (map.orientation === 3) {
        let realWidth = 0, realHeight = 0;
        if (tileLayer.staggerAxis === 'y') {
            const triangleHeight = (tileLayer.tileHeight - tileLayer.hexSideLength) / 2;
            realWidth = tileLayer.tileWidth * ( tileLayer.width + 0.5);                
            realHeight = tileLayer.height * (tileLayer.hexSideLength + triangleHeight) + triangleHeight;
        } else {
            const triangleWidth = (tileLayer.tileWidth - tileLayer.hexSideLength) / 2;
            realWidth =  tileLayer.width * (tileLayer.hexSideLength + triangleWidth) + triangleWidth;
            realHeight = tileLayer.tileHeight * ( tileLayer.height + 0.5);
        }
        // }


        // add debug text
        const text = this.add.text(10, 10, [     
            `Orientation: ${tileLayer.orientation}`,
            `Stagger Axis: ${tileLayer.staggerAxis}`,
            `Stagger Index: ${tileLayer.staggerIndex}`,
            '',
            `Width: ${map.width}`,
            `TileWidth: ${map.tileWidth}`,
            `Width in pixels (Red): ${map.widthInPixels}`,
            `Correct Width (Green): ${realWidth}`,
            '',
            `Height: ${map.height}`,
            `TileHeight: ${map.tileHeight}`,
            `Height in pixels (Red): ${map.heightInPixels}`,
            `Correct Height (Green): ${realHeight}`,
        ]);
        text.setShadow(2, 2, '#000000', 1);
        

        // draw rectangle of the wrong size using widthInPixels & heightInPixels
        this.add.rectangle(0, 0, map.widthInPixels, map.heightInPixels, 0xff0000, 0.2).setOrigin(0,0);
        
        // draw rectangle of the correct size
        this.add.rectangle(0, 0, realWidth, realHeight, 0x00ff00, 0.2).setOrigin(0,0);

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#1d1d1d',
    scene: Example
};

const game = new Phaser.Game(config);
