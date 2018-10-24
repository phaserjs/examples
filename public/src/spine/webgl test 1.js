var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d66',
    scene: {
        preload: preload,
        create: create,
        update: update,
        pack: {
            files: [
                { type: 'scenePlugin', key: 'SpineWebGLPlugin', url: 'plugins/SpineWebGLPlugin.js', sceneKey: 'spine' }
            ]
        }
    }
};

var controls;

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

    // var spineBoy = this.add.spine(400, 550, 'boy', 'run', true);

    var spineBoy = this.add.spine(400, 300, 'boy', 'idle', true);
    spineBoy.setScale(0.5);

    // spineBoy.setAngle(-45);

    // var spineBoy2 = this.add.spine(200, 400, 'boy', 'shoot', true);

    // spineBoy2.setScale(0.3);

    var cursors = this.input.keyboard.createCursorKeys();

    var controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        acceleration: 0.06,
        drag: 0.0005,
        maxSpeed: 1.0
    };

    controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);
}

function update (time, delta)
{
    controls.update(delta);
}
