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
        frame: 'green',
        x: 200,
        y: 300,
        lifespan: 2000,
        radial: false,
        // speedX: { min: 100, max: 300, step: 100 },
        // angle: 40,
        quantity: 1,
        scale: 0.4,
        blendMode: 'ADD'
    });
}
