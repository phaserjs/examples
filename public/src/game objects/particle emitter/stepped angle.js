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

    particles.createEmitter({
        frame: 'red',
        x: 200, y: 150,
        lifespan: 1000,
        emitterAngle: { min: 0, max: 360, step: 32 },
        speed: 200,
        quantity: 16,
        scale: { min: 0.3, max: 0 },
        frequency: 64,
        blendMode: 'ADD'
    });

    particles.createEmitter({
        frame: 'yellow',
        x: 600, y: 150,
        lifespan: 800,
        emitterAngle: { min: 360, max: 0, step: 32 },
        speed: 200,
        quantity: 1,
        scale: { min: 0.8, max: 0 },
        frequency: 40,
        blendMode: 'ADD'
    });

    particles.createEmitter({
        frame: 'blue',
        x: 200, y: 450,
        lifespan: 1000,
        emitterAngle: { min: 0, max: 360, step: 360 },
        speed: 200,
        quantity: 8,
        scale: { min: 0.4, max: 0 },
        blendMode: 'ADD'
    });

    particles.createEmitter({
        frame: 'green',
        x: 600, y: 450,
        lifespan: { min: 600, max: 800 },
        emitterAngle: { min: 0, max: 360, step: 64 },
        speed: 200,
        quantity: 64,
        scale: { min: 0.2, max: 0.1 },
        frequency: 32,
        blendMode: 'ADD'
    });
}
