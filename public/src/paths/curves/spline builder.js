var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var parts = 8;
var path;
var curve;
var handles;
var graphics;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ball', 'assets/sprites/shinyball.png');
    this.load.spritesheet('dragcircle', 'assets/sprites/dragcircle.png', { frameWidth: 16 });
}

function create ()
{
    handles = this.add.group();

    ball = this.add.image(0, 0, 'ball').setDepth(1000);

    path = { t: 0, vec: new Phaser.Math.Vector2() };

    curve = new Phaser.Curves.Spline([ new Phaser.Math.Vector2(50, 300) ]);

    var tween = this.tweens.add({
        targets: path,
        t: 1,
        ease: 'Sine.easeInOut',
        duration: 500,
        repeat: -1
    });

    var _this = this;

    var createPointHandle = function (point)
    {
        var handle = handles.create(point.x, point.y, 'dragcircle', 0).setInteractive();

        handle.data.set('vector', point);

        _this.input.setDraggable(handle);
    };

    createPointHandle(curve.points[0]);

    this.input.events.on('POINTER_DOWN_EVENT', function (event) {

        //  Check we didn't click an existing handle
        if (event.gameObject)
        {
            return;
        }

        var vec = curve.addPoint(event.x, event.y);

        createPointHandle(vec);

        parts += 8;

        tween.stop();

        path.t = 0;

        tween = _this.tweens.add({
            targets: path,
            t: 1,
            ease: 'Sine.easeInOut',
            duration: 500 * (curve.points.length + 1),
            repeat: -1
        });

    });

    this.input.events.on('DRAG_START_EVENT', function (event) {

        event.gameObject.setFrame(1);

    });

    this.input.events.on('DRAG_EVENT', function (event) {

        event.gameObject.x = event.dragX;
        event.gameObject.y = event.dragY;

        event.gameObject.data.get('vector').set(event.dragX, event.dragY);

    });

    this.input.events.on('DRAG_END_EVENT', function (event) {

        event.gameObject.setFrame(0);

    });

    graphics = this.add.graphics();

}

function update ()
{
    graphics.clear();

    graphics.lineStyle(2, 0xffffff, 1);

    curve.draw(graphics, parts);

    curve.getPoint(path.t, path.vec);

    ball.setPosition(path.vec.x, path.vec.y);
}
