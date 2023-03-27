// #module
import PlasmaPostFX from './assets/pipelines/PlasmaPostFX.js';

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
        const hueRotatePipeline = this.renderer.pipelines.get('PlasmaPostFX');

        this.add.image(0, 0, 'logo').setOrigin(0);

        this.add.spine(400, 600, 'set1.spineboy', 'idle', true);

        this.cameras.main.setPostPipeline(hueRotatePipeline);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example,
    pipeline: { PlasmaPostFX }
};

const game = new Phaser.Game(config);
