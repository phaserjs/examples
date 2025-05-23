const FILTER_NAME = 'FilterHueRotate';

const fragShader = `
// HUE_ROTATE_FS
#pragma phaserTemplate(shaderName)

precision mediump float;

uniform sampler2D uMainSampler;
uniform float uTime;
uniform float uSpeed;

varying vec2 outTexCoord;

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

// Boilerplate filter import object.
// Include `FilterHueRotate: HueRotate.Filter` in your game config.
// Use `camera.filters.external.add(new HueRotate.Controller(camera))`
// to add it to a camera.
export default {
    Controller: class ControllerHueRotate extends Phaser.Filters.Controller
    {
        constructor (camera)
        {
            super(camera, FILTER_NAME);

            this.speed = 1;
        }
    },
    Filter: class FilterHueRotate extends Phaser.Renderer.WebGL.RenderNodes.BaseFilterShader
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
            programManager.setUniform('uSpeed', controller.speed);
        }
    }
};