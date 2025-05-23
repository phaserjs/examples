// GOO fragment shader
#pragma phaserTemplate(shaderName)

precision mediump float;

// Uniforms passed from Phaser
uniform float time;

// Input texture coordinate from vertex shader (Phaser 4 standard)
varying vec2 outTexCoord; // Provides normalized [0,1] coordinates

// --- Helper Function (copied from original) ---
// GooFunc - now with technical parameters for you to play with :)
float GooFunc(vec2 uv,float zoom,float distortion, float gooeyness,float wibble)
{
    float s = sin(time*0.1);
    float s2 = 0.5+sin(time*1.8);
    vec2 d = uv*(distortion+s*0.3); // Use 0.3 instead of .3
    d.x += time*0.25+sin(d.x+d.y + time*0.3)*wibble; // Use 0.3
    d.y += time*0.25+sin(d.x + time*0.3)*wibble; // Use 0.3
    float v1=length(0.5-fract(d.xy))+gooeyness;
    d = (1.0-zoom)*0.5+(uv*zoom);                   // try removing this :)
    float v2=length(0.5-fract(d.xy));
    v1 *= 1.0-v2*v1;
    v1 = v1*v1*v1;
    v1 *= 1.9+s2*0.2;
    return v1;
}

// Main rendering function adapted for Phaser 4 structure
// Input is 'texCoord' (normalized 0-1)
void mainImage(out vec4 fragColor, in vec2 texCoord)
{
    // Use the normalized texCoord directly as uv
    vec2 uv = texCoord;

    // --- Core logic from the original mainImage ---
    float distortion = 5.0;                     // increase or decrease to suit your taste.
    float zoom = 0.6;                           // zoom value
    float gooeyness = 0.90;                     // smaller = more gooey bits
    float wibble = 0.5;                         // tweak the wibble!
    float goo = GooFunc(uv, zoom, distortion, gooeyness,wibble);

    const vec4 col1 = vec4(0.0, 0.1, 0.1, 1.0); // Use 0.1 instead of .1
    const vec4 col2 = vec4(0.5, 0.9, 0.3, 1.0); // Use 0.9, 0.3
    float saturation = 2.4;

    // Calculate initial color based on goo value
    vec4 tempColor = mix(col2,col1,goo)*saturation;

    // Calculate average brightness (using max component)
    float avg = max(max(tempColor.r,tempColor.g),tempColor.b);
    float finalAlpha = 1.0; // Default alpha is opaque

    // Apply darkening and alpha fade near the edges of the goo
    if (avg<=0.4)
    {
        // Clamp avg for calculations
        avg = clamp(avg,0.0,1.0);
        // Darken the RGB color based on avg
        tempColor.rgb *= avg + 0.0; // (0.0 = black edges)
        // Calculate alpha based on avg, making edges transparent
        finalAlpha = clamp((avg*avg)*15.5,0.0,1.0);
    }

    // Assign the final calculated RGB and Alpha to the output
    fragColor = vec4(tempColor.rgb, finalAlpha);
}

// Standard Phaser 4 main entry point
void main(void)
{
    // Call the main image generation function
    mainImage(gl_FragColor, outTexCoord);
}