var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('spark', 'assets/particles/blue.png');
}

function create ()
{
    var emitter = this.add.emitter(400, 300, 'spark');

    emitter.setBlendMode(Phaser.BlendModes.SCREEN);
    emitter.setScale(0.2, 0);
    emitter.setSpeed(-100, 100);
    emitter.emitCount = 50;

    var shapes = [];

    shapes.push(new Phaser.Geom.Circle(0, 0, 100));
    shapes.push(new Phaser.Geom.Ellipse(0, 0, 400, 100));
    shapes.push(new Phaser.Geom.Rectangle(-150, -150, 300, 300));
    shapes.push(new Phaser.Geom.Line(-150, -150, 150, 150));
    shapes.push(new Phaser.Geom.Triangle(0, -200, 200, 200, -200, 200));

    var shapeIndex = 0;

    this.input.events.on('MOUSE_MOVE_EVENT', function (event) {
        emitter.x = event.x;
        emitter.y = event.y;
    });

    this.input.events.on('MOUSE_DOWN_EVENT', function (event) {
        shapeIndex = (shapeIndex + 1) % shapes.length;
        emitter.setShape(shapes[shapeIndex]);
        emitter.explode();
    });

    emitter.setShape(shapes[shapeIndex]);
}
