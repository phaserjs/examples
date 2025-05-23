// Fire
// Author: https://www.shadertoy.com/view/XsdGWj

#pragma phaserTemplate(shaderName)

precision mediump float;

uniform sampler2D iChannel0;
uniform sampler2D iChannel1;

varying vec2 outTexCoord;

vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord.xy;
    fragColor = max(texture(iChannel0,uv),texture(iChannel1,uv+0.002));
}

void main(void)
{
    mainImage(gl_FragColor, outTexCoord.xy);
}
