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
    this.load.image('block', 'assets/sprites/128x128-v2.png');
    this.load.image('ball', 'assets/sprites/shinyball.png');
}

function create ()
{
    sprite3D = [];

    for (var z = 0; z < 6; z++)
    {
        for (var y = 0; y < 6; y++)
        {
            for (var x = 0; x < 6; x++)
            {
                var bx = 200 + (x * 64);
                var by = 100 + (y * 64);
                var bz = 100 + (z * 64);

                sprite3D.push({
                    image: this.add.image(bx, by, 'ball').setZ(bz),
                    position: new Phaser.Math.Vector4(bx, by, bz),
                    size: new Phaser.Math.Vector2(1, 1)
                });
            }
        }
    }

    camera = new Phaser.Cameras.PerspectiveCamera(85, 800, 600).setPosition(300, 250, -350);

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
        projectCamera();
    }

    text.setText([
        'camera.x: ' + camera.x,
        'camera.y: ' + camera.y,
        'camera.z: ' + camera.z
    ]);
}
