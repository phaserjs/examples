// Focalesque Blur
// Author: https://www.shadertoy.com/view/Wtj3Wz

#pragma phaserTemplate(shaderName)

precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D iChannel0;

varying vec2 fragCoord;

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    const float radius = 10.0;
    const float dimension = floor(radius * 2.0) + 1.0;
    const float numPixels = dimension * dimension;
    float offset = fract(radius * 2.0) / 2.0;
    vec2 uv = fragCoord/resolution.xy;
    vec2 scaleFactor = 1.0 / resolution.xy;
    vec4 tex = vec4(0.0);
    vec2 coord1;
    vec2 coord2;
    for (float i = 0.0; i < dimension; i++) {
        coord1 = vec2(i - radius + offset, radius);
        coord2 = vec2(radius, i - radius + offset);
        tex += texture2D(iChannel0, (coord1 + fragCoord) * scaleFactor);
        tex += texture2D(iChannel0, (-coord1 + fragCoord) * scaleFactor);
        tex += texture2D(iChannel0, (coord2 + fragCoord) * scaleFactor);
        tex += texture2D(iChannel0, (-coord2 + fragCoord) * scaleFactor);
    }
    tex /= dimension * 4.0;
    fragColor = tex;
}

void main(void)
{
    mainImage(gl_FragColor, fragCoord.xy);
}
