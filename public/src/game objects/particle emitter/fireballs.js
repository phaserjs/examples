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
        frame: 'yellow',
        radial: false,
        x: 200,
        y: { min: 100, max: 500, steps: 128 },
        lifespan: 2000,
        speedX: { min: 200, max: 400 },
        quantity: 4,
        scale: [ 0.6, 0 ],
        scaleEase: 'Power3',
        blendMode: 'ADD'
    });
}
