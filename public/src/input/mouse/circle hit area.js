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
    this.load.image('ball', 'assets/sprites/wizball.png');
}

function create ()
{
    sprite = this.add.sprite(400, 300, 'ball').setScale(2);

    var shape = new Phaser.Geom.Circle(0, 0, 45);

    sprite.setHitArea(shape, Phaser.Geom.Circle.Contains);

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
        sprite.setTint(0x7878ff);
    }
    else
    {
        sprite.clearTint();
    }

    mouse.hasMoved = false;
}
