// LAVA_LAMP fragment shader
#pragma phaserTemplate(shaderName)

precision mediump float;

// Uniforms needed by the shader logic
uniform float time;
uniform vec2 resolution; // IMPORTANT: Ensure this is passed from your Phaser 4 code

// Input coordinate from vertex shader (Phaser 4 standard)
varying vec2 outTexCoord;

// Noise function (copied from original)
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


// Main rendering function for Phaser 4
void mainImage( out vec4 fragColor, in vec2 texCoord )
{
    // Convert texCoord [0, 1] range to p [-0.5, 0.5] range (center origin)
    vec2 p = texCoord - 0.5;

    // Apply aspect ratio correction using the resolution uniform
    // Avoid division by zero if resolution is not set correctly
    if (resolution.y > 0.0) {
      p.x *= resolution.x / resolution.y;
    }

    // --- Start of original shader logic ---

    float lp = .02 / length(p); // Use aspect-corrected p
    float ap = atan(p.x, p.y); // Use aspect-corrected p

    // Calculate a modified time for the effect to avoid shadowing the uniform
    float effectTime = time * .04 - pow(time, .8) * (1. + .1 * cos(time * 0.04)) * 2.;

    float r1 = 0.2;
    if(lp <= r1){
        ap -= effectTime * 0.1 + lp * 9.;
        lp = sqrt(1. - lp / r1) * 0.5;
    }else{
        ap += effectTime * 0.1 + lp * 2.;
        lp -= r1;
    }

    lp = pow(lp * lp, 1./3.);

    // Convert back from polar coordinates (using modified lp and ap)
    // Note: 'p' is now redefined based on the polar manipulation
    p = lp * vec2(sin(ap), cos(ap));

    float color = 5.0 - (6.0 * lp);

    // Calculate noise coordinate
    vec3 coord = vec3(atan(p.x, p.y) / 6.2832 + 0.5, 0.4 * lp, 0.5);

    // Apply noise calculation
    float power = 2.0;
    for (int i = 0; i < 6; i++) {
        power *= 2.0;
        color += (1.5 / power) * snoise(coord + vec3(0.0, -0.05 * effectTime * 2.0, 0.01 * effectTime * 2.0), 16.0 * power);
    }
    color = max(color, 0.0);
    float c2 = color * color;
    float c3 = color * c2;
    vec3 fc = vec3(color * 0.34, c2 * 0.15, c3 * 0.85);

    // Optional original line (check if needed):
    // float f = fract(time);
    // fc *= smoothstep(f-0.1, f, length(p)) - smoothstep(f, f+0.1, length(p));

    // Calculate final color and assign to output parameter
    // Corrected vec3(1,02,0) to vec3(1.0, 2.0, 0.0) - adjust if interpretation is wrong
    fragColor = vec4(length(fc) * vec3(1.0, 2.0, 0.0) * 0.04, 1.0);

    // --- End of original shader logic ---

    // Ensure alpha is 1.0 (Phaser 4 convention)
    fragColor.a = 1.0;
}

// Standard Phaser 4 main entry point
void main(void)
{
    // Call the main image generation function
    mainImage(gl_FragColor, outTexCoord);

    // Optional final adjustments like forcing alpha can go here,
    // but mainImage already sets it in this case.
    // gl_FragColor.a = 1.0;
}