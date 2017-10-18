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
    this.load.spritesheet('veg', 'assets/sprites/fruitnveg64wh37.png', { frameWidth: 64, frameHeight: 64 });
}

function create ()
{
    //  The key of the texture all emitters bound to this Particle Manager can use
    var particles = this.add.particles('veg');

    //  Create an emitter
    var emitter = particles.createEmitter();

    //  This is why it was a speed value, because the emitter sets the velocity, not the particle >:(

    emitter.setPosition(400, 300);
    emitter.setAngle(135);
    emitter.setVelocity(100, 400, 0, 0);
    // emitter.setLifespan(2000, 4000);

    console.log(emitter);

    // emitter.setFrame(0).setPosition(200, 100).setEmitterDelay(100).setSpeed(-400, 400).setGravity(0, 400);

    // var emitter2 = particles.createEmitter();

    // emitter2.setFrame(1).setPosition(400, 100).setEmitterDelay(100).setSpeed(-400, 400).setGravity(0, 400);

    // var emitter3 = particles.createEmitter();

    // emitter3.setFrame(4).setPosition(600, 100).setEmitterDelay(100).setSpeed(-400, 400).setGravity(0, 400);

    /*
    emitter.createSet('vegFlow', {
        flow: true,
        frame: { min: 0, max: 37 },
        scale: { min: 0, max: 1 },
        particleAngle: { min: 0, max: 360 },
        emitAngle: 180,
        speed: { min: -400, max: 400 },
        lifespan: 4000,
        gravity: { x: 0, y: 400 }
    });

    emitter.createSet('cherryBurst', {
        explode: true,
        frame: 2,
        speed: { min: -400, max: 400 },
    });

    //  Start a flow emitter running constantly (can still modify x/y and params on the fly)
    emitter.start('vegFlow');

    //  onclick explde
    emitter.start('cherryBurst', x, y);
    */
}
