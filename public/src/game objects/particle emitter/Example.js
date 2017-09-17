var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var emitter0 = null;
var emitter1 = null;
var emitter2 = null;
var move = false;
var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('image0', 'assets/particles/cloud.png');
    this.load.image('image1', 'assets/particles/bubble.png');
    this.load.image('image2', 'assets/particles/stone.png');
}

function create ()
{
    emitter0 = this.add.emitter(400, 300, 'image0');
    emitter0.reserve(1000);
    emitter0.setSpeed(20, 100);
    emitter0.setAngle(-140, -40);
    emitter0.life = 4;

    emitter1 = this.add.emitter(400, 300, 'image2');
    emitter1.reserve(1000);
    emitter1.setSpeed(100, 200);
    emitter1.setAngle(-180, -00);
    emitter1.gravityY = 300;
    emitter1.life = 2;

    emitter2 = this.add.emitter(400, 300, 'image1');
    emitter2.reserve(1000);
    emitter2.setSpeed(20, 100);
    emitter2.setAngle(-100, -80);
    emitter2.life = 2;

    this.input.events.on('MOUSE_MOVE_EVENT', function (event) {
        if (!move) return;
        emitter0.x = event.x;
        emitter0.y = event.y;
        emitter1.x = event.x;
        emitter1.y = event.y;
        emitter2.x = event.x;
        emitter2.y = event.y;
    });

    this.input.events.on('MOUSE_DOWN_EVENT', function (event) {
        move = true;
        emitter0.x = event.x;
        emitter0.y = event.y;
        emitter1.x = event.x;
        emitter1.y = event.y;
        emitter2.x = event.x;
        emitter2.y = event.y;
    });

    this.input.events.on('MOUSE_UP_EVENT', function (event) {
        move = false;
    });

}

function update ()
{
    emitter0.emitParticle();
    emitter1.emitParticle();
    emitter2.emitParticle();
}