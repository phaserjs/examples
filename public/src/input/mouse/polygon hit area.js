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
    this.load.image('car', 'assets/pics/supercars-parsec.png');
}

function create ()
{
    sprite = this.add.sprite(200, 300, 'car').setOrigin(0);

    var shape = new Phaser.Geom.Polygon([
        0, 143,
        0, 92,
        110, 40,
        244, 4,
        330, 0,
        458, 12,
        574, 18,
        600, 79,
        594, 153,
        332, 152,
        107, 157
    ]);

    sprite.setHitArea(shape, Phaser.Geom.Polygon.Contains);

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
