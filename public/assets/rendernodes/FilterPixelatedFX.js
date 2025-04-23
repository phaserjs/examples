const FILTER_NAME = 'FilterPixelatedFX';

const fragShader = `
// PIXELATED_FS
#pragma phaserTemplate(shaderName)

precision mediump float;

uniform sampler2D uMainSampler;
uniform vec2 uResolution;
uniform float uTime;

varying vec2 outTexCoord;
varying vec4 outTint;

void main()
{
    vec2 pixelSize = vec2(8.0, 8.0);
    vec2 dimensions = vec2(800.0, 600.0);
    vec2 size = dimensions / pixelSize;
    vec2 color = floor(outTexCoord * size) / size + pixelSize / dimensions * 0.5;

    gl_FragColor = texture2D(uMainSampler, color);
}
`;

export default {
    Controller: class ControllerPixelatedFX extends Phaser.Filters.Controller
    {
        constructor (camera)
        {
            super(camera, FILTER_NAME);
        }
    },

    Filter: class FilterPixelatedFX extends Phaser.Renderer.WebGL.RenderNodes.BaseFilterShader
    {
        constructor (manager)
        {
            super(FILTER_NAME, manager, null, fragShader);
        }

        setupUniforms (controller, drawingContext)
        {
            const pm = this.programManager;

            // Time uniform, even if not used in shader logic, is preserved for consistency
            pm.setUniform('uTime', drawingContext.renderer.game.loop.time / 1000);
            pm.setUniform('uResolution', [ drawingContext.width, drawingContext.height ]);
        }
    }
};
