var FilePackObject = {
    "pack": {
        "files": [
            {
                "type": "texture",
                "key": "labs",
                "url": {
                    "ASTC": "assets/compressed/compressed/labs-ASTC-4x4-lRGB.pvr",
                    "ETC": "assets/compressed/compressed/labs-ETC2-lRGB.pvr",
                    "PVRTC": "assets/compressed/compressed/labs-PVRTC-4BPP-lRGB.pvr",
                    "S3TC": "assets/compressed/compressed/labs-S3TC-BC3-lRGB.pvr",
                    "IMG": "assets/compressed/uncompressed/labs.png"
                }
            }
        ]
    },
    "meta": {
        "generated": "1401380327373",
        "app": "Phaser 3 Asset Packer",
        "url": "https://phaser.io",
        "version": "1.0",
        "copyright": "Photon Storm Ltd. 2021"
    }
};

class Demo extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.pack('pack1', FilePackObject);
    }

    create ()
    {
        const logo = this.add.image(400, 300, 'labs');

        this.add.text(400, 570, logo.frame.source.compressionAlgorithm).setOrigin(0.5, 0);
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
