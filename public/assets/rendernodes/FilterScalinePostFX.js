const FILTER_NAME = 'FilterScalinePostFX';

const fragShader = `
// SCALINE_FS
#pragma phaserTemplate(shaderName)

precision mediump float;

uniform float     uTime;
uniform vec2      uResolution;
uniform sampler2D uMainSampler;
uniform vec2      uMouse;
varying vec2 outTexCoord;

float noise(vec2 pos) {
    return fract(sin(dot(pos, vec2(12.9898 - uTime, 78.233 + uTime))) * 43758.5453);
}

void main( void ) {
    vec2 normalPos = outTexCoord;
    vec2 pointer = uMouse / uResolution;
    pointer.y = (1.0 - pointer.y);

    float pos = (gl_FragCoord.y / uResolution.y);
    float mouse_dist = length(vec2((pointer.x - normalPos.x) * (uResolution.x / uResolution.y), pointer.y - normalPos.y));
    float distortion = clamp(1.0 - (mouse_dist + 0.1) * 3.0, 0.0, 1.0);

    pos -= (distortion * distortion) * 0.1;

    float c = sin(pos * 400.0) * 0.4 + 0.4;
    c = pow(c, 0.2);
    c *= 0.2;

    float band_pos = fract(uTime * 0.1) * 3.0 - 1.0;
    c += clamp((1.0 - abs(band_pos - pos) * 10.0), 0.0, 1.0) * 0.1;

    c += distortion * 0.08;
    c += (noise(gl_FragCoord.xy) - 0.5) * 0.09;

    vec4 pixel = texture2D(uMainSampler, outTexCoord);
    gl_FragColor = pixel + vec4(0.0, c, 0.0, 1.0);
}
`;

export default {
    Controller: class ControllerScalinePostFX extends Phaser.Filters.Controller
    {
        constructor (camera)
        {
            super(camera, FILTER_NAME);
        }

        update ()
        {
            // Called every frame; allows us to track the mouse
            const pointer = this.camera.scene.input.activePointer;
            this.mouseX = pointer.x;
            this.mouseY = pointer.y;
        }
    },

    Filter: class FilterScalinePostFX extends Phaser.Renderer.WebGL.RenderNodes.BaseFilterShader
    {
        constructor (manager)
        {
            super(FILTER_NAME, manager, null, fragShader);
        }

        setupUniforms (controller, drawingContext)
        {
            const pm = this.programManager;
            const time = drawingContext.renderer.game.loop.time / 1000;

            pm.setUniform('uTime', time);
            pm.setUniform('uResolution', [ drawingContext.width, drawingContext.height ]);

            // Default values in case no mouse is available
            let mx = 0, my = 0;

            if (controller.mouseX !== undefined && controller.mouseY !== undefined)
            {
                mx = controller.mouseX;
                my = controller.mouseY;
            }

            pm.setUniform('uMouse', [ mx, my ]);
        }
    }
};
