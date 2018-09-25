class TestScene extends Phaser.Scene {

    constructor () {
        super({ key: 'GameScene' });
    }

    preload ()
    {
        this.load.image('item_pack', 'assets/tests/mapbug/16x16_item_pack.png');
        this.load.tilemapTiledJSON('level', 'assets/tests/mapbug/level1.json');
    }

    create ()
    {
        const map = this.add.tilemap('level', 0, 0);

        const items = map.addTilesetImage('item_pack');

        map.createStaticLayer('Background', items);
        // map.createDynamicLayer('Background', items);
    }
}

let phaserConfig = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    backgroundColor: '0x9a9a9a',
    width: 800,
    height: 800,
    scene: [
        TestScene,
    ],
    pixelArt: true
};

var game = new Phaser.Game(phaserConfig);
