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

var center;
var text;
var camera;
var cursors;
var sprite3D = [];

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/128x128.png');
}

function create ()
{
    //  Let's assume that 400x300 = the center of our world (i.e. 0x0)

    sprite3D.push({
        image: this.add.image(400, 300, 'block'),
        position: new Phaser.Math.Vector4(0, 300, 0)
    });
   
    sprite3D.push({
        image: this.add.image(100, 300, 'block'),
        position: new Phaser.Math.Vector4(-300, 300, 100)
    });

    sprite3D.push({
        image: this.add.image(700, 300, 'block'),
        position: new Phaser.Math.Vector4(300, 300, 200)
    });

    text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });

    camera = new Phaser.Cameras3D.OrthographicCamera(800, 600);
    camera.setToOrtho(true, 800, 600);

    // center = new Phaser.Math.Vector3();

    // camera.translate(center);
    // camera.update();

    cursors = this.input.keyboard.createCursorKeys();
}

function update ()
{
    if (cursors.left.isDown)
    {
        camera.position.x -= 1;
    }
    else if (cursors.right.isDown)
    {
        camera.position.x += 1;
    }

    if (cursors.up.isDown)
    {
        camera.position.z -= 1;
    }
    else if (cursors.down.isDown)
    {
        camera.position.z += 1;
    }

    // camera.lookAt(center);
    camera.update();

    //  Project the camera position onto all of the sprites

    for (var i = 0; i < sprite3D.length; i++)
    {
        var sprite = sprite3D[i];

        camera.project(sprite.position, sprite.image);

        sprite.image.setScale(sprite.image.z);

        if (sprite.image.z < 0)
        {
            sprite.image.visible = false;
        }
        else
        {
            sprite.image.setScale(sprite.image.z).setDepth(sprite.image.z).setVisible(true);
        }
    }

    text.setText([
        'camera.x: ' + camera.position.x,
        'camera.y: ' + camera.position.y,
        'camera.z: ' + camera.position.z
    ]);
}
