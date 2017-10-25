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
    this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
}

function create ()
{
    var particles = this.add.particles('flares');

    var emitter = particles.createEmitter({
        frame: 'green',
        x: 400,
        y: 300,
        lifespan: 4000,
        speed: { min: 100, max: 300 },
        scale: { start: 0.4, end: 0 },
        gravityY: 100,
        bounce: 0.8,
        bounds: { x: 100, y: 100, w: 600, h: 400 },
        blendMode: 'ADD'
    });

    console.log(emitter);
}
