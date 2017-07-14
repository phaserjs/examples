var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: {
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
    this.load.image('chick', 'assets/sprites/budbrain_chick.png');
}

function create ()
{
    sprite = this.add.sprite(400, 300, 'chick').setScale(1);

    var shape = new Phaser.Geom.Ellipse(-33, -66, 66, 133);

    sprite.setHitArea(shape, Phaser.Geom.Ellipse.Contains);

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
