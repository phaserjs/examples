const FILTER_NAME = 'FilterWipe';

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
        color1 = texture2D(uMainSampler2, uv);
    }
    else
    {
        color0 = texture2D(uMainSampler2, uv);
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

export default {
    Controller: class ControllerWipe extends Phaser.Filters.Controller {
        constructor(camera) {
            super(camera, FILTER_NAME);
            this.progress = 0;
            this.wipeWidth = 0.1;
            this.direction = 0;
            this.axis = 0;
            this.reveal = 0;
            this.wipeTexture = null;
            this.glTexture = null;
        }
        setWipeWidth(width = 0.1) {
            this.wipeWidth = width;
            return this;
        }
        setLeftToRight() {
            this.direction = 0;
            this.axis = 0;
            return this;
        }
        setRightToLeft() {
            this.direction = 1;
            this.axis = 0;
            return this;
        }
        setTopToBottom() {
            this.direction = 1;
            this.axis = 1;
            return this;
        }
        setBottomToTop() {
            this.direction = 0;
            this.axis = 1;
            return this;
        }
        setWipeEffect() {
            this.reveal = 0;
            this.progress = 0;
            return this;
        }
        setRevealEffect() {
            this.setTexture();
            this.reveal = 1;
            this.progress = 0;
            return this;
        }
        setTexture(texture = '__DEFAULT') {
            this.wipeTexture = texture;
            var phaserTexture = this.camera.scene.sys.textures.getFrame(texture);

            if (!phaserTexture)
            {
                phaserTexture = this.camera.scene.sys.textures.getFrame('__DEFAULT');
            }

            if (phaserTexture)
            {
                this.glTexture = phaserTexture.glTexture;
            }

            return this;
        }
        setProgress(value = 0) {
            this.progress = value;
            return this;
        }
    },
    Filter: class FilterWipe extends Phaser.Renderer.WebGL.RenderNodes.BaseFilterShader {
        constructor(manager) {
            super(FILTER_NAME, manager, null, fragShader);
        }
        setupUniforms(controller, drawingContext) {
            const programManager = this.programManager;
            programManager.setUniform('uResolution', [drawingContext.width, drawingContext.height]);
            programManager.setUniform('uInput', [controller.progress, controller.wipeWidth, controller.direction, controller.axis]);
            programManager.setUniform('uReveal', controller.reveal);
            programManager.setUniform('uMainSampler2', 1);
        }
        setupTextures(controller, textures, drawingContext) {
            textures[1] = controller.glTexture;
        }
    }
};
