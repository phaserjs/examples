
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
var phasers = [];
var phasersV = [
    {x: -10 + Math.random() * 20, y: -10 + Math.random() * 20},
    {x: -10 + Math.random() * 20, y: -10 + Math.random() * 20},
    {x: -10 + Math.random() * 20, y: -10 + Math.random() * 20},
    {x: -10 + Math.random() * 20, y: -10 + Math.random() * 20}
];
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
    this.load.image('phaser1', 'assets/sprites/phaser1.png');
}

function create ()
{
    var fxLayer;
    phasers.push(this.add.image(400, 300, 'phaser1'));
    phasers.push(this.add.image(400, 300, 'phaser1'));
    fxLayer = this.add.effectLayer(0, 0, 800, 600, 'layerShader', layerShader);
    phasers.push(this.add.image(400, 300, 'phaser1'));
    phasers.push(this.add.image(400, 300, 'phaser1'));

    image = this.add.image(400, 300, 'einstein');
    fxLayer.add(image);
}

function update ()
{
    image.rotation += 0.01;

    for (var i = 0; i < phasersV.length; ++i) 
    {
        var phaser = phasers[i];
        var vel = phasersV[i];
        phaser.x += vel.x;
        phaser.y += vel.y;

        if (phaser.x > 800)
        {
            vel.x *= -1;
            phaser.x = 800;
        }
        else if (phaser.x < 0)
        {
            vel.x *= -1;
            phaser.x = 0;
        }
        if (phaser.y > 600)
        {
            vel.y *= -1;
            phaser.y = 600;
        }
        else if (phaser.y < 0)
        {
            vel.y *= -1;
            phaser.y = 0;
        }
    }

}
