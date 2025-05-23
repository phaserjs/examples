// SPIRAL_TIME fragment shader
#pragma phaserTemplate(shaderName)

/*
 * Original shader from: https://www.shadertoy.com/view/ltdXzX
 */

#ifdef GL_ES
precision mediump float;
#endif

// glslsandbox uniforms
uniform float time;
uniform vec2 resolution;

// shadertoy globals
#define iTime time
#define iResolution resolution

// --------[ Original ShaderToy begins here ]---------- //
#define PI 3.1415926535897932384626433832795

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

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    float x = fragCoord.x - (iResolution.x / 2.0);
    float y = fragCoord.y - (iResolution.y );

    float r = length(vec2(x,y));
    float angle = atan(x,y) - sin(iTime)*r / 200.0 + 1.0*iTime;
    float intensity = 0.5 + 0.25*sin(15.0*angle);
    //float intensity = mod(angle, (PI / 8.0));
    //float intensity = 0.5 + 0.25*sin(angle*16.0-5.0*iTime);

    fragColor = hsv_to_rgb(angle/PI, intensity, 1.0, 0.5);
}
// --------[ Original ShaderToy ends here ]---------- //

void main(void)
{
    mainImage(gl_FragColor, gl_FragCoord.xy);
    gl_FragColor.a = 1.0;
}
