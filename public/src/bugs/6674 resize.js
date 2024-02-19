class Example extends Phaser.Scene
{
    preload ()
    {
        // 1198 = ok horizontal
        // 865 = bad vertical

        // 1209 - bad horizontal
        // 867  - bad vertical

        // 1210 = good horizontal
        // 870 = good vertical

        /*
            872 = good vertical
            902 = good vertical
            1028



            903 = bad vertical!
            947 = bad vertical!
            1031 = bad vertical

            1213 = bad horizontal
            1220 - good horizontal
            1026 good h
            1041 bad h


        */




        // this.scale.displaySize.setSnap(1, 1);

        this.load.image('tiles', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');
        this.load.tilemapCSV('map', 'assets/tilemaps/csv/catastrophi_level2.csv');
    }

    create ()
    {
        const map = this.make.tilemap({ key: 'map', tileWidth: 16, tileHeight: 16 });
        const tileset = map.addTilesetImage('tiles');
        const layer = map.createLayer(0, tileset, 0, 0);

        // this.cameras.main.roundPixels = true;
        // Visual test to make sure tiles don't bleed while scrolling at certain speeds
    }

    update (time, delta)
    {
        this.cameras.main.scrollX = (200 + Math.cos(time / 1000) * 200);
        this.cameras.main.scrollY = (100 + Math.sin(time / 1000) * 500);
    }
}

const config = {
    type: Phaser.WEBGL,
    scale: { mode: Phaser.Scale.RESIZE, autoRound: false }, // <--- Just add this to reproduce
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true, // <--- These do not improve bleeding
    roundPixels: true, // <--- These do not improve bleeding
    scene: Example
};

const game = new Phaser.Game(config);
