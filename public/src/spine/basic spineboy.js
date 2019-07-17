var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#cdcdcd',
    scene: {
        preload: preload,
        create: create,
        pack: {
            files: [
                { type: 'scenePlugin', key: 'SpinePlugin', url: 'plugins/SpinePlugin.js', sceneKey: 'spine' }
            ]
        }
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('logo', 'assets/sprites/phaser.png');

    this.load.setPath('assets/animations/spine/');

    this.load.spine('boy', 'spineboy.json', 'spineboy.atlas');
}

function create ()
{
    this.add.image(0, 0, 'logo').setOrigin(0);

    this.add.spine(400, 600, 'boy', 'idle', true);
}
