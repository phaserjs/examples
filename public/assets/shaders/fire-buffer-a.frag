// Fire Buffer A
// Author: https://www.shadertoy.com/view/XsdGWj

#pragma phaserTemplate(shaderName)

precision mediump float;

uniform float time;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;

varying vec2 outTexCoord;

vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 px = 3.0/vec2(1024.0,1024.0);
    vec2 uv = fragCoord.xy;
    vec4 tex = texture(iChannel0,uv);
    float newG = min(tex.g,max(tex.r,tex.b));
    float d = abs(tex.g - newG);
    if (tex.a == 0.0)
    {
        uv -= 0.5*px;
        vec4 tex2 = texture(iChannel1,uv);
        uv += px;
        tex2 += texture(iChannel1,uv);
        uv.x -= px.x -.018 *sin(time*4.1+tex2.r);
        uv.y += px.y +.015 * cos(time*4.1+tex2.g);
        tex2 += texture(iChannel1,uv);
        uv.y -= px.y;
        tex2 += texture(iChannel1,uv);
        tex2 /= 4.013;
        tex2 = clamp(tex2*1.02-0.012,0.0,1.0);
        tex = max(clamp(tex*(1.0-d),0.0,1.0),mix(tex,tex2,smoothstep(-0.3,0.23,d)));
     }
    fragColor = tex;
}

void main(void)
{
    mainImage(gl_FragColor, outTexCoord.xy);
}
