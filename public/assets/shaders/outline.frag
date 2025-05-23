// Outline
// Author: https://www.shadertoy.com/view/MlcSW2

#pragma phaserTemplate(shaderName)

precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D iChannel0;

varying vec2 fragCoord;

#define PI 3.14159265359
#define SAMPLES 10
#define MAG 0.005

void main (void)
{
    vec2 uv = fragCoord.xy / resolution.xy;
    vec3 targetCol = vec3(sin(time), cos(time), 1.0);
    vec4 finalCol = vec4(0);
    float rads = ((360.0 / float(SAMPLES)) * PI) / 180.0;
    for (int i = 0; i < SAMPLES; i++)
    {
        if (finalCol.w < 0.1)
        {
            float r = float(i + 1) * rads;
            vec2 offset = vec2(cos(r) * 1.0, -sin(r)) * MAG;
            finalCol = texture2D(iChannel0, uv + offset);
            if (finalCol.w > 0.0)
            {
                finalCol.xyz = targetCol;
            }
        }
    }
    vec4 tex = texture2D(iChannel0, uv);
    if (tex.w > 0.0)
    {
        finalCol = tex;
    }
    gl_FragColor = finalCol;
}
