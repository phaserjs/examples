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

var image0;
var renderPassMaskGenerator;
var renderPassMaskApply;
var iter = 0;
var game = new Phaser.Game(config);

var maskGenerator = [
    'precision mediump float;',
    'uniform float time;',
    'const float PI = 3.1415926535897932384626433832795;',
    'mat2 rotate2d(float angle){',
    '    return mat2(cos(angle+time),0.,',
    '                sin(angle+time),0.);',
    '}',
    'float stripes(vec2 st){',
    '    st = rotate2d( PI*-0.202 ) * st*5.;',
    '    return step(0.5, 1.0 - smoothstep(0.3, 1.0, abs(sin(st.x * PI))));',
    '}',
    'void main(){',
    '    vec2 resolution = vec2(800.0, 600.0);',
    '    vec2 st = gl_FragCoord.xy/resolution.xy * sin(time/2.)*sin(time/2.);',
    '    st.x *= resolution.x/resolution.y;',
    '    vec3 color = vec3(stripes(st));',
    '    gl_FragColor = vec4(color, 1.0);',
    '}'
].join('\n');

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
    '   if (maskColor.r == 0.0) {',
    '     gl_FragColor = color;',
    '   } else {',
    '     gl_FragColor = color2;',
    '   }',
    '}'
].join('\n');

function preload ()
{
    this.load.image('einstein', 'assets/pics/cougar-dragonsun.png');
    this.load.image('hotshot', 'assets/pics/hotshot-chaos-in-tokyo.png');
}

var effect;
var time = 0;
var tex;

function create ()
{
    effect = this.add.effectLayer(0, 0, 800, 600, 'maskEFfect', maskGenerator);
    effect.renderOffScreen();

    renderPassMaskApply = this.add.renderPass(0, 0, 800, 600, 'maskApply', maskApply);

    image1 = this.make.image({x: 400, y: 300, key: 'einstein', add: false});

    var pic2 = this.textures.get('hotshot');

    this.game.renderer.createTexture(pic2.source[0]);

    tex = pic2.source[0].glTexture;

    // var image2 = this.make.image({x: 400, y: 300, key: 'hotshot', add: true});

    // pic2 = image2.texture;
}

function update ()
{
    effect.setFloat('time', time);
    time += 0.005;

    renderPassMaskApply.setRenderTextureAt(effect.renderTexture, 'mask', 1);
    renderPassMaskApply.setRenderTextureAt(tex, 'pic2', 2);
    renderPassMaskApply.clearColorBuffer(0, 0, 0, 0);
    renderPassMaskApply.render(image1, this.cameras.main);
}
