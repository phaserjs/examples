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
        this.load.setPath('assets/spine/3.8/demos/');

        this.load.spine('set1', 'demos.json', 'atlas1.atlas');
    }

    create ()
    {
        const b = this.add.spine(400, 500, 'set1.alien', 'death', false).setScale(0.4);
        const c = this.add.spine(400, 200, 'set1.dragon', 'flying', true).setScale(0.4);


    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#cdcdcd',
    scene: Example
};

const game = new Phaser.Game(config);
