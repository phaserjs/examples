class Example extends Phaser.Scene
{
    constructor ()
    {
        super({
            pack: {
                files: [
                    { type: 'scenePlugin', key: 'SpinePlugin', url: 'plugins/3.8.95/SpinePluginDebug.js', sceneKey: 'spine' }
                ]
            }
        });
    }

    preload ()
    {
        this.load.setPath('assets/spine/3.8/coin');
        this.load.spine('coin1', 'coin-pro.json', 'coin-pro.atlas');

        this.load.setPath('assets/spine/3.8/coin2');
        this.load.spine('coin2', 'coin-pro.json', 'coin-pro.atlas');
    }

    create ()
    {
        this.add.spine(300, 300, 'coin1', 'animation', true);
        this.add.spine(600, 300, 'coin2', 'animation', true);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: Example
};

const game = new Phaser.Game(config);
