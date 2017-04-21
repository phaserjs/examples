
var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    state: {
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var fragSource = [
    'precision mediump float;',
    'uniform float time;',
    'const float PI = 3.1415926535897932384626433832795;',
    'mat2 rotate2d(float angle){',
    '    return mat2(cos(angle+time),0.,',
    '                sin(angle+time),0.);',
    '}',
    'float stripes(vec2 st){',
    '    st = rotate2d( PI*-0.202 ) * st*5.;',
    '    return step(.5,1.0-smoothstep(.3,1.,abs(sin(st.x*PI))));',
    '}',
    'void main(){',
    '    vec2 resolution = vec2(300.0, 100.0);',
    '    vec2 st = gl_FragCoord.xy/resolution.xy * sin(time/2.)*sin(time/2.);',
    '    st.x *= resolution.x/resolution.y;',
    '    vec3 color = vec3(stripes(st));',
    '    gl_FragColor = vec4(color, 1.0);',
    '}'
].join('\n');

var effect;
var time = 0;

function create ()
{
    effect = this.add.effectLayer(0, 0, 800, 600, 'maskEFfect', fragSource);
}

function update ()
{
    effect.setFloat('time', time);
    time += 0.005;
}
