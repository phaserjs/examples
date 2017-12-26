var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var graphics;
var mesh;
var blurPassH;
var blurPassV;
var basePass;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('space', 'assets/skies/space3.png');
    this.load.obj('plane', 'assets/obj/plane.obj');
    this.load.obj('squirrel', 'assets/obj/squirrel.obj');
}

function create ()
{
    this.add.image(0, 0, 'space').setOrigin(0);

    basePass = this.make.renderPass({
        x: 0, 
        y: 0, 
        width: 800, 
        height: 600, 
        shaderName: 'basePassShader', 
        fragmentShader: basePassShader, 
        untextured: true,
        add: false
    });
    
    blurPassH = this.make.renderPass({
        x: 0, 
        y: 0, 
        width: 800, 
        height: 600, 
        shaderName: 'blurPassShaderH', 
        fragmentShader: blurPassShaderH, 
        untextured: false,
        add: false
    });

    blurPassV = this.make.renderPass({
        x: 0, 
        y: 0, 
        width: 800, 
        height: 600, 
        shaderName: 'blurPassShaderV', 
        fragmentShader: blurPassShaderV, 
        untextured: false,
        add: true
    });

    blurPassH.setRenderTextureAt(basePass.renderTexture, 'sampler', 0);
    blurPassV.setRenderTextureAt(blurPassH.renderTexture, 'sampler', 0);

    blurPassV.blendMode = 'ADD';

    // Play with this values to get different results
    blurPassH.setFloat('dist', 8);
    blurPassV.setFloat('dist', 8);
    blurPassH.setAlpha(0.9);
    blurPassV.setAlpha(0.9);

    graphics = this.add.graphics();
    graphics.blendMode = 'ADD';

    mesh = graphics.createMesh('squirrel', 0, 0, 10);

    mesh.setScale(10);

    // mesh.lineStyle(3, 0x00ff00, 1);
    mesh.lineStyle(1, 0xffffff, 0.1);

    mesh.setFillColor(0x440e62);
}

function update ()
{
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    graphics.clear();
    graphics.fillMesh(mesh);
    // graphics.strokeMesh(mesh);

    basePass.clearColorBuffer(0, 0, 0, 0);
    basePass.render(graphics, this.cameras.main);

    blurPassH.clearColorBuffer(0, 0, 0, 0);
    blurPassH.renderRect(0, 0, 800, 600, this.cameras.main);

    blurPassV.clearColorBuffer(0, 0, 0, 0);
    blurPassV.renderRect(0, 0, 800, 600, this.cameras.main);

    graphics.clear();
    // graphics.fillMesh(mesh);
    graphics.strokeMesh(mesh);
}

/* Shaders */
var blurSampleCount = 3;
var basePassShader = `
// Base Pass

precision mediump float;
varying vec4 v_color;
varying float v_alpha;

void main (void) 
{
    gl_FragColor = vec4(v_color.bgr * v_alpha, v_alpha);
}

`;

var blurPassShaderH = `
// Blur Pass Horizontal

precision mediump float;
uniform sampler2D sampler;
uniform float dist;
varying vec2 v_tex_coord;
varying vec3 v_color;
varying float v_alpha;

vec4 blur()
{
    const int sample_count = ` + blurSampleCount + `;
    vec4 accum = vec4(0.0);
    vec2 resolution = vec2(800.0, 600.0);

    for (int step = -sample_count; step <= sample_count; ++step)
    {
        float offset = float(step) * dist / length(resolution);
        vec4 texel = texture2D(sampler, v_tex_coord + vec2(offset, 0.0));
        accum += texel;
    }

    return accum / float(sample_count * 2 + 1);
}

void main(void)
{
    vec4 color = blur();
    gl_FragColor = color;
}

`;

var blurPassShaderV = `
// Blur Pass Vertical

precision mediump float;
uniform sampler2D sampler;
uniform float dist;
varying vec2 v_tex_coord;
varying vec3 v_color;
varying float v_alpha;

vec4 blur()
{
    const int sample_count = ` + blurSampleCount + `;
    vec4 accum = vec4(0.0);
    vec2 resolution = vec2(800.0, 600.0);
    vec2 texcoord = gl_FragCoord.xy / resolution;

    for (int step = -sample_count; step <= sample_count; ++step)
    {
        float offset = float(step) * dist / length(resolution);
        vec4 texel = texture2D(sampler, texcoord + vec2(0.0, offset));
        accum += texel;
    }

    return accum / float(sample_count * 2 + 1);
}

void main(void)
{
    vec4 color = blur();
    gl_FragColor = color;
}

`;
