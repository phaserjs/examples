var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var sprite;
var mouse = { x: 0, y: 0, hasMoved: false };

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
}

function create ()
{
    sprite = this.add.sprite(400, 300, 'eye');

    var shape = new Phaser.Geom.Rectangle(-64, -64, 128, 128);

    sprite.setHitArea(shape, Phaser.Geom.Rectangle.Contains);

    this.input.events.on('MOUSE_MOVE_EVENT', function (event) {

        mouse.x = event.x;
        mouse.y = event.y;
        mouse.hasMoved = true;

    });
}

function update ()
{
    if (!mouse.hasMoved)
    {
        return;
    }

    var objects = this.input.pointScreenToWorldHitTest(sprite, mouse.x, mouse.y, this.cameras.main);

    if (objects.length > 0)
    {
        sprite.setTint(0xff0000);
    }
    else
    {
        sprite.clearTint();
    }

    mouse.hasMoved = false;
}
