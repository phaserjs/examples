class Example extends Phaser.Scene
{
    layer;
    rt;

    preload ()
    {
        this.load.image('mario-tiles', 'assets/tilemaps/tiles/super-mario.png');
    }

    create ()
    {
        //  Load a map from a 2D array of tile indices
        const level = [
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 1, 2, 3, 0, 0, 0, 1, 2, 3, 0 ],
            [ 0, 5, 6, 7, 0, 0, 0, 5, 6, 7, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 14, 13, 14, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 14, 14, 14, 14, 14, 0, 0, 0, 15 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 15 ],
            [ 35, 36, 37, 0, 0, 0, 0, 0, 15, 15, 15 ],
            [ 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39 ]
        ];

        //  When loading from an array, make sure to specify the tileWidth and tileHeight
        const map = this.make.tilemap({ data: level, tileWidth: 16, tileHeight: 16 });

        const tiles = map.addTilesetImage('mario-tiles');

        this.layer = map.createLayer(0, tiles, 0, 0).setVisible(false);

        this.rt = this.add.renderTexture(400, 300, 800, 600);
    }

    update ()
    {
        this.rt.camera.rotation -= 0.01;

        this.rt.clear();

        this.rt.draw(this.layer, 0, 0);
        this.rt.draw(this.layer, 200, 0);
        this.rt.draw(this.layer, 400, 0);
        this.rt.draw(this.layer, 0, 200);
        this.rt.draw(this.layer, 200, 200);
        this.rt.draw(this.layer, 400, 200);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
