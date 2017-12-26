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
var blurPass;
var basePass;
var image;
var time = 0;
var game = new Phaser.Game(config);

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

var blurPassShader = `
// Blur Pass

precision mediump float;
uniform sampler2D sampler;
uniform float dist;
varying vec2 v_tex_coord;
varying vec3 v_color;
varying float v_alpha;

/* source: https://github.com/Jam3/glsl-fast-gaussian-blur/blob/master/13.glsl */
vec4 blur(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
    vec4 color = vec4(0.0);
    vec2 off1 = vec2(1.411764705882353) * direction;
    vec2 off2 = vec2(3.2941176470588234) * direction;
    vec2 off3 = vec2(5.176470588235294) * direction;
    color += texture2D(image, uv) * 0.1964825501511404;
    color += texture2D(image, uv + (off1 / resolution)) * 0.2969069646728344;
    color += texture2D(image, uv - (off1 / resolution)) * 0.2969069646728344;
    color += texture2D(image, uv + (off2 / resolution)) * 0.09447039785044732;
    color += texture2D(image, uv - (off2 / resolution)) * 0.09447039785044732;
    color += texture2D(image, uv + (off3 / resolution)) * 0.010381362401148057;
    color += texture2D(image, uv - (off3 / resolution)) * 0.010381362401148057;
    return color;
}

void main(void)
{
    //const float dist = 3.0;
    vec4 copyColor0 = blur(sampler, v_tex_coord, vec2(800.0, 600.0), vec2(dist, dist));
    vec4 copyColor1 = blur(sampler, v_tex_coord, vec2(800.0, 600.0), vec2(dist, -dist));
    vec4 blurMix = mix(copyColor0, copyColor1, 0.5);
    gl_FragColor = blurMix;
}

`;

function renderScene(camera)
{
    gfx.clear();
    drawStar(gfx, 100, 300, 4, 50, 50 / 2, 0x00ff00, 0xff0000, time * 0.5, 10);
    drawStar(gfx, 400, 300, 5, 100, 100 / 2, 0xffff00, 0xff0000, time, 10);
    drawStar(gfx, 700, 300, 6, 50, 50 / 2, 0x00ff00, 0xff0000, time * 0.5, 10);

    basePass.clearColorBuffer(0, 0, 0, 0);
    basePass.render(gfx, camera);


    blurPass.clearColorBuffer(0, 0, 0, 0);
    blurPass.renderRect(0, 0, 800, 600, camera);

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
    
    blurPass = this.make.renderPass({
        x: 0, 
        y: 0, 
        width: 800, 
        height: 600, 
        shaderName: 'blurPassShader', 
        fragmentShader: blurPassShader, 
        untextured: false,
        add: true
    });

    

    blurPass.setRenderTextureAt(basePass.renderTexture, 'sampler', 0);
    blurPass.blendMode = 'ADD';
    basePass.blendMode = 'ADD';

    gfx.blendMode = 'ADD';
    blurPass.setFloat('dist', 2.5);


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