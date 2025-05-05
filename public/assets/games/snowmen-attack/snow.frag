//  https://www.shadertoy.com/view/XlSBz1

#pragma phaserTemplate(SnowflakeShader2) // Renamed slightly

precision highp float; // Use highp if needed

// Uniforms passed from Phaser
uniform float time;       // Phaser's time uniform
uniform vec2 resolution; // Phaser's resolution uniform (MUST set from JS)

// Input from Vertex Shader
varying vec2 outTexCoord; // Normalized coords [0,1]

// Use Phaser's 'time', keep the scaling factor from original define
#define scaledTime (time / 2.0) // Adjust divisor for speed
#define PI2 6.28318530718
#define PI 3.14159265359
// Alias for resolution to match original mainImage code style (optional)
#define iResolution resolution

// --- Helper Functions (Unchanged logic) ---
vec2 p_to_pc(vec2 p) {
    return vec2(atan(p.y, p.x), length(p));
}

vec2 pc_to_p(vec2 pc) {
    return vec2(pc.y * cos(pc.x), pc.y * sin(pc.x));
}

vec2 fieldA(vec2 pc) {
    pc.y += 0.02 * floor(cos(pc.x * 6.0) * 5.0);
    pc.y += 0.01 * floor(10.0 * cos(pc.x * 30.0));
    pc.y += 0.5 * cos(pc.y * 10.0);
    return pc;
}

vec2 fieldB(vec2 pc, float f) {
    pc.y += 0.1 * cos(pc.y * 100.0 + 10.0);
    pc.y += 0.1 * cos(pc.y * 20.0 + f);
    pc.y += 0.04 * cos(pc.y * 10.0 + 10.0);
    return pc;
}

// --- Snowflake Rendering ---
// Changed return type to float intensity (0.0 or 1.0)
float snow_flake(vec2 p, float f) {
    vec2 pc = p_to_pc(p * 10.0);
    pc = fieldA(fieldB(pc, f));
    p = pc_to_p(pc);
    float d = length(p);
    // Adjust radius (0.3 or smaller/larger) if flakes are too big/small.
    return step(d, 0.3);
}

// --- Snow Field Calculation ---
// Changed return type to float intensity
float snow(vec2 p) {
    // --- FIX: Change '-' back to '+' for downward drift ---
    // Increasing p.y before fract() makes the pattern move down visually
    p.y += 2.0 * scaledTime;

    // Wrap coordinates and center around 0.0
    p = fract(p) - 0.5;

    // Horizontal wobble
    p.x += 0.01 * cos(p.y * 3.0 + p.x * 3.0 + scaledTime * PI2);

    // Sum intensities from multiple layers
    float sum = 0.0;
    sum += 1.0 * snow_flake(p, 1.0);
    sum += 1.0 * snow_flake(p + vec2(0.2, -0.1), 4.0);
    sum += 1.0 * snow_flake(p * 2.0 + vec2(-0.4, -0.5), 5.0);
    sum += 1.0 * snow_flake(p * 1.0 + vec2(-0.2, 0.4), 9.0);
    sum += 2.0 * snow_flake(p * 1.0 + vec2(0.4, -0.4), 5.0); // Brighter layer
    sum += 1.0 * snow_flake(p * 1.0 + vec2(-1.2, 1.2), 9.0);
    sum += 1.0 * snow_flake(p * 1.0 + vec2(2.4, -1.2), 5.0);
    sum += 1.0 * snow_flake(p * 1.0 + vec2(-1.2, 1.1), 9.0);

    // Clamp the final sum to prevent intensity > 1.0
    return clamp(sum, 0.0, 1.0);
}

// Changed input signature to use normalized texCoord
void mainImage(out vec4 fragColor, in vec2 texCoord) {
    // Standard conversion from texCoord [0,1] to centered, aspect-corrected coords
    vec2 uv = texCoord - 0.5;
    if (iResolution.y > 0.0) {
        uv.x *= iResolution.x / iResolution.y;
    }
    vec2 p = uv; // Use corrected uv for snow calculation

    // Base background color
    vec3 baseColor = vec3(0.2, 0.4, 0.7);

    // Calculate intensity from different layers
    float s1 = snow(p * 2.0);
    float s2 = snow(p * 4.0 + vec2(scaledTime, 0.0)); // Add horizontal parallax drift
    float s3 = snow(p * 8.0);

    float totalIntensity = s1 * 0.3 + s2 * 0.2 + s3 * 0.1; // Adjust weights as needed

    // Combine background color and white flakes based on intensity
    vec3 finalColor = baseColor + vec3(1.0) * totalIntensity;

    fragColor = vec4(finalColor, 1.0);
}

// Standard Phaser 4 main function
void main() {
    // Call mainImage with standard Phaser 4 inputs/outputs
    mainImage(gl_FragColor, outTexCoord);
}