var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var mouse = { x: 0, y: 0, hasMoved: false };
var highlighted;
var group;
var controls;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.spritesheet('bobs', 'assets/sprites/bobs-by-cleathley.png', { frameWidth: 32, frameHeight: 32 });
}

function create ()
{
    //  Create a little 32x32 texture to use to show where the mouse is
    var graphics = this.make.graphics({ x: 0, y: 0, add: false, fillStyle: { color: 0xff00ff, alpha: 1 } });

    graphics.fillRect(0, 0, 32, 32);

    graphics.generateTexture('block', 32, 32);

    highlighted = this.add.image(16, 16, 'block');

    //  All the Images can share the same Shape, no need for a unique instance per one, a reference is fine
    var hitArea = new Phaser.Geom.Rectangle(-16, -16, 32, 32);
    var hitAreaCallback = Phaser.Geom.Rectangle.Contains;

    //  Create 10,000 Image Game Objects aligned in a grid
    group = this.make.group({
        classType: Phaser.GameObjects.Image,
        key: 'bobs',
        frame: Phaser.Utils.Array.NumberArray(0, 399),
        randomFrame: true,
        repeat: 24,
        max: 10000,
        hitArea: hitArea,
        hitAreaCallback: hitAreaCallback,
        gridAlign: {
            width: 100,
            cellWidth: 32,
            cellHeight: 32
        }
    });

    //  Camera controls
    var cursors = this.input.keyboard.createCursorKeys();

    var controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        acceleration: 0.04,
        drag: 0.0005,
        maxSpeed: 0.7
    };

    this.cameras.main.disableCull = true;

    controls = this.cameras.addSmoothedKeyControl(controlConfig);

    //  Track movement
    this.input.events.on('MOUSE_MOVE_EVENT', function (event) {

        mouse.x = event.x;
        mouse.y = event.y;
        mouse.hasMoved = true;

    });
}

function update (time, delta)
{
    controls.update(delta);

    if (!mouse.hasMoved)
    {
        return;
    }

    var objects = this.input.pointScreenToWorldHitTest(group.children.entries, mouse.x, mouse.y, this.cameras.main);

    if (objects && objects.length > 0)
    {
        var x = objects[0].x;
        var y = objects[0].y;

        highlighted.setPosition(x, y);
    }

    mouse.hasMoved = false;
}
