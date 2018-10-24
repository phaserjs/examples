var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d66',
    scene: {
        preload: preload,
        create: create,
        pack: {
            files: [
                { type: 'scenePlugin', key: 'SpineCanvasPlugin', url: 'plugins/SpineCanvasPlugin.js', sceneKey: 'spine' }
            ]
        }
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.setPath('assets/animations/spine/');

    this.load.spine('boy', 'spineboy.json', 'spineboy.atlas');
}

function create ()
{
    // this.spine.skeletonRenderer.debugRendering = true;
    // this.spine.skeletonRenderer.triangleRendering = true;

    var spineBoy = this.add.spine(600, 550, 'boy', 'run', true);

    spineBoy.setScale(0.5);

    var spineBoy2 = this.add.spine(200, 400, 'boy', 'shoot', true);

    spineBoy2.setScale(0.3);
}
