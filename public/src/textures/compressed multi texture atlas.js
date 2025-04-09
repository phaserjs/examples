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
            'ASTC': { type: 'PVR', multiAtlasURL: `${path}/uncompressed/multi-ASTC-4x4-lRGB.json`, multiPath: `${path}/compressed` },
            'ETC': { type: 'PVR', multiAtlasURL: `${path}/uncompressed/multi-ETC2-lRGB.json`, multiPath: `${path}/compressed` },
            'PVRTC': { type: 'PVR', multiAtlasURL: `${path}/uncompressed/multi-PVRTC-4BPP-lRGB.json`, multiPath: `${path}/compressed` },
            'S3TC': { type: 'PVR', multiAtlasURL: `${path}/uncompressed/multi-S3TC-BC3-lRGB.json`, multiPath: `${path}/compressed` },
            'IMG': { multiAtlasURL: `${path}/uncompressed/multi.json`, multiPath: `${path}/uncompressed/multi.json` }
        });
    }

    create ()
    {
        this.add.sprite(400, 250, 'test', 'phaser3-logo-x2');
        this.add.sprite(400, 100, 'test', 'astorm-truck');
        this.add.sprite(400, 420, 'test', 'bunny');
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
