var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('volcano', 'assets/pics/the-end-by-iloe-and-made.jpg');
    this.load.image('hotdog', 'assets/sprites/hotdog.png');
}

function create ()
{
    //  A background image - scrolls with the camera at a 1:1 ratio
    this.add.image(400, 300, 'volcano');

    //  A sprite, doesn't scroll with the camera (is fixed to camera)
    this.add.image(400, 300, 'hotdog').setScrollFactor(0);

    //  From here down is just camera controls and feedback

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
