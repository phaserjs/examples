var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var gui = null;
var emitter = null;
var move = false;
var countText = null;
var angleConfig = {
    min: 0, max: 360
};
var speedConfig = {
    min: -200, max: 200
};
var scaleConfig = {
    start: 1, end: 0, ease: 'Linear'
};
var alphaConfig = {
    start: 1, end: 0, ease: 'Linear'
};
var eases = [
    'Linear',
    'Quad.easeIn',
    'Cubic.easeIn',
    'Quart.easeIn',
    'Quint.easeIn',
    'Sine.easeIn',
    'Expo.easeIn',
    'Circ.easeIn',
    'Back.easeIn',
    'Bounce.easeIn',
    'Quad.easeOut',
    'Cubic.easeOut',
    'Quart.easeOut',
    'Quint.easeOut',
    'Sine.easeOut',
    'Expo.easeOut',
    'Circ.easeOut',
    'Back.easeOut',
    'Bounce.easeOut',
    'Quad.easeInOut',
    'Cubic.easeInOut',
    'Quart.easeInOut',
    'Quint.easeInOut',
    'Sine.easeInOut',
    'Expo.easeInOut',
    'Circ.easeInOut',
    'Back.easeInOut',
    'Bounce.easeInOut'
];
var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('spark0', 'assets/particles/blue.png');
    this.load.image('spark1', 'assets/particles/red.png');
}

function create ()
{
    gui = new dat.GUI();
    emitter = this.add.particles('spark1').createEmitter({
        x: 400,
        y: 300,
        gravityY: 300,
        speed: speedConfig,
        angle: angleConfig,
        scale: scaleConfig,
        alpha: alphaConfig,
        blendMode: 'SCREEN'
    });

    gui.add(angleConfig, 'min').name('angle min').onChange(function() { emitter.setAngle(angleConfig); });
    gui.add(angleConfig, 'max').name('angle max').onChange(function() { emitter.setAngle(angleConfig); });
    gui.add({ life: 1000 }, 'life').onChange(function(value) { emitter.setLifespan(value); });
    gui.add({ gravityX: 0 }, 'gravityX').onChange(function(value) { emitter.setGravityX(value); });
    gui.add({ gravityY: 300 }, 'gravityY').onChange(function(value) { emitter.setGravityY(value); });
    gui.add(speedConfig, 'min').name('speed min').onChange(function() { emitter.setSpeed(speedConfig); });
    gui.add(speedConfig, 'max').name('speed max').onChange(function() { emitter.setSpeed(speedConfig); });
    gui.add(scaleConfig, 'start').name('scale start').onChange(function() { emitter.setScale(scaleConfig); });
    gui.add(scaleConfig, 'end').name('scale end').onChange(function() { emitter.setScale(scaleConfig); });
    gui.add(scaleConfig, 'ease', eases).name('scale ease').onChange(function() { emitter.setScale(scaleConfig); });
    gui.add(alphaConfig, 'start').name('alpha start').onChange(function() { emitter.setAlpha(alphaConfig); });
    gui.add(alphaConfig, 'end').name('alpha end').onChange(function() { emitter.setAlpha(alphaConfig); });
    gui.add(alphaConfig, 'ease', eases).name('alpha ease').onChange(function() { emitter.setAlpha(alphaConfig); });
    gui.add(emitter, 'killAll');
    gui.add(emitter, 'pause');
    gui.add(emitter, 'resume');

    this.input.on('pointermove', function (pointer) {
        if (move)
        {
            emitter.setPosition(pointer.x, pointer.y);
        }
    });

    this.input.on('pointerdown', function (pointer) {
        emitter.setPosition(pointer.x, pointer.y);
        move = true;
    });
    this.input.on('pointerup', function (pointer) {
        move = false;
    });

    countText = this.add.text(0, 0, 'Alive Particles');
}

function update ()
{
    countText.setText('Alive Particles: ' + emitter.getAliveParticleCount());
}
