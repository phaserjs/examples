let spineboy
let container

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
        this.load.image('logo', 'assets/sprites/phaser.png');
        this.load.setPath('assets/spine/3.8/demos/');
        this.load.spine('set1', 'demos.json', [ 'atlas1.atlas' ], true);
    }

    create ()
    {
        this.add.image(0, 0, 'logo').setOrigin(0);
        container = this.add.spineContainer()
        spineboy = this.add.spine(400, 600, 'set1.spineboy', 'idle', true);
        container.add(spineboy)

        container.setScale(0.5)
    }

    update(time, delta)
    {
        this.cameras.main.setZoom(Math.sin(time / 1000));
    }
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    scene: Example
};

const game = new Phaser.Game(config);
