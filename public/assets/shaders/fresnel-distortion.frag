// Fresnel Distortion
// Author: https://www.shadertoy.com/view/XtKSDm

#pragma phaserTemplate(shaderName)

precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D iChannel0;

varying vec2 fragCoord;

vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }

vec2 iMouse = vec2(512.0, 512.0);

const float ring = 5.0;
const float div = 0.5;

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 res = resolution.xy;
    float aspect = res.x / res.y;
    vec2 uv = fragCoord.xy / res;
    float t = time * 0.05;
    vec2 p = vec2(uv.x * aspect, uv.y);
    float r = distance(p, vec2(iMouse.x / res.x * aspect, iMouse.y / res.y));
    r -= t;
    r = fract(r*ring)/div;
    uv = -1.0 + 2.0 * uv;
    uv *=  r;
    uv = uv * 0.5 + 0.5;
    fragColor = texture(iChannel0, uv);
}

void main(void)
{
    mainImage(gl_FragColor, fragCoord.xy);
}
