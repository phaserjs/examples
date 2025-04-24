#pragma phaserTemplate(icosahedronShader) // You can rename this

precision mediump float;

// Uniforms
uniform float time;
uniform vec2 resolution; // MUST be set from JS [width, height]
uniform vec2 mouse;     // Available if set from JS, but not used in this shader's logic

// Input from Vertex Shader (Phaser 4 standard)
varying vec2 outTexCoord;

// --- Defines and Constants from original shader ---
#define FOV 90.0
// #define imod(n, m) n - (n / m * m) // imod not actually used in the provided code
#define VERTICES 12
#define FACES 20

const float iX = 0.525731112119133606;
const float iZ = 0.850650808352039932;

// --- Helper Functions from original shader ---

// Function to define icosahedron vertices
void icoVertices(out vec3 shape[VERTICES]) {
    shape[0] = vec3(-iX,  0.0,  iZ);
    shape[1] = vec3( iX,  0.0,  iZ);
    shape[2] = vec3(-iX,  0.0, -iZ);
    shape[3] = vec3( iX,  0.0, -iZ);
    shape[4] = vec3( 0.0,  iZ,  iX);
    shape[5] = vec3( 0.0,  iZ, -iX);
    shape[6] = vec3( 0.0, -iZ,  iX);
    shape[7] = vec3( 0.0, -iZ, -iX);
    shape[8] = vec3(  iZ,  iX,  0.0);
    shape[9] = vec3( -iZ,  iX,  0.0);
    shape[10]= vec3(  iZ, -iX,  0.0);
    shape[11]= vec3( -iZ, -iX,  0.0);
}

// 2D rotation matrix function
mat2 rotate(float a) {
    float c = cos(a);
    float s = sin(a);
    return mat2(c, s, -s, c);
}

// Function to calculate distance from point p to line segment ab
float line(vec2 p, vec2 a, vec2 b) {
    vec2 pa = p - a;
    vec2 ba = b - a;
    float t = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return length(pa - ba * t);
}

// Macro to simplify finding minimum distance to triangle edges
#define tri(a, b, c) min(min(min(d, line(uv, p[a], p[b])), line(uv, p[b], p[c])), line(uv, p[c], p[a]))


// Main rendering function for Phaser 4
void mainImage( out vec4 fragColor, in vec2 texCoord )
{
    // --- Variable declarations moved inside mainImage ---
    vec3 v[VERTICES]; // 3D vertex positions
    vec2 p[VERTICES]; // 2D projected positions

    // 1. Calculate UV coordinates, matching the original shader's space
    // texCoord is [0, 1]. Convert to [-1, 1] and apply aspect ratio.
    vec2 uv = (texCoord * 2.0 - 1.0);
    // Prevent division by zero
    if (resolution.y > 0.0) {
        uv.x *= resolution.x / resolution.y; // Aspect ratio correction
    }

    // --- Start of original shader's main logic ---

    uv.y += 0.08 * sin(uv.x + time); // Apply distortion

    // Apply pixelation/grid effect
    uv = floor(uv * 100.0) / 100.0;
    uv *= 3.0; // Scale up

    // Background pattern calculation
    float t = 0.001 + abs(uv.y);
    float scl = 1.0 / t;
    vec2 st = uv * scl + vec2(0.0, scl + time);

    // Setup icosahedron vertices
    icoVertices(v);

    // Project 3D vertices to 2D screen space
    for (int i = 0; i < VERTICES; i++) { // Use VERTICES define
        v[i].xz *= rotate(time * 0.5); // Rotate around Y axis
        // Simple perspective projection scaling
        float pScl = 1.0 / (1.0 + v[i].z * 0.2);
        // Unused distance calculation from original:
        // float dist = distance(v[i].xyz, vec3(0.0, 0.0, -3.0));
        p[i] = v[i].xy * pScl; // Project XY coordinates
    }

    // Calculate minimum distance to any triangle edge using the 'tri' macro
    float d = 1.0; // Initialize minimum distance to a large value
    d = min(d, tri(0,  4,  1));
    d = min(d, tri(0,  9,  4));
    d = min(d, tri(9,  5,  4));
    d = min(d, tri(4,  5,  8));
    d = min(d, tri(4,  8,  1));
    d = min(d, tri(8, 10,  1));
    d = min(d, tri(8,  3, 10));
    d = min(d, tri(5,  3,  8));
    d = min(d, tri(5,  2,  3));
    d = min(d, tri(2,  7,  3));
    d = min(d, tri(7, 10,  3));
    d = min(d, tri(7,  6, 10));
    d = min(d, tri(7, 11,  6));
    d = min(d, tri(11, 0,  6));
    d = min(d, tri(0,  1,  6));
    d = min(d, tri(6,  1, 10));
    d = min(d, tri(9,  0, 11));
    d = min(d, tri(9, 11,  2));
    d = min(d, tri(9,  2,  5));
    d = min(d, tri(7,  2, 11));

    // --- Color calculation ---
    vec3 col = vec3(0.0);

    // Background color pattern
    col += mix(vec3(0.0), 0.5 + 0.5 * cos(time + st.x + 2.0 * st.y + vec3(0.0, 1.0, 2.0)), sign(cos(st.x * 10.0)) * sign(cos(st.y * 20.0))) * t * t;

    // Fade out background based on distance to lines
    col *= smoothstep(0.0, 0.1, d);

    // Add line color, stronger closer to the lines
    col += smoothstep(0.1, 0.0, d) * (0.5 + 0.5 * cos(time + d * 20.0 + vec3(33.0, 66.0, 99.0)));

    // Add bright glow very close to the lines
    col += abs(0.01 / d);

    // Dithering effect
    // Reconstruct pixel coords approx from texCoord and resolution
    vec2 pixelCoord = texCoord * resolution;
    col += floor(uv.y - fract(dot(pixelCoord, vec2(0.5, 0.75))) * 10.0) * 0.1;

    // --- Final Output ---
    fragColor = vec4(col, 1.0); // Output final color with alpha = 1.0
}

// Standard Phaser 4 main entry point
void main(void)
{
    // Call the main image generation function
    mainImage(gl_FragColor, outTexCoord);
}