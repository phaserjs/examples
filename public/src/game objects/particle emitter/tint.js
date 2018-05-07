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
        frame: 'white',
        x: 400,
        y: 300,
        speed: 100,
        tint: { start: 0xff0000, end: 0xff0000 },
        lifespan: 2000,
        frequency: 500,
        _blendMode: 'ADD'
    });
}
