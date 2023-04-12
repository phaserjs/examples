/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2023 Photon Storm Ltd.
 */

const fragShader = `
#define SHADER_NAME SHINE_FS

precision mediump float;

uniform sampler2D uMainSampler;
uniform vec2 uResolution;
uniform float uSpeed;
uniform float uTime;
uniform float uLineWidth;
uniform float uGradient;

varying vec2 outTexCoord;

void mainImage (out vec4 fragColor, in vec2 fragCoord)
{
	vec2 uv = fragCoord.xy / uResolution.xy;

    vec4 t1 = texture2D(uMainSampler, uv);

    vec4 col1 = vec4(0.3, 0.0, 0.0, 1.0);
    vec4 col2 = vec4(0.85, 0.85, 0.85, 1.0);

    vec2 linepos = uv;

    linepos.x = linepos.x - mod(uTime * uSpeed, 2.0) + 0.5;

    float y = linepos.x * uGradient;

    float s = smoothstep(y - uLineWidth, y, linepos.y) - smoothstep(y, y + uLineWidth, linepos.y);

    fragColor = (((s * col1) + (s * col2)) * t1) + t1;
}

void main ()
{
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

export default class ShinePostFX extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline
{
    constructor (game)
    {
        super({
            game,
            name: 'ShinePostFX',
            fragShader
        });

        this.speed = 0.5;
        this.lineWidth = 0.58;
        this.gradient = 3;
    }

    onPreRender ()
    {
        this.setTime('uTime');
        this.set1f('uSpeed', this.speed);
        this.set1f('uLineWidth', this.lineWidth);
        this.set1f('uGradient', this.gradient);
    }

    onDraw (renderTarget)
    {
        this.set2f('uResolution', renderTarget.width, renderTarget.height);

        this.bindAndDraw(renderTarget);
    }
}
