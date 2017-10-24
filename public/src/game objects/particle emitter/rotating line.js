var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var line;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
}

function create ()
{
    line = new Phaser.Geom.Line(-200, -200, 200, 200);

    var particles = this.add.particles('flares');

    particles.createEmitter({
        frame: [ 'red', 'green', 'yellow', 'blue' ],
        x: 400, y: 300,
        scale: { start: 0.1, end: 0 },
        speed: { min: -20, max: 20 },
        quantity: 32,
        zone: line,
        blendMode: 'SCREEN'
    });

    // var emitter = this.add.emitter(400, 300, 'spark');

    // emitter.setBlendMode(Phaser.BlendModes.SCREEN);
    // emitter.setScale(0.1, 0);
    // emitter.setSpeed(-20, 20);
    // emitter.emitCount = 32;
    // emitter.setShape(line);
}

function update ()
{
    Phaser.Geom.Line.Rotate(line, 0.03);
}
