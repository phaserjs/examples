/*
Bend Shader
===========

This shader creates a bending effect on the texture by manipulating the texture coordinates based on the height of the pixel. The bend effect is animated over time using a sine function, which creates a wave-like motion.

Import this module into your game:

`import BatchHandlerBend from './BatchHandlerBend.js';`

Add the imported render node to your game in the game config:

`renderNodes: { BatchHandlerBend: BatchHandlerBend }`

Use the render node on a game object:

`gameObject.setRenderNodeRole('BatchHandler', 'BatchHandlerBend');`
*/

const bendFragShader = `
// BEND_FS
#pragma phaserTemplate(shaderName)

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
    float height = outTexCoord.y;
    float offset = pow(height, 2.5);

    offset *= (sin(uTime * uSpeed) * uBendFactor);

    vec4 texture = texture2D(uMainSampler, fract(vec2(outTexCoord.x + offset, outTexCoord.y)));

    gl_FragColor = texture;
}
`;

export default class BatchHandlerBend extends Phaser.Renderer.WebGL.RenderNodes.BatchHandlerQuad
{
    constructor (manager, config)
    {
        config = { ...config } || {};
        config.name ??= 'BatchHandlerBend';
        config.shaderName ??= 'BEND';
        config.fragmentSource ??= bendFragShader;

        super(manager, config);

        this._bend = 0.3;
        this._speed = 0.003;

        // Prevent multi-texturing.
        this.maxTexturesPerBatch = 1;
    }

    setupUniforms (drawingContext)
    {
        super.setupUniforms(drawingContext);

        const programManager = this.programManager;

        programManager.setUniform('uTime', drawingContext.renderer.game.loop.time);
        programManager.setUniform('uSpeed', this._speed);
        programManager.setUniform('uBendFactor', this._bend);
    }
}
