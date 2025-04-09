class Demo extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        const path = 'assets/compressed';

        this.load.texture('test', {
            'ASTC': { type: 'PVR', textureURL: `${path}/compressed/textures-ASTC-4x4-lRGB.pvr`, atlasURL: `${path}/uncompressed/textures.json` },
            'ETC': { type: 'PVR', textureURL: `${path}/compressed/textures-ETC2-lRGB.pvr`, atlasURL: `${path}/uncompressed/textures.json` },
            'PVRTC': { type: 'PVR', textureURL: `${path}/compressed/textures-PVRTC-4BPP-lRGB.pvr`, atlasURL: `${path}/uncompressed/textures.json` },
            'S3TC': { type: 'PVR', textureURL: `${path}/compressed/textures-S3TC-BC3-lRGB.pvr`, atlasURL: `${path}/uncompressed/textures.json` },
            'IMG': { textureURL: `${path}/textures.png`, atlasURL: `${path}/uncompressed/textures.json` }
        });
    }

    create ()
    {
        const bubble = this.add.sprite(0, 40, 'test', 'bubble256').setOrigin(0);
        const logo = this.add.sprite(80, 100, 'test', 'logo').setOrigin(0);

        // this.add.text(400, 570, logo.frame.source.compressionAlgorithm).setOrigin(0.5, 0);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d6d',
    scene: Demo
};

const game = new Phaser.Game(config);
