var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    pixelArt: true,
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
    this.load.image('ship', 'assets/sprites/thrust_ship2.png');
}

function create ()
{
    sprite = this.add.sprite(400, 300, 'ship').setScale(8);

    var shape = new Phaser.Geom.Triangle.BuildEquilateral(0, -18, 30);

    sprite.setHitArea(shape, Phaser.Geom.Triangle.Contains);

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
