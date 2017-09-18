var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var cursors;
var camera;
var sprite;
var text;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('bg', 'assets/tests/camera3d/bg.png');
    this.load.image('tree', 'assets/tests/camera3d/tree.png');
}

function create ()
{
    this.add.image(400, 300, 'bg');

    camera = this.cameras.add3D(80, 800, 600).setPosition(0, 0, -400);

    sprite = camera.create(0, 0, 0, 'tree');

    cursors = this.input.keyboard.createCursorKeys();

    text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
}

function update ()
{
    if (cursors.left.isDown)
    {
        camera.x -= 4;
    }
    else if (cursors.right.isDown)
    {
        camera.x += 4;
    }

    if (cursors.up.isDown)
    {
        if (cursors.shift.isDown)
        {
            camera.y -= 4;
        }
        else
        {
            camera.z += 16;
        }
    }
    else if (cursors.down.isDown)
    {
        if (cursors.shift.isDown)
        {
            camera.y += 4;
        }
        else
        {
            camera.z -= 16;
        }
    }

    text.setText([
        'camera.x: ' + camera.x,
        'camera.y: ' + camera.y,
        'camera.z: ' + camera.z
    ]);
}
