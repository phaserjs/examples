var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var vertexShader = `
precision mediump float;

//  These are set in ModelViewProjection.mvpUpdate
uniform mat4 uProjectionMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uModelMatrix;

//  These are set in QuadShaderPipeline
attribute vec2 inPosition;

varying vec2 fragCoord;

void main () 
{
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(inPosition, 1.0, 1.0);

    fragCoord = inPosition;
}
`;

var fragmentShader = `
precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;

varying vec2 fragCoord;

void main (void)
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord / resolution.xy;

    // Time varying pixel color
    vec3 col = 0.5 + 0.5 * cos(time + uv.xyx + vec3(0,2,4));

    gl_FragColor = vec4(col, 1.0);
}
`;

var fragmentShader2 = `
precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;

varying vec2 fragCoord;

vec3 hsv2rgb (vec3 c)
{
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main (void)
{
    // vec2 gg = gl_FragCoord.xy;
    vec2 gg = fragCoord.xy;
    float bins = 10.0;
    vec2 pos = (gg / resolution.xy);

    // https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/gl_FragCoord.xhtml

    // vec2 pos = vec2(resolution.x / gl_FragCoord.x, resolution.y / gl_FragCoord.y);

    float bin = floor(pos.x * bins);

    gl_FragColor = vec4(hsv2rgb(vec3(bin/bins, 0.5, 1.0)), 1.0);
}
`;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('pic', 'assets/pics/barbarian-loading.png');
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    this.add.image(400, 300, 'pic');

    this.add.image(200, 300, 'block');

    var s = this.add.shader(100, 100, 256, 256, vertexShader, fragmentShader2);

    this.add.image(400, 300, 'block');

    var s2 = this.add.shader(300, 300, 256, 256, vertexShader, fragmentShader);

    this.add.image(600, 300, 'block');

    this.tweens.add({
        targets: s2,
        angle: 360,
        repeat: -1,
        duration: 10000
    });

    this.input.on('pointermove', function (pointer) {

        s.setPosition(pointer.x, pointer.y);

    });
}
