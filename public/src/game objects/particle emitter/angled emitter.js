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
        frame: 'blue',
        x: 200,
        y: 300,
        lifespan: 2000,
        speed: [ 400, 600 ],
        angle: 330,
        gravity: { x: 0, y: 300 },
        scale: [ 0.4, 0 ],
        quantity: 2,
        blendMode: 'ADD'
    });
}
