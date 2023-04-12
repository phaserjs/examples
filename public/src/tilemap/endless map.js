class Example extends Phaser.Scene
{
    tiles = [ 7, 7, 7, 6, 6, 6, 0, 0, 0, 1, 1, 2, 3, 4, 5 ];
    distance = 0;
    mapHeight = 37;
    mapWidth = 51;
    sx = 0;
    text;
    map;

    preload ()
    {
        this.load.image('tiles', 'assets/tilemaps/tiles/muddy-ground.png');
        this.load.bitmapFont('nokia16', 'assets/fonts/bitmap/nokia16.png', 'assets/fonts/bitmap/nokia16.xml');
    }

    create ()
    {
        const mapData = [];

        for (let y = 0; y < this.mapHeight; y++)
        {
            const row = [];

            for (let x = 0; x < this.mapWidth; x++)
            {
                //  Scatter the tiles so we get more mud and less stones
                const tileIndex = Phaser.Math.RND.weightedPick(this.tiles);

                row.push(tileIndex);
            }

            mapData.push(row);
        }

        this.map = this.make.tilemap({ data: mapData, tileWidth: 16, tileHeight: 16 });

        const tileset = this.map.addTilesetImage('tiles');
        const layer = this.map.createLayer(0, tileset, 0, 0);

        this.text = this.add.bitmapText(0, 0, 'nokia16').setScrollFactor(0);
    }

    update (time, delta)
    {
        //  Any speed as long as 16 evenly divides by it
        this.sx += 4;

        this.distance += this.sx;

        this.text.setText(`Distance: ${this.distance}px`);

        if (this.sx === 16)
        {
            //  Reset and create new strip

            let tile;
            let prev;

            for (let y = 0; y < this.mapHeight; y++)
            {
                for (let x = 1; x < this.mapWidth; x++)
                {
                    tile = this.map.getTileAt(x, y);
                    prev = this.map.getTileAt(x - 1, y);

                    prev.index = tile.index;

                    if (x === this.mapWidth - 1)
                    {
                        tile.index = Phaser.Math.RND.weightedPick(this.tiles);
                    }
                }
            }

            this.sx = 0;
        }

        this.cameras.main.scrollX = this.sx;
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
