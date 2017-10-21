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

    //  Remember to set 'radial: false', otherwise the emitter will emit in all directions

    particles.createEmitter({
        frame: 'blue',
        radial: false,
        x: 64,
        y: [ 100, 500 ],
        lifespan: 2000,
        speedX: [ 200, 400 ],
        scale: [ 0.4, 0 ],
        quantity: 4,
        blendMode: 'ADD'
    });
}
