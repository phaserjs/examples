// YIN_YANG fragment shader
#pragma phaserTemplate(shaderName)

precision mediump float;

// Uniforms passed from Phaser
uniform float time;
uniform vec2 resolution; // Canvas/Texture size [width, height] - MUST be set from JS
// uniform vec2 mouse; // Declared in original, but not used. Set from JS if needed.

// Input texture coordinate from vertex shader (Phaser 4 standard)
varying vec2 outTexCoord;

// Main function for Phaser 4 shaders
void mainImage( out vec4 fragColor, in vec2 texCoord )
{
    // 1. Normalize and center coordinates, correct for aspect ratio
    vec2 uv = texCoord - 0.5; // Center origin: uv range is [-0.5, 0.5]
    if (resolution.y > 0.0) {
        uv.x *= resolution.x / resolution.y; // Correct aspect ratio
    }

    float intensity = 0.0; // Initialize intensity

    // Loop to generate the points/rays of the effect
    for (float i = 0.0; i < 54.0; i++)
    {
        float angle = i / 27.0 * 3.14159;
        vec2 pointOffset = vec2(0.27 * cos(angle), 0.27 * sin(angle));
        vec2 relativePos = uv - pointOffset;
        float dist = length(relativePos);
        float timeModulation = 1.0 + 0.275 * fract(-i / 27.0 - time);
        float exponent = (0.77 - dist * 1.9) * timeModulation;
        intensity += pow(1000000.0, exponent) / 80000.0;
    }

    // Calculate potential color values based on intensity
    vec3 potential_color = intensity * vec3(0.0777, 0.196, 0.27);

    // Clamp the color channels to the [0, 1] range for final color output
    vec3 final_color = clamp(potential_color, vec3(0.0), vec3(1.0));

    // --- MODIFICATION START ---
    // Calculate alpha based on the intensity.
    // We use the blue channel's scaling factor (0.27) as it's the largest,
    // meaning intensity needs to be high enough to saturate blue before alpha reaches 1.
    // Clamp the result to ensure alpha stays within [0, 1].
    float final_alpha = clamp(intensity * 0.27, 0.0, 1.0);
    // Alternative: use the length/brightness of the potential color before clamping:
    // float final_alpha = clamp(length(potential_color), 0.0, 1.0);
    // Choose the one that looks best for your effect. The first option (intensity * 0.27)
    // is likely closer to the original intent where intensity drives visibility.
    // --- MODIFICATION END ---


    // Set the final fragment color, using the calculated alpha
    fragColor = vec4(final_color, final_alpha);
}

// Standard Phaser 4 main entry point
void main(void)
{
    // Call the main image generation function using standard Phaser 4 inputs/outputs
    mainImage(gl_FragColor, outTexCoord);
}