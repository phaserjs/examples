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

    this.load.path = 'assets/atlas/';

    //  The megaset is a multi-part texture atlas, split over 4 PNGs and 4 JSON files
    //  called megaset-0.png to megaset-3.png, and megaset-0.json to megaset-3.json
    //  
    //  The following will automatically load those, based on the key given.
    //  The number means load 0,1,2 and 3 files.

    this.load.multiatlas('megaset', 3, '-');
}

function create ()
{
    //  This frame is in the 1st atlas file (set0/data0)
    // var t1 = this.add.image(0, 0, 'megaset', 'snake');

    //  This frame is in the 2nd atlas file (set1/data1)
    // var t2 = this.add.image(0, 100, 'megaset', 'nanoha-taiken-pink');

    //  This frame is in the 3rd atlas file (set2/data2)
    // this.add.image(0, 0, 'megaset', 'hello'); // trimmed
    // var t3 = this.add.image(300, 130, 'megaset', 'bunny'); // un-trimmed

    //  This frame is in the 4th atlas file (set3/data3)
    // var t4 = this.add.image(64, 300, 'megaset', 'contra3');


    //  The key of the texture all emitters bound to this Particle Manager can use
    //  Need to specify a frame in case this is a multi-atlas texture

    // var particles = this.add.particles('spark');
    // var emitter = particles.createEmitter();
    // emitter.setPosition(400, 300);
    // emitter.setSpeed(200);


    // var particles = this.add.particles('veg', 8);
    // var emitter = particles.createEmitter();
    // emitter.setFrame([10,11,12,13,14,19]);
    // emitter.setPosition(400, 300);
    // emitter.setSpeed(200);
    // emitter.setFrequency(100);


    // emitter.setFrame(['blue_ball', 'chunk', 'aqua_ball', 'gem']);

    var particles = this.add.particles('megaset');
    var emitter = particles.createEmitter();
    // emitter.setFrame('blue_ball');
    emitter.setFrame('gem');
    emitter.setPosition(400, 300);
    emitter.setSpeed(200);
    emitter.setFrequency(10);
    emitter.setParticleAngle(0, 360);
    // emitter.setAlpha(1, 0);
    emitter.setLifespan(3000);
    emitter.setRotationEase('Back.easeInOut');
    emitter.setScale(0.5, 1);
    // emitter.setAlphaEase('Back.easeInOut');

    // var emitter2 = particles.createEmitter();
    // emitter2.setFrame('gem');
    // emitter2.setPosition(400, 300);
    // emitter2.setSpeed(200);
    // emitter2.setFrequency(300);

    // var emitter3 = particles.createEmitter();
    // emitter3.setFrame('blue_ball');
    // emitter3.setPosition(400, 300);
    // emitter3.setSpeed(300);


    // console.log(particles.texture);

    // var t = particles.texture;

    // console.log(t.getFrameNames());

    // console.log(t1.texture.getFramesFromTextureSource(t4.frame.sourceIndex));

    // console.log(t1.texture.getFramesFromTextureSource(0));
    // console.log(t1.texture.getFramesFromTextureSource(1));







    // var emitter = particles.createEmitter();
    // emitter.setPosition(400, 300);
    // emitter.setRadial(false);
    // emitter.setSpeed(-200, 200, -200, -200);


    // emitter.setAngle(270);

    // emitter.setGravity(0, 400);
    // emitter.setLifespan(2000, 4000);

    // console.log(emitter);

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
