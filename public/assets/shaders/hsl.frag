#pragma phaserTemplate(hslSwirlShader) // You can rename this

precision mediump float;

// Uniforms passed from Phaser
uniform float time;
uniform vec2 resolution; // MUST be set from JS [width, height]

// Input texture coordinate from vertex shader (Phaser 4 standard)
varying vec2 outTexCoord;

// --- Defines ---
#define PI 3.14159265358979

// --- Helper Functions (copied from original) ---

// Convert HSL colorspace to RGB.
vec3 HSLtoRGB(in vec3 c)
{
    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.,4.,2.),6.)-3.)-1.,0.,1.); // Fixed: c.x*6.0
    return c.z + c.y * (rgb - 0.5) * (1.0 - abs(2.0 * c.z - 1.0));
}

// Convert HSL to RGB with cubic smoothing
vec3 HSL2RGB_CubicSmooth(in vec3 c)
{
    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.,4.,2.),6.)-3.)-1.,0.,1.); // Fixed: c.x*6.0
    rgb = rgb*rgb*(3.0-2.0*rgb); // iq's cubic smoothing.
    return c.z + c.y * (rgb - 0.5) * (1.0 - abs(2.0 * c.z - 1.0));
}

// Main rendering function adapted for Phaser 4 structure
// Input is 'texCoord' (normalized 0-1)
void mainImage( out vec4 fragColor, in vec2 texCoord )
{
    // 1. Calculate UV coordinates, matching original's aspect-corrected [-1, 1] space
    vec2 uv = (texCoord * 2.0 - 1.0);
    // Prevent division by zero
    if (resolution.y > 0.0) {
        uv.x *= resolution.x / resolution.y; // Aspect ratio correction
    }

    // --- Core logic from the original mainImage ---
    float fAngle = time * 0.4;
    // Calculate angle (h) and length (x) in the corrected uv space
    float h = atan(uv.y, uv.x); // Use atan(y,x) for angle in [-PI, PI]
    float x = length(uv);

    // Apply swirl distortion to angle
    h = h - fAngle; // Apply base rotation

    // Calculate HSL parameters based on time, angle, distance
    float a = -(0.6 + 0.2 * sin(time * 3.1 + sin((time * 0.8 + h * 2.0) * 3.0)) * sin(time + h));
    float b = -(0.8 + 0.3 * sin(time * 1.7 + sin((time + h * 4.0))));
    float c = 1.25 + sin((time + sin((time + h) * 3.0)) * 1.3) * 0.15;

    // Calculate final Lightness (l)
    float l = a * x * x + b * x + c;

    // Convert HSL to RGB using the smooth version
    // Hue needs to be mapped from [-PI, PI] to [0, 1] for HSL functions.
    // (h / (2.0 * PI)) -> [-0.5, 0.5]. Add 1.0 -> [0.5, 1.5]. Mod 1.0 -> [0.0, 1.0) range
    float hue_norm = mod((h / (2.0 * PI)) + 1.0, 1.0);
    vec3 hsl_cubic = HSL2RGB_CubicSmooth(vec3(hue_norm, 1.0, l)); // Use normalized hue

    // Output the calculated color with default alpha = 1.0
    // The outer main function will handle making black areas transparent.
    fragColor = vec4(hsl_cubic, 1.0);
}

// Standard Phaser 4 main entry point
void main(void)
{
    // Call the main image generation function, result goes into gl_FragColor
    mainImage(gl_FragColor, outTexCoord);

    // --- Alpha handling logic from the original outer 'main' function ---
    // Check if the calculated color is black (or very close to it)
    // Use a small epsilon for floating point comparison robustness
    float epsilon = 0.001;
    if (gl_FragColor.r < epsilon && gl_FragColor.g < epsilon && gl_FragColor.b < epsilon)
    {
        // If black, set alpha to 0.0 (transparent)
        gl_FragColor.a = 0.0;
    }
    // Otherwise, the alpha remains 1.0 as set by mainImage
}