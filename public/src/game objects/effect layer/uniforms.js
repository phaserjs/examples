
var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var artsyEffect;
var time = 0;
var mouse = {x: 0, y: 0};
var game = new Phaser.Game(config);

var fragSource = [
    'precision mediump float;',
    'varying vec2 v_tex_coord;',
    'uniform sampler2D u_sampler;',
    'uniform float u_time;',
    'uniform vec2 u_mouse;',

    'void main(void) {',
    '   float dist = length(gl_FragCoord.xy - u_mouse);',
    '   float dist0 = dist * 0.0008;',
    '   float u = v_tex_coord.x + cos(gl_FragCoord.y * 0.01 - u_time - dist * 0.3) * 0.002;',
    '   float v = v_tex_coord.y + sin(gl_FragCoord.x * 0.01 - u_time - dist * 0.3) * 0.002;',
    '   gl_FragColor = texture2D(u_sampler, vec2(u, v)) + vec4(0.0, 0.0, dist0, 0.0);',
    
    '}'
].join('\n');

function preload ()
{
    this.load.image('myImage', 'assets/sprites/phaser1.png');
}

function create ()
{
    artsyEffect = this.add.effectLayer(
                            // This represents the position
            0, 0, 800, 600, // and size of the render target.

            'artsyEffect',  // We require this key name so
                            // we can cache the shader.

            fragSource      // The GLSL fragment shader source
        );
    
    for (var i = 0; i < 1000; ++i)
    {
        // We create our game object as usual
        var image = this.add.image(Math.random() * 800, Math.random() * 600, 'myImage');

        // Finally we add our image to the artsyEffect layer
        artsyEffect.add(image);
    }


    game.canvas.onmousemove = onMouseMove;
}

function update()
{
    artsyEffect.setFloat('u_time', time);
    artsyEffect.setFloat2('u_mouse', mouse.x, 600 - mouse.y);

    time += 0.1;
}

function onMouseMove(evt) {
    mouse.x = evt.clientX;
    mouse.y = evt.clientY;
}