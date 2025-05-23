// #module
// FilterSwirl for Phaser 4 RenderNodes (object export with Controller and Filter, like FilterScanline)

const FILTER_NAME = 'FilterSwirl';

const fragShader = `
#define SHADER_NAME SWIRL_FS

precision mediump float;

uniform sampler2D uMainSampler;
uniform vec2 uResolution;
uniform vec2 uCoords;
uniform float uRadius;
uniform float uStrength;

varying vec2 outTexCoord;

#define PI 3.14159

void main ()
{
    float effectAngle = uStrength * PI;

    vec2 uv = outTexCoord - uCoords;

    float len = length(uv * vec2(uResolution.x / uResolution.y, 1.0));
    float angle = atan(uv.y, uv.x) + effectAngle * smoothstep(uRadius, 0.0, len);
    float radius = length(uv);

    gl_FragColor = texture2D(uMainSampler, vec2(radius * cos(angle), radius * sin(angle)) + uCoords);
}
`;

class SwirlFilter extends Phaser.Renderer.WebGL.RenderNodes.BaseFilterShader {
    constructor (manager) {
        super(FILTER_NAME, manager, null, fragShader);
    }

    setupUniforms (controller, drawingContext) {
        const programManager = this.programManager;

        programManager.setUniform('uResolution', [drawingContext.width, drawingContext.height]);
        programManager.setUniform('uCoords', [controller.x, controller.y]);
        programManager.setUniform('uRadius', controller.radius);
        programManager.setUniform('uStrength', controller.strength);
    }
}

class SwirlController extends Phaser.Filters.Controller {
    constructor (camera) {
        super(camera, FILTER_NAME);

        this.x = 0.5;
        this.y = 0.5;
        this.radius = 0.25;
        this.strength = 1;
    }
}

export default {
    Controller: SwirlController,
    Filter: SwirlFilter
};
