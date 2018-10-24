var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d66',
    scene: {
        preload: preload,
        create: create,
        pack: {
            files: [
                { type: 'scenePlugin', key: 'SpineWebGLPlugin', url: 'plugins/SpineWebGLPlugin.js', sceneKey: 'spine' }
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
    var spineBoy = this.add.spine(400, 550, 'boy', 'run', true);

    spineBoy.setScale(0.5);

    // spineBoy.setAngle(2);

    // var spineBoy2 = this.add.spine(200, 400, 'boy', 'shoot', true);

    // spineBoy2.setScale(0.3);
}
