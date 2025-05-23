// Sobel Edge
// Author: https://www.shadertoy.com/view/Mdf3zr

#pragma phaserTemplate(shaderName)

precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D iChannel0;

varying vec2 fragCoord;

vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }

float d;

float lookup(vec2 p, float dx, float dy)
{
    vec2 uv = (p.xy + vec2(dx * d, dy * d)) / resolution.xy;
    vec4 c = texture(iChannel0, uv.xy);
    return 0.2126*c.r + 0.7152*c.g + 0.0722*c.b;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    d = sin(time * 5.0)*0.5 + 3.5; // kernel offset
    vec2 p = fragCoord.xy;
    float gx = 0.0;
    gx += -1.0 * lookup(p, -1.0, -1.0);
    gx += -2.0 * lookup(p, -1.0,  0.0);
    gx += -1.0 * lookup(p, -1.0,  1.0);
    gx +=  1.0 * lookup(p,  1.0, -1.0);
    gx +=  2.0 * lookup(p,  1.0,  0.0);
    gx +=  1.0 * lookup(p,  1.0,  1.0);
    float gy = 0.0;
    gy += -1.0 * lookup(p, -1.0, -1.0);
    gy += -2.0 * lookup(p,  0.0, -1.0);
    gy += -1.0 * lookup(p,  1.0, -1.0);
    gy +=  1.0 * lookup(p, -1.0,  1.0);
    gy +=  2.0 * lookup(p,  0.0,  1.0);
    gy +=  1.0 * lookup(p,  1.0,  1.0);
    float g = gx*gx + gy*gy;
    float g2 = g * (sin(time) / 2.0 + 0.5);
    vec4 col = texture(iChannel0, p / resolution.xy);
    col += vec4(0.0, g, g2, 1.0);
    fragColor = col;
}

void main(void)
{
    mainImage(gl_FragColor, fragCoord.xy);
}
