var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
    },
    width: 800,
    height: 600,
    resolution: 2,
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
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    this.cameras.main.setBounds(0, 0, 20000, 20000);

    var total = 1000;

    var text = this.add.text(10, 10, 'Cursors to move. Click boxes. Remaining: ' + total, { font: '16px Courier', fill: '#00ff00' }).setScrollFactor(0);


    for (var i = 0; i < total; i++)
    {
        var image = this.add.image(Phaser.Math.Between(0, 20000), Phaser.Math.Between(0, 20000), 'block').setInteractive();

        image.on('pointerup', function () {

            total--;
            text.setText('Cursors to move. Click boxes. Remaining: ' + total);
            this.destroy();

        })
    }

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

    var gui = new dat.GUI();

    gui.addFolder('Camera');
    gui.add(cam.midPoint, 'x').listen();
    gui.add(cam.midPoint, 'y').listen();
    gui.add(cam, 'scrollX').listen();
    gui.add(cam, 'scrollY').listen();
    gui.add(cam, 'width').listen();
    gui.add(cam, 'height').listen();
    gui.add(cam, 'displayWidth').listen();
    gui.add(cam, 'displayHeight').listen();
    gui.add(cam, 'zoom', 0.1, 4).step(0.1);
}

function update (time, delta)
{
    controls.update(delta);
}

