class Example extends Phaser.Scene
{
    height = 38;
    width = 40;
    t = 0;

    preload ()
    {
        this.load.image('tiles', 'assets/tilemaps/tiles/drawtiles.png');
    }

    create ()
    {
        // Build a random level as a 2D array
        const level = [];
        for (let y = 0; y < this.height; y++)
        {
            const row = [];
            for (let x = 0; x < this.width; x++)
            {
                const tileIndex = Phaser.Math.RND.integerInRange(0, 6);
                row.push(tileIndex);
            }
            level.push(row);
        }

        const map = this.make.tilemap({ data: level, tileWidth: 32, tileHeight: 32 });
        const tileset = map.addTilesetImage('tiles');
        const layer = map.createLayer(0, tileset, 0, 0);

        this.cameras.main.setBounds(0, 0, layer.width, layer.height);
        this.minimap = this.cameras.add(200, 10, 100, 100).setZoom(0.2);
        this.minimap.setBackgroundColor('#ffff00');
    }

    update ()
    {
        this.minimap.scrollX = this.width * 32 / 2 + Math.cos(this.t) * 300;
        this.minimap.scrollY = this.height * 32 / 2 + Math.sin(this.t) * 300;
        this.t += 0.025;
    }
}

const config = {
    width: 800,
    height: 600,
    resolution: 1,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
