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
    this.load.spritesheet('dragcircle', 'assets/sprites/dragcircle.png', { frameWidth: 16 });
    this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
}

function create ()
{
    var graphics = this.add.graphics();

    var particles = this.add.particles('flares');

    var path = { t: 0, vec: new Phaser.Math.Vector2() };

    var curve = new Phaser.Curves.Spline([
        20, 550,
        260, 450,
        300, 250,
        550, 145,
        745, 256
    ]);

    var emitter = particles.createEmitter({
        frame: 'blue',
        quantity: 48,
        scale: { start: 0.5, end: 0 },
        blendMode: 'ADD',
        emitZone: { type: 'edge', source: curve, quantity: 48 }
    });

    //  Create drag-handles for each point

    for (var i = 0; i < curve.points.length; i++)
    {
        var point = curve.points[i];

        var handle = this.add.image(point.x, point.y, 'dragcircle', 0).setInteractive();

        handle.data.set('vector', point);

        this.input.setDraggable(handle);
    }

    this.input.events.on('DRAG_START_EVENT', function (event) {

        event.gameObject.setFrame(1);

    });

    this.input.events.on('DRAG_EVENT', function (event) {

        event.gameObject.x = event.dragX;
        event.gameObject.y = event.dragY;

        event.gameObject.data.get('vector').set(event.dragX, event.dragY);

        emitter.emitZone.updateSource();

    });

    this.input.events.on('DRAG_END_EVENT', function (event) {

        event.gameObject.setFrame(0);

    });
}
