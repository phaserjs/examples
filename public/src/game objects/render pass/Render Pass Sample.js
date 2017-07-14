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

var image;
var renderPass;
var time = 0;
var game = new Phaser.Game(config);

var customPass = [
    'precision mediump float;',
    'uniform sampler2D sampler;',
    'varying vec2 v_tex_coord;',
    'varying vec3 v_color;',
    'varying float v_alpha;',
    'void main(void) {',
    '   vec4 color = texture2D(sampler, v_tex_coord);',
    '   gl_FragColor = vec4(color.r, abs(sin(gl_FragCoord.y) * 0.5), 0.0, 1.0);',
    '}'
].join('\n');

function preload ()
{
    this.load.image('einstein', 'assets/pics/ra-einstein.png');
}

function create ()
{
    renderPass = this.add.renderPass(0, 0, 800, 600, 'test', customPass);
    image = this.make.image({x: 400, y: 300, key: 'einstein', add: false});
    renderPass.render(image, this.cameras.main);
}

function update ()
{
}