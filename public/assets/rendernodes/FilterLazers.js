const FILTER_NAME = 'FilterLazers';

const fragShader = `
// LAZERS_FS
#pragma phaserTemplate(shaderName)

precision mediump float;

uniform sampler2D uMainSampler;
uniform float uTime;
uniform vec2 uResolution;

varying vec2 outTexCoord;

#define PI 0.01

void main()
{
    vec2 p = (gl_FragCoord.xy / uResolution.xy) - 0.5;
    float sx = 0.2 * sin(25.0 * p.y - uTime);
    float dy = 2.9 / (20.0 * abs(p.y - sx));
    vec4 pixel = texture2D(uMainSampler, outTexCoord);

    gl_FragColor = pixel * vec4((p.x + 0.5) * dy, 0.5 * dy, dy - 1.65, pixel.a);
}
`;

// Boilerplate filter import object.
// Include `FilterLazers: Lazers.Filter` in your game config.
// Use `camera.filters.external.add(new Lazers.Controller(camera))`
// to add it to a camera.
export default {
    Controller: class ControllerLazers extends Phaser.Filters.Controller
    {
        constructor (camera)
        {
            super(camera, FILTER_NAME);
        }
    },
    Filter: class FilterLazers extends Phaser.Renderer.WebGL.RenderNodes.BaseFilterShader
    {
        constructor (manager)
        {
            super(FILTER_NAME, manager, null, fragShader);
        }
    
        setupUniforms (controller, drawingContext)
        {
            const programManager = this.programManager;
    
            programManager.setUniform('uResolution', [ drawingContext.width, drawingContext.height ]);
            programManager.setUniform('uTime', drawingContext.renderer.game.loop.time / 1000);
        }
    }
};
