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
                { type: 'scenePlugin', key: 'SpinePlugin', url: 'plugins/3.8.95/SpinePluginDebug.js', sceneKey: 'spine' }
            ]
        }
    }
};

var controls;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('logo', 'assets/sprites/phaser.png');

    this.load.setPath('assets/spine/3.8/spineboy');

    this.load.spine('boy', 'spineboy-pro.json', 'spineboy-pro.atlas', true);

    this.load.setPath('assets/spine/3.8/coin');

    this.load.spine('coin', 'coin-pro.json', 'coin-pro.atlas');
}

function create ()
{
    const spineContainer = this.add.spineContainer(200, 400);

    const spineBoy = this.add.spine(0, 50, 'boy', 'walk', true).setScale(0.5);
    spineContainer.add(spineBoy)

    //add mask to spineContainer
    spineContainer.maskShape = this.add.graphics()
    .fillStyle(0x7fff00, 0.2) //for debugging purposes
    .setVisible(true) //set true for debugging purposes
    .setDepth(5)
    .fillRect(
      Math.ceil(100),
      Math.ceil(100),
      Math.ceil(300),
      Math.ceil(300)
    )
    const mask = new Phaser.Display.Masks.GeometryMask(this, spineContainer.maskShape)
    spineContainer.setMask(mask)

    // this.add.image(0, 0, 'logo');

    const coin = this.add.spine(200, 300, 'coin', 'rotate', true).setScale(0.3);

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
