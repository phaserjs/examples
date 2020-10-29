const grayFragShader = `
#define SHADER_NAME GRAY_FS

precision mediump float;

uniform sampler2D uMainSampler[%count%];
uniform float gray;

varying vec2 outTexCoord;
varying float outTexId;
varying vec4 outTint;
varying vec2 fragCoord;

void main()
{
    vec4 texture;

    %forloop%

    gl_FragColor = texture;
    gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126 * gl_FragColor.r + 0.7152 * gl_FragColor.g + 0.0722 * gl_FragColor.b), gray);
}
`;

const grayUniforms = [
    'uProjectionMatrix',
    'uViewMatrix',
    'uModelMatrix',
    'uMainSampler',
    'gray'
];

const hueFragShader = `
#define SHADER_NAME HUE_FS

precision mediump float;

uniform sampler2D uMainSampler[%count%];
uniform float uTime;
uniform float uSpeed;

varying vec2 outTexCoord;
varying float outTexId;
varying vec4 outTint;
varying vec2 fragCoord;

void main()
{
    vec4 texture;

    %forloop%

    float c = cos(uTime * uSpeed);
    float s = sin(uTime * uSpeed);

    mat4 hueRotation =
        mat4(   0.299,  0.587,  0.114, 0.0,
        0.299,  0.587,  0.114, 0.0,
        0.299,  0.587,  0.114, 0.0,
        0.000,  0.000,  0.000, 1.0) +

        mat4(   0.701, -0.587, -0.114, 0.0,
        -0.299,  0.413, -0.114, 0.0,
        -0.300, -0.588,  0.886, 0.0,
        0.000,  0.000,  0.000, 0.0) * c +

        mat4(   0.168,  0.330, -0.497, 0.0,
        -0.328,  0.035,  0.292, 0.0,
        1.250, -1.050, -0.203, 0.0,
        0.000,  0.000,  0.000, 0.0) * s;

    gl_FragColor = texture * hueRotation;
}
`;

const hueUniforms = [
    'uProjectionMatrix',
    'uViewMatrix',
    'uModelMatrix',
    'uMainSampler',
    'uTime',
    'uSpeed'
];

export default class MultiColorPipeline extends Phaser.Renderer.WebGL.Pipelines.MultiPipeline
{
    constructor (game)
    {
        super({
            game,
            shaders: [
                {
                    name: 'Gray',
                    fragShader: grayFragShader,
                    uniforms: grayUniforms
                },
                {
                    name: 'HueRotate',
                    fragShader: hueFragShader,
                    uniforms: hueUniforms
                }
            ]
        });

        this._time = 0;
        this._gray = 1;
        this._speed = 0.001;
    }

    onBoot ()
    {
        this.grayShader = this.shaders[0];
        this.hueShader = this.shaders[1];
    }

    onPreRender ()
    {
        this._time = this.game.loop.time;
    }

    bind ()
    {
        super.bind(this.grayShader);

        this.set1f('gray', this._gray);
        this.set1f('uTime', this._time, this.hueShader);
        this.set1f('uSpeed', this._speed, this.hueShader);

        this.setShader(this.grayShader);
    }

    onBind (gameObject)
    {
        if (gameObject.pipelineData.effect === 0)
        {
            this.setShader(this.grayShader);
        }
        else
        {
            this.setShader(this.hueShader);
        }
    }

    get gray ()
    {
        return this._gray;
    }

    set gray (value)
    {
        this._gray = value;
    }

    get speed ()
    {
        return this._speed;
    }

    set speed (value)
    {
        this._speed = value;
    }
}
