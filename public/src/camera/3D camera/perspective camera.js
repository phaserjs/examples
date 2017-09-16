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
var image;
var camera;
var text;
var position;
var size;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/128x128-v2.png');
}

function create ()
{
    image = this.add.image(400, 300, 'block');

    //  the position of the image in 3D space
    position = new Phaser.Math.Vector4();

    //  We need to find a sensible mapping from 1 3D unit to pixels (here it's 1:128)
    size = new Phaser.Math.Vector2(1, 1);

    camera = new Phaser.Cameras.PerspectiveCamera(85, 800, 600).setPosition(0, 0, -100);

    //  Set default scale
    camera.project(position, image);
    var scale = camera.getPointSize(position, size);
    image.setScale(scale.x, scale.y);


    cursors = this.input.keyboard.createCursorKeys();

    text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
}

function update ()
{
    var dirty = false;

    if (cursors.left.isDown)
    {
        dirty = true;
        camera.x -= 4;
    }
    else if (cursors.right.isDown)
    {
        dirty = true;
        camera.x += 4;
    }

    if (cursors.up.isDown)
    {
        dirty = true;

        if (cursors.shift.isDown)
        {
            camera.y -= 4;
        }
        else
        {
            camera.z -= 4;
        }
    }
    else if (cursors.down.isDown)
    {
        dirty = true;

        if (cursors.shift.isDown)
        {
            camera.y += 4;
        }
        else
        {
            camera.z += 4;
        }
    }

    if (dirty)
    {
        camera.project(position, image);

        var scale = camera.getPointSize(position, size);

        image.setScale(scale.x, scale.y);
    }

    text.setText([
        'camera.x: ' + camera.x,
        'camera.y: ' + camera.y,
        'camera.z: ' + camera.z,
        '',
        'image.x: ' + image.x,
        'image.y: ' + image.y,
        'image.z: ' + image.z
    ]);
}
