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

var vertexShader2 = `
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
    vec2 gg = fragCoord.xy;
    float bins = 10.0;
    vec2 pos = (gg / resolution.xy);

    // https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/gl_FragCoord.xhtml

    // vec2 pos = vec2(resolution.x / gl_FragCoord.x, resolution.y / gl_FragCoord.y);

    float bin = floor(pos.x * bins);

    gl_FragColor = vec4(hsv2rgb(vec3(bin / bins, 1.0, 1.0)), 1.0);
}
`;

var fragmentShader3 = `
precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;

varying vec2 fragCoord;

void main (void)
{
    float intensity = 0.;

    for (float i = 0.; i < 54.; i++)
    {
        float angle = i/27. * 3.14159;
        vec2 xy = vec2(0.27 * cos(angle), 0.27 * sin(angle));
        xy += fragCoord.xy/resolution.y-0.5;
        intensity += pow(1000000., (0.77 - length(xy) * 1.9) * (1. + 0.275 * fract(-i / 27. - time))) / 80000.;
        // intensity += pow(1000000., (0.77 - length(xy) * 1.9) * (1. + 0.275 * fract(-i / 27. ))) / 80000.;
    }

    gl_FragColor = vec4(clamp(intensity * vec3(0.0777, 0.196, 0.27), vec3(0.), vec3(1.)), 0.);
}
`;

var fragmentShader4 = `
precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;

varying vec2 fragCoord;

void main (void)
{
    float ss = 0.1;
    vec2 gg = fragCoord.xy;
    gg = ceil(gg / ss) * ss;
    
    vec2 uv =  (gg -.5 * resolution.xy) / resolution.y ;
    
    if (ss<0.0)
        uv = abs(uv);
    
    float t = time * .2;
    
    vec3 ro = vec3(0, 0, -1);
        vec3 lookat = vec3(0.0);
        float zoom = .1 + abs( sin(t))/5.;
    
        vec3 f = normalize(lookat-ro),
        r = normalize(cross(vec3(0,1,0), f)),
        u = cross(f, r),
        c = ro + f * zoom,
        i = c + uv.x * r + uv.y * u,
        rd = normalize(i-ro);
    
        float radius = mix(.3, 1.5, .5+.5);
    
        float dS, dO;
        vec3 p;
    
        for(int i=0; i<1000; i++) {
            p = ro + rd * dO;
            dS = -(length(vec2(length(p.xz)-1., p.y)) - .15);
            if(dS<.0001) break;
            dO += dS;
    }
    
    vec3 col = vec3(0);

    if(dS<.001) {
        float x = atan(p.x, p.z)+t*.5;          // -pi to pi
        float y = atan(length(p.xz)-1., p.y);
        
        float bands = sin(y*10.+x*30.);
        float ripples = sin((x*10.-y*30.)*3.)*.5+.5;
        float waves = sin(x*2.-y*6.+t*20.);
        
        float b1 = smoothstep(-.2, .2, bands);
        float b2 = smoothstep(-.2, .2, bands-.5);
        
        float m = b1*(1.-b2);
        m = max(m, ripples*b2*max(0., waves));
        m += max(0., waves*.3*b2);
        
        col += m;
    col.rb *= 2.5;
    col.z *= 2.5*abs(cos(t));   
    }
    
    gl_FragColor = vec4( col, 0.5 );
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

    var s = this.add.shader(64, 64, 128, 128, vertexShader, fragmentShader4);

    this.add.image(400, 300, 'block');

    // var s2 = this.add.shader(300, 300, 256, 256, vertexShader, fragmentShader);

    this.add.image(600, 300, 'block');

    this.tweens.add({
        targets: s,
        angle: 360,
        repeat: -1,
        duration: 10000
    });

    this.tweens.add({
        targets: s,
        scaleX: 4,
        scaleY: 4,
        repeat: -1,
        yoyo: true,
        duration: 2000
    });

    this.input.on('pointermove', function (pointer) {

        s.setPosition(pointer.x, pointer.y);

    });

    this.input.on('pointerdown', function (pointer) {

        if (s.visible)
        {
            s.setVisible(false);
        }
        else
        {
            s.setVisible(true);
        }

    });
}
