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
    this.load.image('spark', 'assets/particles/blue.png');
}

function create ()
{
    var particles = this.add.particles('spark');

    var emitter = particles.createEmitter({
        x: 400,
        y: 300,
        speed: 200,
        lifespan: { min: 1000, max: 2000 },
        blendMode: Phaser.BlendModes.ADD
    });
}
