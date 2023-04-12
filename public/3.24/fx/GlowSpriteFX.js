/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 */

let fragShader = `
#define SHADER_NAME GLOW_FS

precision mediump float;

uniform sampler2D uMainSampler;

varying vec2 outTexCoord;

uniform float outerStrength;
uniform float innerStrength;
uniform vec2 resolution;
uniform vec4 glowColor;
uniform bool knockout;

const float PI = 3.14159265358979323846264;

const float DIST = __DIST__;
const float SIZE = min(__SIZE__, PI * 2.0);
const float NUM = ceil(PI * 2.0 / SIZE);

const float MAX_TOTAL_ALPHA = NUM * DIST * (DIST + 1.0) / 2.0;

void main ()
{
    vec2 px = vec2(1.0 / resolution.x, 1.0 / resolution.y);

    float totalAlpha = 0.0;

    vec2 direction;
    vec2 displaced;

    for (float angle = 0.0; angle < PI * 2.0; angle += SIZE)
    {
        direction = vec2(cos(angle), sin(angle)) * px;

        for (float curDistance = 0.0; curDistance < DIST; curDistance++)
        {
            displaced = outTexCoord + direction * (curDistance + 1.0);

            totalAlpha += (DIST - curDistance) * texture2D(uMainSampler, displaced).a;
        }
    }

    vec4 curColor = texture2D(uMainSampler, outTexCoord);

    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);

    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;
    float innerGlowStrength = min(1.0, innerGlowAlpha);

    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);

    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);
    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);

    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;

    if (knockout)
    {
        float resultAlpha = outerGlowAlpha + innerGlowAlpha;
        gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else
    {
        gl_FragColor = innerColor + outerGlowColor;
    }
}
`;

export default class GlowSpriteFX extends Phaser.Renderer.WebGL.Pipelines.SpriteFXPipeline
{
    constructor (game, quality = 0.1, distance = 10)
    {
        fragShader = fragShader.replace(/__SIZE__/gi, `${(1 / quality / distance).toFixed(7)}`);
        fragShader = fragShader.replace(/__DIST__/gi, `${distance.toFixed(0)}.0`);

        super({
            game,
            fragShader
        });

        /**
         * The strength of the glow outward from the edge of the sprite.
         * @default 4
         */
        this.outerStrength = 4;

        /**
         * The strength of the glow inward from the edge of the sprite.
         * @default 0
         */
        this.innerStrength = 0;

        /**
         * Only draw the glow, not the texture itself
         * @default false
         */
        this.knockout = false;

        this.glowColor = [ 1, 1, 1, 1 ];
    }

    onPreRender ()
    {
        this.set1f('outerStrength', this.outerStrength);
        this.set1f('innerStrength', this.innerStrength);
        this.set4fv('glowColor', this.glowColor);
        this.setBoolean('knockout', this.knockout);
    }

    onDraw (target1)
    {
        this.set2f('resolution', target1.width, target1.height);

        this.drawToGame(target1);
    }

    get color ()
    {
        const color = this.glowColor;

        return (((color[0] * 255) << 16) + ((color[1] * 255) << 8) + (color[2] * 255 | 0));
    }

    set color (value)
    {
        const color = this.glowColor;

        color[0] = ((value >> 16) & 0xFF) / 255;
        color[1] = ((value >> 8) & 0xFF) / 255;
        color[2] = (value & 0xFF) / 255;
    }
}
