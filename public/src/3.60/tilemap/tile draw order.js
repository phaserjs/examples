class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('tileset', 'assets/tilemaps/tiles/tileorder.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/tileorder.json');
    }

    create ()
    {
        this.cameras.main.scrollX = 120;
        this.cameras.main.scrollY = 80;
        this.cameras.main.zoom = 2;

        const map = this.make.tilemap({ key: 'map' });

        const tiles = map.addTilesetImage('tileset', 'tileset');

        const layer1 = map.createLayer('floor', tiles, 0, 0);
        const layer2 = map.createLayer('objects', tiles, 0, 0);

        let renderOrder = 1;

        const text = this.add.text(340, 250, 'Render Order: left-down');

        this.input.on('pointerup', () =>
        {

            renderOrder++;

            if (renderOrder === 4)
            {
                renderOrder = 0;
            }

            layer1.setRenderOrder(renderOrder);
            layer2.setRenderOrder(renderOrder);

            const orders = [
                'right-down',
                'left-down',
                'right-up',
                'left-up'
            ];

            text.setText(`Render Order: ${orders[renderOrder]}`);

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#bfbfbf',
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
