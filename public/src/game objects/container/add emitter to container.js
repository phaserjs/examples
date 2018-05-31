var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#010101',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('lemming', 'assets/sprites/lemming.png');
}

function create ()
{
    //  Our container
    var container = this.add.container(200, 300);

    var particles = this.add.particles('flares');

    var emitter = particles.createEmitter({
        frame: 'blue',
        x: 0,
        y: 0,
        lifespan: 2000,
        speed: { min: 400, max: 600 },
        angle: 330,
        gravityY: 300,
        scale: { start: 0.4, end: 0 },
        quantity: 2,
        blendMode: 'ADD'
    });

    //  Add some sprites - positions are relative to the Container x/y
    container.add(particles);

    //  You could also pass them in as an array, to save doing them one by one

    /*
    this.tweens.add({
        targets: container,
        angle: 360,
        duration: 6000,
        yoyo: true,
        repeat: -1
    });
    */
}
