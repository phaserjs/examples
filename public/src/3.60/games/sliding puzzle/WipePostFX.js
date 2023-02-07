/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2023 Photon Storm Ltd.
 */

const fragShader = `
#define SHADER_NAME WIPE_FS

precision mediump float;

uniform sampler2D uMainSampler;
uniform sampler2D uMainSampler2;
uniform vec2 uResolution;
uniform vec4 uInput;
uniform float uReveal;

void main ()
{
    vec2 uv = gl_FragCoord.xy / uResolution.xy;

    vec4 color0;
    vec4 color1;

    if (uReveal == 0.0)
    {
        color0 = texture2D(uMainSampler, uv);
        color1 = texture2D(uMainSampler2, vec2(uv.x, 1.0 - uv.y));
    }
    else
    {
        color0 = texture2D(uMainSampler2, vec2(uv.x, 1.0 - uv.y));
        color1 = texture2D(uMainSampler, uv);
    }

    float distance = uInput.x;
    float width = uInput.y;
    float direction = uInput.z;
    float axis = uv.x;

    if (uInput.w == 1.0)
    {
        axis = uv.y;
    }

    float adjust = mix(width, -width, distance);

    float value = smoothstep(distance - width, distance + width, abs(direction - axis) + adjust);

    gl_FragColor = mix(color1, color0, value);
}
`;

export default class WipePostFX extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline
{
    constructor (game)
    {
        super({
            game,
            name: 'WipePostFX',
            fragShader
        });

        this.progress = 0;
        this.wipeWidth = 0.1;
        this.direction = 0;
        this.axis = 0;
        this.reveal = 0;

        this.wipeTexture;
    }

    onBoot ()
    {
        this.setTexture();
    }

    setWipeWidth (width = 0.1)
    {
        this.wipeWidth = width;

        return this;
    }

    setLeftToRight ()
    {
        this.direction = 0;
        this.axis = 0;

        return this;
    }

    setRightToLeft ()
    {
        this.direction = 1;
        this.axis = 0;

        return this;
    }

    setTopToBottom ()
    {
        this.direction = 1;
        this.axis = 1;

        return this;
    }

    setBottomToTop ()
    {
        this.direction = 0;
        this.axis = 1;

        return this;
    }

    setWipeEffect ()
    {
        this.reveal = 0;
        this.progress = 0;

        return this;
    }

    setRevealEffect ()
    {
        this.wipeTexture = this.game.textures.getFrame('__DEFAULT').glTexture;

        this.reveal = 1;
        this.progress = 0;

        return this;
    }

    setTexture (texture = '__DEFAULT')
    {
        const phaserTexture = this.game.textures.getFrame(texture);

        if (phaserTexture)
        {
            this.wipeTexture = phaserTexture.glTexture;
        }
        else
        {
            this.wipeTexture = this.game.textures.getFrame('__DEFAULT').glTexture;
        }

        this.set1i('uMainSampler2', 1);

        return this;
    }

    setProgress (value = 0)
    {
        this.progress = value;

        return this;
    }

    onPreRender ()
    {
        this.set4f('uInput', this.progress, this.wipeWidth, this.direction, this.axis);
        this.set1f('uReveal', this.reveal);
    }

    onDraw (renderTarget)
    {
        this.set2f('uResolution', renderTarget.width, renderTarget.height);

        this.bindTexture(this.wipeTexture, 1);

        this.bindAndDraw(renderTarget);
    }
}
