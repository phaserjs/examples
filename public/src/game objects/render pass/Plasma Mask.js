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
var renderPassMaskApply;

var maskApply = [
    'precision mediump float;',
    'uniform sampler2D sampler;',
    'uniform sampler2D mask;',
    'uniform sampler2D pic2;',
    'varying vec2 v_tex_coord;',
    'varying vec3 v_color;',
    'varying float v_alpha;',
    'void main(void) {',
    '   vec2 uv = vec2(gl_FragCoord.x / 800.0, gl_FragCoord.y / 600.0);',
    '   vec4 color = texture2D(sampler, v_tex_coord);',
    '   vec4 color2 = texture2D(pic2, v_tex_coord);',
    '   vec4 maskColor = texture2D(mask, uv);',
    //'   gl_FragColor = color * maskColor;',
    '   if (maskColor.r == 0.0) {',
    '     gl_FragColor = color;',
    '   } else {',
    '     gl_FragColor = color2 * maskColor;',
    '   }',
    '}'
].join('\n');

var game = new Phaser.Game(config);

function preload ()
{
    this.load.glsl('plasma', 'assets/shaders/plasma-mask.frag');
    this.load.image('einstein', 'assets/pics/cougar-dragonsun.png');
    this.load.image('hotshot', 'assets/pics/hotshot-chaos-in-tokyo.png');
}

function create ()
{
    effect = this.add.effectLayer(0, 0, 800, 600, 'maskEFfect', this.cache.shader.get('plasma'));
    effect.renderOffScreen();

    renderPassMaskApply = this.add.renderPass(0, 0, 800, 600, 'maskApply', maskApply);

    image1 = this.make.image({x: 400, y: 300, key: 'einstein', add: false});

    var pic2 = this.textures.get('hotshot');

    this.game.renderer.createTexture(pic2.source[0]);

    tex = pic2.source[0].glTexture;
}

function update ()
{
    effect.setFloat('time', time);
    time += 0.01;

    renderPassMaskApply.setRenderTextureAt(effect.renderTexture, 'mask', 1);
    renderPassMaskApply.setRenderTextureAt(tex, 'pic2', 2);
    renderPassMaskApply.clearColorBuffer(0, 0, 0, 0);
    renderPassMaskApply.render(image1, this.cameras.main);
}
