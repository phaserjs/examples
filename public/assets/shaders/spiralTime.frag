#pragma phaserTemplate(spiralHsvShader) // You can rename this

precision mediump float;

// Uniforms passed from Phaser
uniform float time;
uniform vec2 resolution; // MUST be set from JS [width, height]

// Input texture coordinate from vertex shader (Phaser 4 standard)
varying vec2 outTexCoord;

// --- Defines from original shader ---
#define iTime time
#define iResolution resolution
#define PI 3.1415926535897932384626433832795

// --- Helper Function from original shader ---
vec4 hsv_to_rgb(float h, float s, float v, float a)
{
    float c = v * s;
    h = mod((h * 6.0), 6.0);
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
        color = vec4(0.0, 0.0, 0.0, a);
    }

    color.rgb += v - c;

    return color;
}

// Main rendering function adapted for Phaser 4
void mainImage( out vec4 fragColor, in vec2 texCoord )
{
    // 1. Convert normalized texCoord [0,1] to pixel coordinates
    vec2 pixelCoord = texCoord * iResolution;

    // 2. Calculate x, y based on pixel coordinates, matching the original logic
    // Note the original's unusual y offset placing origin near top-center
    float x = pixelCoord.x - (iResolution.x / 2.0);
    float y = pixelCoord.y - iResolution.y; // Original offset

    // --- Rest of the original shader's core logic ---
    float r = length(vec2(x,y));
    float angle = atan(x,y) - sin(iTime)*r / 200.0 + 1.0*iTime;

    // Use one of the intensity calculations from the original
    float intensity = 0.5 + 0.25*sin(15.0*angle);
    //float intensity = mod(angle, (PI / 8.0)); // Alternative from original
    //float intensity = 0.5 + 0.25*sin(angle*16.0-5.0*iTime); // Alternative from original

    // Calculate final color using HSV conversion. Note: sets alpha to 0.5
    fragColor = hsv_to_rgb(angle/PI, intensity, 1.0, 0.5);
}

// Standard Phaser 4 main entry point
void main(void)
{
    // Call the main image generation function
    mainImage(gl_FragColor, outTexCoord);

    // Explicitly set alpha to 1.0, overriding the value from mainImage,
    // matching the behavior of the original outer 'main' function.
    // Remove this line if you want the alpha=0.5 set by hsv_to_rgb.
    gl_FragColor.a = 1.0;
}