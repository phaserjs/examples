class Example extends Phaser.Scene
{
    FilePackObject = {
        test1: {
            files: [
                {
                    type: 'image',
                    key: 'taikodrummaster',
                    url: 'assets/pics/taikodrummaster.jpg'
                },
                {
                    type: 'image',
                    key: 'sukasuka-chtholly',
                    url: 'assets/pics/sukasuka-chtholly.png'
                }
            ]
        },
        test2: {
            prefix: 'TEST2.',
            path: 'assets/pics',
            defaultType: 'image',
            files: [
                {
                    key: 'donuts',
                    extension: 'jpg'
                },
                {
                    key: 'ayu'
                }
            ]
        },
        meta: {
            generated: '1401380327373',
            app: 'Phaser 3 Asset Packer',
            url: 'https://phaser.io',
            version: '1.0',
            copyright: 'Photon Storm Ltd. 2018'
        }
    };

    preload ()
    {
        this.load.pack('pack1', this.FilePackObject);
    }

    create ()
    {
        this.add.image(400, 300, 'taikodrummaster');
        this.add.image(400, 500, 'sukasuka-chtholly');
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
