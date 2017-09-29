var config = {
    type: Phaser.AUTO,
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

var darkSmoke = null;
var fire = null;
var whiteSmoke = null;
var spark0 = null;
var spark1 = null;
var fadeCamera;
var flashCamera;
var shakeCamera;
var game = new Phaser.Game(config);


function preload ()
{
    this.load.image('dark-smoke', 'assets/particles/smoke-puff.png');
    this.load.image('white-smoke', 'assets/particles/smoke0.png');
    this.load.image('fire', 'assets/particles/muzzleflash3.png');
    this.load.image('spark0', 'assets/particles/blue.png');
    this.load.image('spark1', 'assets/particles/red.png');
}

function create ()
{
    this.cameras.main.setViewport(5, 5, 390, 290);
    fadeCamera = this.cameras.add(405, 5, 390, 290);
    flashCamera = this.cameras.add(5, 305, 390, 290);
    shakeCamera = this.cameras.add(405, 305, 390, 290);

    fadeCamera.fade(1000);

    spark0 = this.add.emitter(400, 300, 'spark0');
    spark0.reserve(1000);
    spark0.setSpeed(-500, 500);
    spark0.setEmitAngle(-120, -60);
    spark0.setScale(0.05, 0);
    spark0.setAlpha(1, 0);
    spark0.gravityY = 500;
    spark0.life = 1;

    spark1 = this.add.emitter(400, 300, 'spark1');
    spark1.reserve(1000);
    spark1.setSpeed(-100, 100);
    spark1.setEmitAngle(-120, -60);
    spark1.setScale(0, 0.4);
    spark1.setAlpha(1, 0);
    spark1.setAlphaEase('Expo.easeIn');
    spark1.setBlendMode(Phaser.BlendModes.SCREEN);
    spark1.gravityY = 500;
    spark1.life = 1;

    fire = this.add.emitter(400, 300, 'fire');
    fire.reserve(1000);
    fire.setSpeed(100, 200);
    fire.setAngle(0, 360);
    fire.setEmitAngle(-85, -95);
    fire.setScale(0, 1);
    fire.setAlpha(1, 0);
    fire.setScaleEase('Back.easeOut');
    fire.setRotationEase('Quart.easeOut');
    fire.setBlendMode(Phaser.BlendModes.SCREEN);
    fire.life = 1;

    whiteSmoke = this.add.emitter(400, 300, 'white-smoke');
    whiteSmoke.reserve(1000);
    whiteSmoke.setSpeed(20, 100);
    whiteSmoke.setEmitAngle(-140, -40);
    whiteSmoke.setScale(1, 0);
    whiteSmoke.setAlpha(0, 0.5);
    whiteSmoke.setAngle(0, 360);
    whiteSmoke.life = 2;
    whiteSmoke.enabled = false;

    darkSmoke = this.add.emitter(400, 300, 'dark-smoke');
    darkSmoke.reserve(1000);
    darkSmoke.setSpeed(20, 100);
    darkSmoke.setEmitAngle(-140, -40);
    darkSmoke.setScale(1, 0);
    darkSmoke.setAlpha(0, 0.1);
    darkSmoke.setAngle(0, 360);
    darkSmoke.setBlendMode(Phaser.BlendModes.ADD);
    darkSmoke.life = 2;
    darkSmoke.enabled = false;

    fire.onParticleDeath(function (particle) {
        darkSmoke.x = particle.x;
        darkSmoke.y = particle.y;
        whiteSmoke.x = particle.x;
        whiteSmoke.y = particle.y;
        darkSmoke.emitParticle();
        whiteSmoke.emitParticle();
    });

    this.input.events.on('MOUSE_MOVE_EVENT', function (event) {
        darkSmoke.x = event.x;
        darkSmoke.y = event.y;
        fire.x = event.x;
        fire.y = event.y;
    });

    this.input.events.on('MOUSE_DOWN_EVENT', function (event) {
        darkSmoke.x = event.x;
        darkSmoke.y = event.y;
        fire.x = event.x;
        fire.y = event.y;
    });
}

function update ()
{
    spark0.x = fire.x;
    spark0.y = fire.y;
    spark1.x = fire.x;
    spark1.y = fire.y;

    flashCamera.flash(1000);
    shakeCamera.shake(1000);

    if (fadeCamera._fadeAlpha >= 1.0)
    {
        fadeCamera._fadeAlpha = 0.0;
        fadeCamera.fade(1000);
    }
}