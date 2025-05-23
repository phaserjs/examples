const FILTER_NAME = 'FilterHannaE';

const fragShader = `
// Love u Hanna E
#pragma phaserTemplate(shaderName)

precision mediump float;

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float snoise(vec3 uv, float res) {
    const vec3 s = vec3(1e0, 1e2, 1e3);

    uv *= res;

    vec3 uv0 = floor(mod(uv, res)) * s;
    vec3 uv1 = floor(mod(uv + vec3(1.0), res)) * s;

    vec3 f = smoothstep(0.0, 1.0, fract(uv));

    vec4 v = vec4(uv0.x + uv0.y + uv0.z,
                  uv1.x + uv0.y + uv0.z,
                  uv0.x + uv1.y + uv0.z,
                  uv1.x + uv1.y + uv0.z);

    vec4 r = fract(sin(v * 1e-1) * 1e3);
    float r0 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);

    r = fract(sin((v + uv1.z - uv0.z) * 1e-1) * 1e3);
    float r1 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);

    return mix(r0, r1, f.z) * 2.0 - 1.0;
}

void main() {
    vec2 p = -0.5 + gl_FragCoord.xy / resolution.xy;
    p.x *= resolution.x / resolution.y;
    float lp = .02/length(p);
    float ap = atan(p.x, p.y);

    float t = time*.04 - pow(time, .8) * (1. + .1*cos(time*0.04)) * 2.;

    float r1 = 0.2;
    if(lp <= r1){
        ap -= t*0.1 + lp*9.;
        lp = sqrt(1. - lp / r1) * 0.5;
    } else {
        ap += t*0.1 + lp*2.;
        lp -= r1;
    }

    lp = pow(lp * lp, 1./3.);
    p = lp * vec2(sin(ap), cos(ap));

    float color = 5.0 - (6.0 * lp);

    vec3 coord = vec3(atan(p.x, p.y) / 6.2832 + 0.5, 0.4 * lp, 0.5);

    float power = 2.0;
    for (int i = 0; i < 6; i++) {
        power *= 2.0;
        color += (1.5 / power) * snoise(coord + vec3(0.0, -0.05 * t * 2.0, 0.01 * t * 2.0), 16.0 * power);
    }

    color = max(color, 0.0);
    float c2 = color * color;
    float c3 = color * c2;
    vec3 fc = vec3(color * 0.34, c2 * 0.15, c3 * 0.85);
    float f = fract(t);
    
    gl_FragColor = vec4(length(fc) * vec3(1.0, 0.2, 0.0) * 0.04, 1.0);
}
`;

export default {
    Controller: class ControllerHannaE extends Phaser.Filters.Controller {
        constructor(camera) {
            super(camera, FILTER_NAME);
        }

        update () {
            const pointer = this.camera.scene.input.activePointer;
            this.mouseX = pointer.x;
            this.mouseY = pointer.y;
        }
    },

    Filter: class FilterHannaE extends Phaser.Renderer.WebGL.RenderNodes.BaseFilterShader {
        constructor(manager) {
            super(FILTER_NAME, manager, null, fragShader);
        }

        setupUniforms(controller, drawingContext) {
            const pm = this.programManager;
            pm.setUniform('time', drawingContext.renderer.game.loop.time / 1000);
            pm.setUniform('resolution', [ drawingContext.width, drawingContext.height ]);

            const mx = controller.mouseX || 0;
            const my = controller.mouseY || 0;
            pm.setUniform('mouse', [ mx, my ]);
        }
    }
};
