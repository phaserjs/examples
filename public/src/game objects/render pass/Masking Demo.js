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

var image0;
var renderPassMaskGenerator;
var renderPassMaskApply;
var iter = 0;
var game = new Phaser.Game(config);

var maskGenerator = [
    'precision mediump float;',
    'uniform sampler2D sampler;',
    'varying vec2 v_tex_coord;',
    'varying vec3 v_color;',
    'varying float v_alpha;',
    'void main(void) {',
    '   vec4 color = texture2D(sampler, v_tex_coord);',
    '   float mask = color.a > 0.2 ? 1.0 : 0.0;',
    '   gl_FragColor = vec4(mask);',
    '}'
].join('\n');

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
    '   gl_FragColor = color * maskColor;',
    '}'
].join('\n');

function preload ()
{
    this.load.image('einstein', 'assets/pics/ra-einstein.png');
    this.load.image('phaser', 'assets/sprites/phaser1.png');
}

function create ()
{
    renderPassMaskGenerator = this.make.renderPass(0, 0, 800, 600, 'maskGenerator', maskGenerator);
    renderPassMaskApply = this.add.renderPass(0, 0, 800, 600, 'maskApply', maskApply);
    image0 = this.make.image({x: 400, y: 300, key: 'phaser', add: false});
    image1 = this.make.image({x: 400, y: 300, key: 'einstein', add: false});

}

function update ()
{
    var radius = 300 * Math.sin(iter);
    renderPassMaskGenerator.clearColorBuffer(0, 0, 0, 0);
    for (var i = 0; i < 100; i++)
    {
        image0.x = 400 + Math.cos(iter + i) * (radius + Math.sin(i));
        image0.y = 300 + Math.sin(iter + i) * (radius + Math.cos(i));
        renderPassMaskGenerator.render(image0, this.cameras.main);
    }
    image0.x = 400;
    image0.y = 300;
    renderPassMaskGenerator.render(image0, this.cameras.main);
    renderPassMaskApply.setRenderTextureAt(renderPassMaskGenerator.passRenderTexture, 'mask', 1);
    renderPassMaskApply.clearColorBuffer(0, 0, 0, 0);
    renderPassMaskApply.render(image1, this.cameras.main);

    iter += 0.01;
    image1.rotation = -iter;
    image1.scaleX = 0.5 + Math.abs(Math.sin(iter) * 1.1);
    image1.scaleY = image1.scaleX;
}