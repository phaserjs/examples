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

var gfx;
var blurPassH;
var basePass;
var image;
var time = 0;
var game = new Phaser.Game(config);

function renderScene(camera)
{
    gfx.clear();
    drawStar(gfx, 100, 300, 4, 50, 50 / 2, 0x00ff00, 0xff0000, time * 0.5, 10);
    drawStar(gfx, 400, 300, 5, 100, 100 / 2, 0xffff00, 0xff0000, time, 10);
    drawStar(gfx, 700, 300, 6, 50, 50 / 2, 0x00ff00, 0xff0000, time * 0.5, 10);

    basePass.clearColorBuffer(0, 0, 0, 0);
    basePass.render(gfx, camera);

    blurPassH.clearColorBuffer(0, 0, 0, 0);
    blurPassH.renderRect(0, 0, 800, 600, camera);

    blurPassV.clearColorBuffer(0, 0, 0, 0);
    blurPassV.renderRect(0, 0, 800, 600, camera);

    gfx.clear();
    drawStar(gfx, 100, 300, 4, 50, 50 / 2, 0x00ff00, 0xff0000, time * 0.5, 2);
    drawStar(gfx, 400, 300, 5, 100, 100 / 2, 0xffff00, 0xff0000, time, 2);
    drawStar(gfx, 700, 300, 6, 50, 50 / 2, 0x00ff00, 0xff0000, time * 0.5, 2);
}

function preload ()
{
    this.load.image('einstein', 'assets/pics/ra-einstein.png');
}

function create ()
{
    var img = this.add.image(400, 300, 'einstein');
    img.setScale(1.5);
    gfx = this.add.graphics();

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

    blurPassH.blendMode = 'ADD';
    blurPassV.blendMode = 'ADD';
    basePass.blendMode = 'ADD';
    gfx.blendMode = 'ADD';

    // Play with this values to get different results
    blurPassH.setFloat('dist', 4);
    blurPassV.setFloat('dist', 4);
    blurPassH.setAlpha(0.7);
    blurPassV.setAlpha(0.7);

}

function update ()
{
    renderScene(this.cameras.main);
    
    time += 0.01;
}

function drawStar (graphics, cx, cy, spikes, outerRadius, innerRadius, color, lineColor, rotation, lineSize)
{
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    graphics.save();
    graphics.translate(cx, cy);
    graphics.rotate(rotation);
    graphics.lineStyle(lineSize, color, 1);
    graphics.fillStyle(color, 1);
    graphics.beginPath();
    graphics.moveTo(0, -outerRadius);

    for (i = 0; i < spikes; i++)
    {
        x = Math.cos(rot) * outerRadius;
        y = Math.sin(rot) * outerRadius;
        graphics.lineTo(x, y);
        rot += step;

        x = Math.cos(rot) * innerRadius;
        y = Math.sin(rot) * innerRadius;
        graphics.lineTo(x, y);
        rot += step;
    }

    graphics.lineTo(0, -outerRadius);
    graphics.closePath();
    //graphics.fillPath();
    graphics.strokePath();
    graphics.restore();
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