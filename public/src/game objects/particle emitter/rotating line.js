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
    // this.load.image('spark', 'assets/particles/sparkle1.png');
    this.load.image('spark', 'assets/particles/green-orb.png');
}

function create ()
{
    line = new Phaser.Geom.Line(-200, -200, 200, 200);

    var emitter = this.add.emitter(400, 300, 'spark');

    emitter.setBlendMode(Phaser.BlendModes.SCREEN);
    emitter.setScale(0.1, 0);
    emitter.setSpeed(-20, 20);
    emitter.emitCount = 32;
    emitter.setShape(line);
}

function update ()
{
    Phaser.Geom.Line.Rotate(line, 0.03);
}
