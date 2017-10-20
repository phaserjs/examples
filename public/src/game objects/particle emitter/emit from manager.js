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
    this.load.atlas('explosion', 'assets/particles/explosion.png', 'assets/particles/explosion.json');
}

function create ()
{
    var particles = this.add.particles('explosion');

    particles.createEmitter({
        frame: [ 'smoke-puff', 'cloud', 'smoke-puff' ],
        emitterAngle: { min: 240, max: 300 },
        speed: { min: 200, max: 300 },
        quantity: 6,
        lifespan: 2000,
        alpha: [ 1, 0 ],
        scale: [ 1.5, 0.5 ],
        on: false
    });

    particles.createEmitter({
        frame: 'red',
        lifespan: 1000,
        speed: 400,
        quantity: 32,
        scale: { min: 0.3, max: 0 },
        on: false
    });

    particles.createEmitter({
        frame: 'stone',
        emitterAngle: { min: 240, max: 300 },
        speed: { min: 400, max: 600 },
        quantity: 16,
        lifespan: 4000,
        alpha: { min: 1, max: 0 },
        randomScale: [ 0.05, 0.4 ],
        angle: { min: 0, max: 360 },
        rotationEase: 'Back.easeOut',
        gravity: { x: 0, y: 800 },
        on: false
    });

    particles.createEmitter({
        frame: 'muzzleflash2',
        lifespan: 100,
        scale: { min: 2, max: 0 },
        angle: { min: 0, max: 180 },
        on: false
    });

    this.input.events.on('POINTER_DOWN_EVENT', function (event) {

        particles.emitAt(event.x, event.y);

    });
}
