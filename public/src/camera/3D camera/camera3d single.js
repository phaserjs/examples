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

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/128x128.png');
}

function create ()
{
    image = this.add.image(400, 300, 'block');

    //  the image position in 3d space
    position = new Phaser.Math.Vector4();

    text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });

    camera = new Phaser.Cameras3D.OrthographicCamera(800, 600);

    var tmp = new Phaser.Math.Vector3();

    camera.translate(tmp.set(0, 0, -100));
    camera.lookAt(tmp.set(0, 0, 0));
    camera.update();

    cursors = this.input.keyboard.createCursorKeys();
}

function update ()
{
    /*
    if (cursors.left.isDown)
    {
        position.x -= 1;
    }
    else if (cursors.right.isDown)
    {
        position.x += 1;
    }

    if (cursors.up.isDown)
    {
        position.y -= 1;
    }
    else if (cursors.down.isDown)
    {
        position.y += 1;
    }
    */

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

    camera.update();

    camera.project(position, image);

    image.setScale(image.z);

    text.setText([
        'camera.x: ' + camera.position.x,
        'camera.y: ' + camera.position.y,
        'camera.z: ' + camera.position.z,
        '',
        'image.x: ' + image.x,
        'image.y: ' + image.y,
        'image.z: ' + image.z
    ]);
}
