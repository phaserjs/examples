const FILTER_NAME = 'FilterBendWaves';

const fragShader = `
// BEND_WAVES_FS
#pragma phaserTemplate(shaderName)

precision mediump float;

uniform float     uTime;
uniform sampler2D uMainSampler;
varying vec2 outTexCoord;

void main( void )
{
    vec2 uv = outTexCoord;
    //uv.y *= -1.0;
    uv.y += (sin((uv.x + (uTime * 0.5)) * 10.0) * 0.1) + (sin((uv.x + (uTime * 0.2)) * 32.0) * 0.01);
    vec4 texColor = texture2D(uMainSampler, uv);
    gl_FragColor = texColor;
}
`;

// Boilerplate filter import object.
// Include `FilterBendWaves: BendWaves.Filter` in your game config.
// Use `camera.filters.external.add(new BendWaves.Controller(camera))`
// to add it to a camera.
export default {
    Controller: class ControllerBendWaves extends Phaser.Filters.Controller
    {
        constructor (camera)
        {
            super(camera, FILTER_NAME);

            this.time = 0;
        }
    },
    Filter: class FilterBendWaves extends Phaser.Renderer.WebGL.RenderNodes.BaseFilterShader
    {
        constructor (manager)
        {
            super(FILTER_NAME, manager, null, fragShader);
        }

        setupUniforms (controller, drawingContext)
        {
            const programManager = this.programManager;

            controller.time += 0.005;

            programManager.setUniform('uTime', controller.time);
        }
    }
};