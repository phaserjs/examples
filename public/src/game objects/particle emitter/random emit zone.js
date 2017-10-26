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
    var shapes = [];

    shapes.push(new Phaser.Geom.Circle(0, 0, 100));
    shapes.push(new Phaser.Geom.Ellipse(0, 0, 400, 100));
    shapes.push(new Phaser.Geom.Rectangle(-150, -150, 300, 300));
    shapes.push(new Phaser.Geom.Line(-150, -150, 150, 150));
    shapes.push(new Phaser.Geom.Triangle(0, -200, 200, 200, -200, 200));

    var particles = this.add.particles('flares');

    particles.createEmitter({
        frame: 'red',
        x: 400, y: 300,
        speed: 0,
        lifespan: 1000,
        quantity: 1,
        scale: { start: 0.4, end: 0 },
        blendMode: 'ADD',
        _zone: { source: shapes[0], random: true },
        zone: { source: shapes[0], edge: true, quantity: 64 }
    });
}
