class Example extends Phaser.Scene {
    preload() {
        this.load.path = 'assets/atlas/trimsheet/';
        this.load.atlas('testanims', 'trimsheet.png', 'trimsheet.json');
    }

    create() {
        const t1 = this.textures.addSpriteSheetFromAtlas('boom1', {
            atlas: 'testanims',
            frame: 'explosion-notrim',
            frameWidth: 64,
            frameHeight: 64,
            endFrame: 23
        });

        for (let i = 0; i < 10; i++) this.add.image(32 + 65 * i, 200, 'boom1', i);

        const map = this.make.tilemap({ data: [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]], tileWidth: 64, tileHeight: 64 });

        const tiles = map.addTilesetImage('boom1');

        const layer = map.createLayer(0, tiles, 0, 0);

        console.log(tiles);

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
