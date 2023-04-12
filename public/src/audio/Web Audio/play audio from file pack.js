class Example extends Phaser.Scene
{
    FilePackObject = {
        pack: {
            files: [
                {
                    type: 'audio',
                    key: 'theme',
                    url: [
                        'assets/audio/oedipus_wizball_highscore.ogg',
                        'assets/audio/oedipus_wizball_highscore.mp3'
                    ]
                },
                {
                    type: 'image',
                    key: 'wizball',
                    url: 'assets/sprites/wizball.png'
                }
            ]
        },
        meta: {
            generated: '1401380327373',
            app: 'Phaser 3 Asset Packer',
            url: 'https://phaser.io',
            version: '1.0',
            copyright: 'Photon Storm Ltd. 2021'
        }
    };

    preload ()
    {
        this.load.pack('pack1', this.FilePackObject);
    }

    create ()
    {
        this.add.image(400, 300, 'wizball').setScale(4);

        const music = this.sound.add('theme');

        music.play();
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
