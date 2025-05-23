const FILTER_NAME = 'FilterBend';

const fragShader = `
// BEND_FS
#pragma phaserTemplate(shaderName)

precision mediump float;

uniform sampler2D uMainSampler;
uniform float uTime;
uniform float uSpeed;
uniform float uBendFactor;

varying vec2 outTexCoord;

void main()
{
    float height = 1.0 - outTexCoord.y;
    float offset = pow(height, 2.5);

    offset *= (sin(uTime * uSpeed) * uBendFactor);

    vec4 texture = texture2D(uMainSampler, fract(vec2(outTexCoord.x + offset, outTexCoord.y)));

    gl_FragColor = texture;
}
`;

// Boilerplate filter import object.
// Include `FilterBend: Bend.Filter` in your game config.
// Use `camera.filters.external.add(new Bend.Controller(camera))`
// to add it to a camera.
export default {
    Controller: class ControllerBend extends Phaser.Filters.Controller
    {
        constructor (camera)
        {
            super(camera, FILTER_NAME);

            this.bend = 0.3;
            this.speed = 0.003;
        }

        setBend (value)
        {
            this.bend = value;
        }

        setSpeed (value)
        {
            this.speed = value;
        }
    },
    Filter: class FilterBend extends Phaser.Renderer.WebGL.RenderNodes.BaseFilterShader
    {
        constructor (manager)
        {
            super(FILTER_NAME, manager, null, fragShader);
        }

        setupUniforms (controller, drawingContext)
        {
            const programManager = this.programManager;

            programManager.setUniform('uTime', drawingContext.renderer.game.loop.time);
            programManager.setUniform('uSpeed', controller.speed);
            programManager.setUniform('uBendFactor', controller.bend);
        }
    }
};