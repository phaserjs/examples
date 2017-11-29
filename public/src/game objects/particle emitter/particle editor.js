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
var easing = {
    alphaEasing: 'Linear',
    scaleEasing: 'Linear',
    rotationEasing: 'Linear'
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
    emitter = this.add.emitter(400, 300, 'spark1');
    emitter.gravityY = 300;
    emitter.setSpeed(-200, 200);
    emitter.setEmitAngle(0, 360);
    emitter.setBlendMode(Phaser.BlendModes.SCREEN);

    gui.add(emitter, 'life');
    gui.add(emitter, 'minEmitAngle');
    gui.add(emitter, 'maxEmitAngle');
    gui.add(emitter, 'gravityX');
    gui.add(emitter, 'gravityY');
    gui.add(emitter, 'minSpeed');
    gui.add(emitter, 'maxSpeed');
    gui.add(emitter, 'startScale');
    gui.add(emitter, 'endScale');
    gui.add(emitter, 'startAngle');
    gui.add(emitter, 'endAngle');
    gui.add(emitter, 'startAlpha');
    gui.add(emitter, 'endAlpha');
    gui.add(easing, 'alphaEasing', eases).onChange(function (value) {
        emitter.setAlphaEase(value);
    });
    gui.add(easing, 'scaleEasing', eases).onChange(function (value) {
        emitter.setScaleEase(value);
    });;
    gui.add(easing, 'rotationEasing', eases).onChange(function (value) {
        emitter.setRotationEase(value);
    });;
    gui.add(emitter, 'killAll');
    gui.add(emitter, 'pause');
    gui.add(emitter, 'resume');

    this.input.events.on('MOUSE_MOVE_EVENT', function (event) {
        if (move)
        {
            emitter.x = event.x;
            emitter.y = event.y;
        }
    });

    this.input.events.on('MOUSE_DOWN_EVENT', function (event) {
        emitter.x = event.x;
        emitter.y = event.y;
        move = true;
    });
    this.input.events.on('MOUSE_UP_EVENT', function (event) {
        move = false;
    });

    countText = this.add.text(0, 0, 'Alive Particles');
}

function update ()
{
    countText.setText('Alive Particles: ' + emitter.getAliveParticleCount());
}
