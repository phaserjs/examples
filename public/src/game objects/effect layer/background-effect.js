
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

var effects = [];
var currentEffect = null;
var effectIndex = 0;
var time = 0;
var mouse = {x: 0, y: 0};
var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('myImage', 'assets/sprites/phaser1.png');
    this.load.glsl('shader0', 'assets/shaders/shader0.frag');
    this.load.glsl('shader1', 'assets/shaders/shader1.frag');
    this.load.glsl('shader2', 'assets/shaders/shader2.frag');
    this.load.glsl('shader3', 'assets/shaders/shader3.frag');
}

function create ()
{
    for (var i = 0; i < 5; ++i)
    {
        // We create our game object as usual
        var image = this.add.image(Math.random() * 800, Math.random() * 600, 'myImage');
    }

    var effect0 = this.add.effectLayer(0, 0, 800, 600, 'effect0', this.cache.shader.get('shader0'));
    var effect1 = this.add.effectLayer(0, 0, 800, 600, 'effect1', this.cache.shader.get('shader1'));
    var effect2 = this.add.effectLayer(0, 0, 800, 600, 'effect2', this.cache.shader.get('shader2'));
    var effect3 = this.add.effectLayer(0, 0, 800, 600, 'effect3', this.cache.shader.get('shader3'));
    

    for (var i = 0; i < 5; ++i)
    {
        // We create our game object as usual
        var image = this.add.image(Math.random() * 800, Math.random() * 600, 'myImage');
    }

    effect0.visible = true;
    effect1.visible = false;
    effect2.visible = false;
    effect3.visible = false;

    effect0.setFloat2('resolution', 800, 600);
    effect1.setFloat2('resolution', 800, 600);
    effect2.setFloat2('resolution', 800, 600);
    effect3.setFloat2('resolution', 800, 600);

    this.input.events.on('POINTER_MOVE_EVENT', function (event) {

        mouse.x = 800 / event.x;
        mouse.y = 600 / event.y;

    });

    this.input.events.on('POINTER_DOWN_EVENT', function (event) {

        if (currentEffect)
        {
            currentEffect.visible = false;
        }
        
        effectIndex = (effectIndex + 1) % effects.length;
        currentEffect = effects[effectIndex];
        currentEffect.visible = true;

    });

    currentEffect = effect0;

    effects.push(effect0, effect1, effect2, effect3);
}

function update()
{
    if (currentEffect)
    {
        currentEffect.setFloat('time', time);
        currentEffect.setFloat2('mouse', mouse.x, mouse.y);
    }

    time += 0.01;
}
