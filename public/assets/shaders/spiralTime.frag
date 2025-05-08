// SPIRAL_HSV fragment shader
#pragma phaserTemplate(shaderName)

precision mediump float;

// Uniforms passed from Phaser
uniform float time;
uniform vec2 resolution; // MUST be set correctly from JS [width, height]

// Input texture coordinate from vertex shader (Phaser 4 standard)
varying vec2 outTexCoord;

// --- Defines ---
#define PI 3.1415926535897932384626433832795
// Aliases for convenience, matching original style
#define iTime time
#define iResolution resolution

// --- Helper Function (copied from source) ---
vec4 hsv_to_rgb(float h, float s, float v, float a)
{
    float c = v * s;
    // Normalize h to [0, 6) range for the checks below
    h = mod(h * 6.0, 6.0);
    float x = c * (1.0 - abs(mod(h, 2.0) - 1.0));
    vec4 color;

    if (0.0 <= h && h < 1.0) {
        color = vec4(c, x, 0.0, a);
    } else if (1.0 <= h && h < 2.0) {
        color = vec4(x, c, 0.0, a);
    } else if (2.0 <= h && h < 3.0) {
        color = vec4(0.0, c, x, a);
    } else if (3.0 <= h && h < 4.0) {
        color = vec4(0.0, x, c, a);
    } else if (4.0 <= h && h < 5.0) {
        color = vec4(x, 0.0, c, a);
    } else if (5.0 <= h && h < 6.0) {
        color = vec4(c, 0.0, x, a);
    } else {
        color = vec4(0.0, 0.0, 0.0, a); // Should not happen with mod
    }

    color.rgb += v - c; // Add missing brightness component

    return color;
}

// Main rendering function adapted for Phaser 4 structure
void mainImage( out vec4 fragColor, in vec2 texCoord )
{
    // --- MODIFIED COORDINATE SYSTEM ---
    // 1. Calculate UV coordinates relative to the top-center (0.5, 0.0)
    vec2 uv = texCoord - vec2(0.5, 1);

    // 2. Apply aspect ratio correction to maintain circularity
    // Avoid division by zero if resolution isn't set correctly
    if (iResolution.y > 0.0) {
      uv.x *= iResolution.x / iResolution.y;
    }

    // 3. Calculate polar coordinates (radius, angle) from the top-center origin
    float r = length(uv);
    // Use standard atan(y, x) for angle calculation. It returns [-PI, PI]
    float angle = atan(uv.y, uv.x);

    // --- Original effect logic ---
    // Modify angle based on time and radius for the spiral effect
    angle = angle - sin(iTime)*r / 200.0 + 1.0*iTime;

    // Calculate intensity (used for saturation) based on the modified angle
    float intensity = 0.5 + 0.25*sin(15.0*angle);

    // Calculate hue based on the angle.
    // Map angle from [-PI, PI] to hue [0, 1] for hsv_to_rgb.
    // (angle / (2.0 * PI)) gives [-0.5, 0.5]. Add 1.0 and take mod 1.0.
    float hue = mod((angle / (2.0 * PI)) + 1.0, 1.0);

    // Convert HSV to RGB. Use calculated hue, intensity for saturation, value=1.0, alpha=0.5
    fragColor = hsv_to_rgb(hue, intensity, 1.0, 0.5);
}

// Standard Phaser 4 main entry point
void main(void)
{
    // Call the main image generation function
    mainImage(gl_FragColor, outTexCoord);

    // Override alpha to 1.0 for standard opaque output.
    // Remove this line if you want the 0.5 alpha from hsv_to_rgb.
    gl_FragColor.a = 1.0;
}