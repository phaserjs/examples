class Example extends Phaser.Scene
{
    constructor()
    {
        super({
            pack: {
                files: [
                    {
                        type: 'scenePlugin',
                        key: 'SpinePlugin',
                        url: 'plugins/3.8.95/SpinePluginDebug.js',
                        sceneKey: 'spine'
                    }
                ]
            }
        });
    }

    preload ()
    {
        this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.setPath('assets/spine/3.8/owl/');
        this.load.spine('owl', 'owl-pro.json', 'owl-pro.atlas', true);
    }

    create ()
    {
        this.add.spine(400, 500, 'owl', 'idle', true).setScale(0.7);
        this.counter = this.add.text(10, 10, "", { fontSize: 32 })
            .setOrigin(0)
            .setInteractive()
            .on('pointerdown', () =>
            {
                this.counter.preFX.addColorMatrix()
            });
    }

    update ()
    {
        this.counter.setText(
            "glAttribLocationWrappers:" + this.renderer.glAttribLocationWrappers.length
        );
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
