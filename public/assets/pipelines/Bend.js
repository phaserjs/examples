const bendFragShader = `
#define SHADER_NAME BEND_FS

precision mediump float;

uniform sampler2D uMainSampler;
uniform float uTime;
uniform float uSpeed;
uniform float uBendFactor;

varying vec2 outTexCoord;
varying float outTexId;
varying vec4 outTint;
varying vec2 fragCoord;

void main()
{
    float height = 1.0 - outTexCoord.y;
    float offset = pow(height, 2.5);

    offset *= (sin(uTime * uSpeed) * uBendFactor);

    vec4 texture = texture2D(uMainSampler, fract(vec2(outTexCoord.x + offset, outTexCoord.y)));

    gl_FragColor = texture;
}
`;

const bendUniforms = [
    'uProjectionMatrix',
    'uMainSampler',
    'uTime',
    'uSpeed',
    'uBendFactor'
];

export default class BendPipeline extends Phaser.Renderer.WebGL.Pipelines.SinglePipeline
{
    constructor (game)
    {
        super({
            game,
            shaders: [
                {
                    name: 'Bend',
                    fragShader: bendFragShader,
                    uniforms: bendUniforms
                }
            ]
        });

        this._bend = 0.2;
        this._speed = 2.0;
    }

    onBoot ()
    {
        // this.set1iv('uMainSampler', this.renderer.textureIndexes);
    }

    bind ()
    {
        super.bind();
    }

    onPreRender ()
    {
        // this.set1i('uMainSampler', 0);
        this.set1f('uTime', this.game.loop.time);
        this.set1f('uSpeed', this._speed);
        this.set1f('uBendFactor', this._bend);
    }

    /*
    onBind (gameObject)
    {
        super.onBind();

        const data = gameObject.pipelineData;

        if (data.effect === 0)
        {
            this.setShader(this.grayShader);

            if (data.gray && data.gray !== this.gray)
            {
                this.gray = data.gray;

                this.set1f('gray', data.gray, this.grayShader);
            }
        }
        else if (data.effect === 1)
        {
            this.setShader(this.hueShader);

            if (data.speed && data.speed !== this.speed)
            {
                this.speed = data.speed;

                this.set1f('uSpeed', data.speed, this.hueShader);
            }
        }
    }
    */

    get bend ()
    {
        return this._bend;
    }

    set bend (value)
    {
        this._bend = value;
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
