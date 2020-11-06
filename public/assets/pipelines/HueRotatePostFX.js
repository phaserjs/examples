const vertShader = `
#define SHADER_NAME HUE_VS

precision mediump float;

uniform mat4 uProjectionMatrix;

attribute vec2 inPosition;
attribute vec2 inTexCoord;

varying vec2 outTexCoord;

void main ()
{
    gl_Position = uProjectionMatrix * vec4(inPosition, 1.0, 1.0);

    outTexCoord = inTexCoord;
}
`;

const fragShader = `
precision mediump float;

uniform sampler2D uMainSampler;
uniform float uTime;
uniform float uSpeed;

varying vec2 outTexCoord;
varying vec2 fragCoord;

void main()
{
    float c = cos(uTime * uSpeed);
    float s = sin(uTime * uSpeed);

    mat4 r = mat4(0.299, 0.587, 0.114, 0.0, 0.299, 0.587, 0.114, 0.0, 0.299, 0.587, 0.114, 0.0, 0.0,  0.0, 0.0, 1.0);
    mat4 g = mat4(0.701, -0.587, -0.114, 0.0, -0.299, 0.413, -0.114, 0.0, -0.300, -0.588, 0.886, 0.0, 0.0, 0.0, 0.0, 0.0);
    mat4 b = mat4(0.168, 0.330, -0.497, 0.0, -0.328, 0.035, 0.292, 0.0, 1.250, -1.050, -0.203, 0.0, 0.0, 0.0, 0.0, 0.0);

    mat4 hueRotation = r + g * c + b * s;

    gl_FragColor = texture2D(uMainSampler, outTexCoord) * hueRotation;
}
`;

export default class HueRotatePostFX extends Phaser.Renderer.WebGL.WebGLPipeline
{
    constructor (game)
    {
        super({
            game,
            renderTarget: 1,
            vertShader,
            fragShader,
            uniforms: [
                'uProjectionMatrix',
                'uMainSampler',
                'uTime',
                'uSpeed'
            ],
            attributes: [
                {
                    name: 'inPosition',
                    size: 2,
                    type: { enum: 0x1406, size: 4 }
                },
                {
                    name: 'inTexCoord',
                    size: 2,
                    type: { enum: 0x1406, size: 4 }
                },
            ]
        });

        this._time = 0;
        this._speed = 0.001;
    }

    onBoot ()
    {
        this.set1i('uMainSampler', 1);
    }

    onPreRender ()
    {
        this.set1f('uTime', this.game.loop.time);
        this.set1f('uSpeed', this._speed);
    }

    batchVert (x, y, u, v, unit)
    {
        var vertexViewF32 = this.vertexViewF32;

        var vertexOffset = (this.vertexCount * this.currentShader.vertexComponentCount) - 1;

        vertexViewF32[++vertexOffset] = x;
        vertexViewF32[++vertexOffset] = y;
        vertexViewF32[++vertexOffset] = u;
        vertexViewF32[++vertexOffset] = v;
        vertexViewF32[++vertexOffset] = unit;

        this.vertexCount++;
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
