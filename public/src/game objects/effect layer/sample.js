
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

var image;
var game = new Phaser.Game(config);
var layerShader = [
    'precision mediump float;',
    'varying vec2 v_tex_coord;',
    'uniform sampler2D u_sampler;',
    'const vec2 resolution = vec2(800.0, 600.0);',
    'const float amount = 50.0;',
    'void main() {',
    '    float d = 1.0 / amount;',
    '    float ar = resolution.x / resolution.y;',
    '    float u = floor(v_tex_coord.x / d) * d + cos(gl_FragCoord.x) * 0.01;',
    '    d = ar / amount;',
    '    float v = floor(v_tex_coord.y / d) * d + sin(gl_FragCoord.y) * 0.01;',
    '    gl_FragColor = texture2D(u_sampler, vec2(u, v));',
    '}'
].join('\n');

function preload ()
{
    this.load.image('einstein', 'assets/pics/ra-einstein.png');
}

function create ()
{
    image = this.add.image(400, 300, 'einstein');
    var fxLayer = this.add.effectLayer(0, 0, 800, 600, 'layerShader', layerShader);
    fxLayer.add(image);
}

function update ()
{
    image.rotation += 0.01;
}
