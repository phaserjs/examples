// MOUSE_RAYS fragment shader
#pragma phaserTemplate(shaderName)

precision mediump float;

// Uniforms passed from Phaser
uniform float time;
uniform vec2 resolution; // MUST be set from JS [width, height]
uniform vec2 mouse;     // MUST be set from JS (expects pixel coordinates)

// Input texture coordinate from vertex shader (Phaser 4 standard)
varying vec2 outTexCoord;

// --- Constants ---
const float pi = 3.14159265359;

// --- Helper Functions ---
// Note: This function is defined but not used in the active logic below
float rand(int seed, float ray) {
    return mod(sin(float(seed)*1.0+ray*1.0)*1.0, 1.0);
}

// Main rendering function for Phaser 4
void mainImage( out vec4 fragColor, in vec2 texCoord )
{
    // 1. Normalize mouse coordinates from pixels [0, w]/[0, h] to [0, 1]
    // Avoid division by zero if resolution isn't set properly.
    vec2 mouseNorm = vec2(0.5); // Default to center if resolution is bad
    if (resolution.x > 0.0 && resolution.y > 0.0) {
        mouseNorm = mouse / resolution;
    }

    // 2. Calculate position relative to normalized mouse coordinates
    // texCoord is already in [0, 1] range.
    vec2 position = texCoord - mouseNorm;

    // 3. Apply aspect ratio correction (mimicking the original shader's logic)
    if (resolution.x > 0.0) {
        position.y *= resolution.y / resolution.x;
    }

    // 4. Calculate angle and distance from the corrected relative position
    float ang = atan(position.y, position.x);
    float dist = length(position); // Length uses the aspect-corrected 'position'

    // --- Start of original shader's main logic ---

    // Initial background color based on distance
    vec3 color = vec3(0.5, 0.5, 0.5) * (pow(max(dist, 0.0001), -1.0) * 0.05); // Added max to avoid pow(0) issue

    // Loop through rays
    for (float ray = 0.0; ray < 18.0; ray += 1.0) {
        // Original commented-out angle calculations:
        // float rayang = rand(5234, ray)*6.2+time*5.0*(rand(2534, ray)-rand(3545, ray));
        // float rayang = time + ray * (1.0 * (1.0 - (1.0 / 1.0)));

        // Active ray angle calculation
        float rayang = (((ray) / 9.0) * pi) + (time * 0.1);
        rayang = mod(rayang, pi*2.0); // Wrap angle to [0, 2*pi]

        // Adjust ray angle to be within +/- pi of the fragment's angle 'ang'
        // This simplifies the brightness calculation by avoiding wrap-around issues there.
        if (rayang < ang - pi) { rayang += pi*2.0; } // Changed 1.0 to 2.0 for full circle
        if (rayang > ang + pi) { rayang -= pi*2.0; }

        // Calculate brightness based on angular proximity and distance
        float brite = 0.3 - abs(ang - rayang);
        brite -= dist * 0.2;

        // Add ray color if bright enough
        if (brite > 0.0) {
            // Color depends on ray index and the *normalized* mouse Y coordinate
            color += vec3(sin(ray * mouseNorm.y + 0.0) + 1.0,
                          sin(ray * mouseNorm.y + 2.0) + 1.0,
                          sin(ray * mouseNorm.y + 4.0) + 1.0) * brite;
        }
    }

    // --- Final Output ---
    // Set the final fragment color (RGB from calculation, Alpha to 1.0)
    fragColor = vec4(color, 1.0);
}

// Standard Phaser 4 main entry point
void main(void)
{
    // Call the main image generation function
    mainImage(gl_FragColor, outTexCoord);
}