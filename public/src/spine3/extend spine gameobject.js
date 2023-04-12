//  You cannot do this until `SpinePlugin` is available
//  which it isn't until the plugin has loaded.
const createNewClass = () =>
{
    class Enemy extends SpinePlugin.SpineGameObject
    {
        constructor (scene, x, y, skeleton, animation)
        {
            super(scene, scene.sys.SpinePlugin, x, y, skeleton, animation, true);

            scene.sys.displayList.add(this);
            scene.sys.updateList.add(this);
        }
    }

    return Enemy;
}

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

        this.load.spine('set1', 'demos.json', [ 'atlas1.atlas' ], true);
    }

    create ()
    {
        const Enemy = createNewClass();

        const boy = new Enemy(this, 400, 600, 'set1.spineboy', 'idle');

        console.log(boy);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    scene: Example
};

const game = new Phaser.Game(config);
