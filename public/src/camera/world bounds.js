var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var controls;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('grid', 'assets/pics/uv-grid-4096-ian-maclachlan.png');
}

function create ()
{
    var gui = new dat.GUI();

    this.add.image(0, 0, 'grid').setOrigin(0);

    var cursors = this.input.keyboard.createCursorKeys();

    var controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        acceleration: 0.02,
        drag: 0.0005,
        maxSpeed: 1.0
    };

    controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);

    var cam = this.cameras.main;

    cam.setBounds(0, 0, 4096, 4096);

    gui.addFolder('Camera');
    gui.add(cam.midPoint, 'x').listen();
    gui.add(cam.midPoint, 'y').listen();
    gui.add(cam.worldBounds, 'top').listen();
    gui.add(cam.worldBounds, 'left').listen();
    gui.add(cam.worldBounds, 'right').listen();
    gui.add(cam.worldBounds, 'bottom').listen();
    gui.add(cam, 'scrollX').listen();
    gui.add(cam, 'scrollY').listen();
}

function update (time, delta)
{
    controls.update(delta);
}
