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
var text;
var sprite3D;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('bg', 'assets/tests/camera3d/bg.png');
    this.load.image('tree', 'assets/tests/camera3d/tree.png');
}

function create ()
{
    this.add.image(400, 300, 'bg');

    sprite3D = [];

    for (var z = 0; z < 32; z++)
    {
        for (var x = 0; x < 32; x++)
        {
            var bx = x * 100;
            var bz = z * 300;

            sprite3D.push({
                image: this.add.image(0, 0, 'tree'),
                position: new Phaser.Math.Vector4(bx, 0, bz),
                size: new Phaser.Math.Vector2(1, 1)
            });
        }
    }

    camera = new Phaser.Cameras.PerspectiveCamera(20, 800, 600).setPosition(960, 250, -300);

    projectCamera();

    cursors = this.input.keyboard.createCursorKeys();

    text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
}

function projectCamera ()
{
    for (var i = 0; i < sprite3D.length; i++)
    {
        var sprite = sprite3D[i];

        camera.project(sprite.position, sprite.image);

        var scale = camera.getPointSize(sprite.position, sprite.size);

        sprite.image.setScale(scale.x, scale.y).setDepth(sprite.image.z);

        sprite.image.setVisible((sprite.position.z > camera.z));
    }
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
            camera.z += 16;
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
            camera.z -= 16;
        }
    }

    if (dirty)
    {
        projectCamera();
    }

    text.setText([
        'camera.x: ' + camera.x,
        'camera.y: ' + camera.y,
        'camera.z: ' + camera.z
    ]);
}
