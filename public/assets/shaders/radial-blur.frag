// Radial Blur
// Author: Richard Davey (with thanks to inigo quilez)

#pragma phaserTemplate(shaderName)

#extension GL_OES_standard_derivatives : enable

precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D iChannel0;

varying vec2 fragCoord;

vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }

#define PROJECT_X 0.5
#define PROJECT_Y 0.5
#define ITERATIONS 64.0
#define INTENSITY 3.0
#define DISTANCE 0.96

void mainImage (out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = fragCoord.xy / resolution.xy;

    vec3 col = vec3(0.0);

    vec2 d = (vec2(PROJECT_X, PROJECT_Y) - uv) / ITERATIONS;
    float w = 1.0;
    vec2 s = uv;

    for (float i = 0.0; i < ITERATIONS; i++)
    {
        vec3 res = texture(iChannel0, s).xyz;
        col += w * smoothstep(0.0, 1.0, res);
        w *= DISTANCE;
        s += d;
    }

    col = col * INTENSITY / ITERATIONS;

    fragColor = vec4(col, 0.0);
}

void main(void)
{
    mainImage(gl_FragColor, fragCoord.xy);
}
