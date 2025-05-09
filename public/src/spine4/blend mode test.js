var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#cdcdcd',
    scene: {
        preload: preload,
        create: create,
        update: update,
        pack: {
            files: [
                { type: 'scenePlugin', key: 'SpinePlugin', url: 'plugins/spine4.1/SpinePluginDebug.js', sceneKey: 'spine' }
            ]
        }
    }
};

var controls;

var game = new Phaser.Game(config);

function preload ()
{
        this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
    this.load.setPath('assets/spine/4.1/spineboy');

    this.load.spine('boy', 'spineboy-pro.json', 'spineboy-pma.atlas', false);
}

function create ()
{
    // this.add.spine(0, 600, 'boy', 'shoot', true).setScale(0.25);
    // this.add.spine(200, 600, 'boy', 'shoot', true).setScale(0.25);
    // this.add.spine(400, 600, 'boy', 'shoot', true).setScale(0.25);
    // this.add.spine(600, 600, 'boy', 'shoot', true).setScale(0.25);

    let base = this.add.spineContainer();

    for (var i = 0; i < 4; i++)
    {
        let obj = this.add.spine(i * 200, 600, 'boy', 'shoot', true).setScale(0.25);

        base.add(obj)
    }

    var cursors = this.input.keyboard.createCursorKeys();

    var controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
        zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
        acceleration: 0.35,
        drag: 0.01,
        maxSpeed: 1.2
    };

    controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);
}

function update (time, delta)
{
    controls.update(delta);
}
