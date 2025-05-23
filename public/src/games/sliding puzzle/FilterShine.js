const FILTER_NAME = 'FilterShine';

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

export default {
    Controller: class ControllerShine extends Phaser.Filters.Controller {
        constructor(camera) {
            super(camera, FILTER_NAME);
            this.speed = 0.5;
            this.lineWidth = 0.1;
            this.gradient = 1.0;
        }
        setSpeed(speed = 0.5) {
            this.speed = speed;
            return this;
        }
        setLineWidth(width = 0.1) {
            this.lineWidth = width;
            return this;
        }
        setGradient(gradient = 1.0) {
            this.gradient = gradient;
            return this;
        }
    },
    Filter: class FilterShine extends Phaser.Renderer.WebGL.RenderNodes.BaseFilterShader {
        constructor(manager) {
            super(FILTER_NAME, manager, null, fragShader);
        }
        setupUniforms(controller, drawingContext) {
            const programManager = this.programManager;
            programManager.setUniform('uResolution', [drawingContext.width, drawingContext.height]);
            programManager.setUniform('uTime', drawingContext.renderer.game.loop.time / 1000);
            programManager.setUniform('uSpeed', controller ? controller.speed : 0.5);
            programManager.setUniform('uLineWidth', controller ? controller.lineWidth : 0.1);
            programManager.setUniform('uGradient', controller ? controller.gradient : 1.0);
        }
    }
};
