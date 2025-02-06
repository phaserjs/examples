class Example extends Phaser.Scene
{

    preload ()
    {
        // this.load.setPath('assets/loader-tests/');
        // this.load.multiatlas('megaset', 'texture-packer-multi-atlas.json');

        this.load.multiatlas('megaset', 'assets/loader-tests/texture-packer-multi-atlas.json', 'assets/loader-tests/');
    }

    create ()
    {
        const atlasTexture = this.textures.get('megaset');
        const frames = atlasTexture.getFrameNames();
        const firstFrame = this.textures.getFrame('megaset', frames[20]);

        const rows = 1024;
        const cols = 768;
        const tileSize = 256;

        this.tileMap = this.make.tilemap({ tileWidth: tileSize, tileHeight: firstFrame.height, width: rows, height: cols });

        const tileset = this.tileMap.addTilesetImage('megaset');

        const layer = this.tileMap.createBlankLayer('layer1', tileset);
        layer.forEachTile(tile => {
            const randomIndex = Math.floor(Math.random() * frames.length);
            tile.index = randomIndex;
        });

        console.log(this.tileMap.tilesets);

        // for (let i = 0; i < frames.length; i++)
        // {
        //     const x = Phaser.Math.Between(0, 1024);
        //     const y = Phaser.Math.Between(0, 768);

        //     this.add.image(x, y, 'megaset', frames[ i ]);
        // }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
