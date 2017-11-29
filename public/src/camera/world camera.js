var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: {
        create: create,
        update: update
    }
};

var gui;
var graphics;
var bounds;
var rect1;

var game = new Phaser.Game(config);

function create ()
{
    graphics = this.add.graphics();

    bounds = new Phaser.Geom.Rectangle(0, 0, 1600, 1200);
    rect1 = new Phaser.Geom.Rectangle(200, 200, 600, 100);

    drawScene();

    // this.input.events.on('POINTER_MOVE_EVENT', function (event) {

    //     Phaser.Geom.Rectangle.CenterOn(rect, event.x, event.y);

    // });

    var cursors = this.input.keyboard.createCursorKeys();

    var controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
        zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
        acceleration: 0.06,
        drag: 0.0005,
        maxSpeed: 1.0
    };

    controls = this.cameras.addSmoothedKeyControl(controlConfig);

    this.input.keyboard.events.on('KEY_DOWN_Z', function (event) {

        this.cameras.main.rotation += 0.01;

    }, 0, this);

    this.input.keyboard.events.on('KEY_DOWN_X', function (event) {

        this.cameras.main.rotation -= 0.01;

    }, 0, this);

    var cam = this.cameras.main;

    gui = new dat.GUI();
    gui.add(cam, 'x');
    gui.add(cam, 'y');
    gui.add(cam, 'scrollX', -1000, 1000);
    gui.add(cam, 'scrollY', -1000, 1000);
    gui.add(cam, 'rotation').min(0).step(0.01);
    gui.add(cam, 'zoom', 0.1, 2).step(0.1);
    gui.add(cam, 'transparent');
}

function update (time, delta)
{
    controls.update(delta);
}

function drawScene ()
{
    //  camera marker
    graphics.lineStyle(1, 0x00ff00);
    graphics.strokeRectShape(bounds);
    graphics.lineBetween(0, 0, 1600, 1200);
    graphics.lineBetween(1600, 0, 0, 1200);

    graphics.fillStyle(0x00ffff);
    graphics.fillRectShape(rect1);

}
