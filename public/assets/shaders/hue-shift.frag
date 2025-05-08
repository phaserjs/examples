precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;

varying vec2 fragCoord;

vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }

void mainImage(out vec4 fragColor,in vec2 fragCoord)
{
    vec2 vUv = fragCoord.xy / resolution.xy;
    vec3 flow = texture(iChannel0, vUv).rgb;
    vec2 uv = .05 / fragCoord.xy /resolution.xy ;
    vec2 myUV = (uv - vec2(0.5))*resolution.xy + vec2(0.95);
    myUV -= flow.xy * (0.015 * 11.2)*.3125+time*.013241;
    vec2 myUV2 = (uv - vec2(0.5))*resolution.xy + vec2(0.95);
    myUV2 -= flow.xy * (0.125 * 1.2)*.3125+time*.01221;
    vec2 myUV3 = (uv - vec2(0.5))*resolution.xy + vec2(0.95);
    myUV3 -= flow.xy * (0.010 * 11.4)*.3125+time*.0112911;
    vec3 tex = texture(iChannel1, myUV).rgb;
    vec3 tex2 = texture(iChannel1, myUV2).rgb;
    vec3 tex3 = texture(iChannel1, myUV3).rgb;
    fragColor = vec4(tex.r-.15, tex2.g-.15, tex3.b-.15, 1.0)*1.95;
}

void main(void)
{
    mainImage(gl_FragColor, fragCoord.xy);
}
