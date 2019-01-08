var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
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
    this.load.image('logo', 'assets/sprites/phaser.png');

    this.load.setPath('assets/animations/spine/webgl/');

    this.load.spine('demos', 'demos.json', 'atlas2.atlas');
}

function create ()
{
    this.add.image(0, 0, 'logo').setOrigin(0);

    // var man = this.add.spine(400, 550, 'stretchyman', 'sneak', true);
}
