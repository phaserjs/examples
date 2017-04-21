var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var effect;
var time = 0;
var tex;
var image1;
var renderPassMaskApply;

var maskApply = [
    'precision mediump float;',
    'uniform sampler2D sampler;',
    'uniform sampler2D mask;',
    'varying vec2 v_tex_coord;',
    'varying vec3 v_color;',
    'varying float v_alpha;',
    'void main(void) {',
    '   vec2 uv = vec2(gl_FragCoord.x / 800.0, gl_FragCoord.y / 600.0);',
    '   vec4 color = texture2D(sampler, v_tex_coord);',
    '   vec4 maskColor = texture2D(mask, uv);',
    //'   if (maskColor.r == 0.0) {',
    '     gl_FragColor = color * maskColor;',
    //'   }',
    '}'
].join('\n');

var game = new Phaser.Game(config);

function preload ()
{
    this.load.glsl('ripples', 'assets/shaders/cosmic-ripples.frag');
    this.load.image('dragon', 'assets/pics/cougar-dragonsun.png');
}

function create ()
{
    effect = this.add.effectLayer(0, 0, 800, 600, 'maskEFfect', this.cache.shader.get('ripples'));
    effect.renderOffScreen();

    renderPassMaskApply = this.add.renderPass(0, 0, 800, 600, 'maskApply', maskApply);

    image1 = this.make.image({x: 400, y: 300, key: 'dragon', add: false});
}

function update ()
{
    effect.setFloat('time', time);
    time += 0.025;

    renderPassMaskApply.setRenderTextureAt(effect.renderTexture, 'mask', 1);
    renderPassMaskApply.clearColorBuffer(0, 0, 0, 0);
    renderPassMaskApply.render(image1, this.cameras.main);
}
