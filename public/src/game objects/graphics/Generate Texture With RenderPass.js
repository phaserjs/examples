var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: {
        create: create,
        update: update
    },
    width: 800,
    height: 600
};

var images = [];
var renderPassNormal;
var renderPassLigths;
var iter = 0;
var lightPosition = {x: 0, y: 0, z: 0.08};
var starGraphics;
var normalGenerator = [
    'precision mediump float;',
    'uniform sampler2D sampler;',
    'varying vec2 v_tex_coord;',
    'varying vec3 v_color;',
    'varying float v_alpha;',
    'void main(void) {',
    '   vec4 color = texture2D(sampler, v_tex_coord);',
    '   gl_FragColor = vec4(v_tex_coord.xy, 1.0, 1.0) * color.a;',
    '}'
].join('\n');
var lightShader = [
    'precision mediump float;',
    'varying vec2 v_tex_coord;',
    'varying vec3 v_color;',
    'varying float v_alpha;',
    'uniform sampler2D sampler;',
    'uniform sampler2D u_normal_tex;',
    'uniform vec3 u_light_pos;',
    'uniform vec4 u_light_color;',
    'uniform vec4 u_ambient_color;',
    'uniform vec4 u_falloff;',
    'void main () {',
    '   vec2 uv = vec2(gl_FragCoord.x / 800.0, gl_FragCoord.y / 600.0);',
    '   vec4 color = texture2D(sampler, v_tex_coord);',
    '   vec4 normal_map = texture2D(u_normal_tex, uv);',
    '   vec3 light_dir = vec3(u_light_pos.xy - (gl_FragCoord.xy / vec2(800.0, 600.0)), u_light_pos.z);',
    '   light_dir.y = -light_dir.y;',
    '   float D = length(light_dir);',
    '   vec3 N = normalize(vec3(normal_map.rgb * 2.0 - 1.0));',
    '   vec3 L = normalize(light_dir);',
    '   vec3 diffuse = (u_light_color.rgb * u_light_color.a ) * max(dot(N, L), 0.0);',
    '   vec3 ambient = (u_ambient_color.rgb * u_ambient_color.a);',
    '   float attenuation = 1.0 / (u_falloff.x + (u_falloff.y * D) + (u_falloff.z * D * D* D * D* D * D* D * D* D * D));',
    '   vec3 intensity = ambient + diffuse * attenuation;',
    '   vec3 final_color = color.rgb * intensity;',
    '   gl_FragColor = vec4(final_color, 1.0) * color.a;',
    '}'
].join('\n');

var game = new Phaser.Game(config);

function create ()
{
    
    starGraphics = this.make.graphics({x: 0, y: 0, add: false});
    drawStar(starGraphics, 105, 105,  5, 100, 50, 0xFFFF00, 0xFF0000);
    starGraphics.generateTexture('starGraphics', 210, 210);

    renderPassNormal = this.make.renderPass(0, 0, 800, 600, 'normalGenerator', normalGenerator);
    renderPassLigths = this.add.renderPass(0, 0, 800, 600, 'lights', lightShader);

    for (var i = 0; i < 100; i++)
    {
        var image = this.make.image({x: Math.random() * 800, y: Math.random() * 600, key: 'starGraphics', add: false});
        images.push(image);
    }
    
    renderPassLigths.setFloat4('u_light_color', 1.0, 0.5, 0.3, 1.0);
    renderPassLigths.setFloat4('u_ambient_color', 0.2, 0.2, 0.2, 1.0);
    renderPassLigths.setFloat4('u_falloff', 0.2, 3.0, 1.0, 1.0);

    renderPassLigths.setRenderTextureAt(renderPassNormal.renderTexture, 'u_normal_tex', 1);

    this.game.canvas.onmousemove = function (e) {
        lightPosition.x = e.clientX - game.canvas.offsetLeft;
        lightPosition.y = e.clientY - game.canvas.offsetTop;
    };

    this.game.canvas.onmousedown = function (e) {
        renderPassLigths.setFloat4('u_light_color', Math.random(), Math.random(), Math.random(), 1.0);
        lightPosition.z = Math.random() * 0.1;
        renderPassLigths.setFloat4('u_falloff', Math.random(), 2.0 + Math.random() * 3.0, 1.0, 1.0);
    };

}

function update ()
{
    var imageCount = images.length;

    /* Update */
    for (var i = 0; i < imageCount; ++i)
    {
        var image = images[i];

        image.x += Math.cos(iter + i) * 3;
        image.y += Math.sin(iter + i) * 3;
    }

    iter += 0.1;

    /* Render */ 
    renderPassNormal.clearColorBuffer(0, 0, 0, 0);
    for (var i = 0; i < imageCount; ++i)
    {
        renderPassNormal.render(images[i], this.cameras.main);
    }

    renderPassLigths.clearColorBuffer(0, 0, 0, 0);
    renderPassLigths.setFloat3('u_light_pos', lightPosition.x / 800, -lightPosition.y / 600 + 1, lightPosition.z);
    for (var i = 0; i < imageCount; ++i)
    {
        renderPassLigths.render(images[i], this.cameras.main);
    }

}

function drawStar (graphics, cx, cy, spikes, outerRadius, innerRadius, color, lineColor) {
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;
    graphics.lineStyle(10, lineColor, 1.0);
    graphics.fillStyle(color, 1.0);
    graphics.beginPath();
    graphics.moveTo(cx, cy - outerRadius);
    for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        graphics.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        graphics.lineTo(x, y);
        rot += step;
    }
    graphics.lineTo(cx, cy - outerRadius);
    graphics.closePath();
    graphics.fillPath();
    graphics.strokePath();
}
