// Fire Buffer B
// Author: https://www.shadertoy.com/view/XsdGWj

#pragma phaserTemplate(shaderName)

precision mediump float;

uniform sampler2D iChannel0;
uniform sampler2D iChannel1;

varying vec2 outTexCoord;

vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 px = 1.5 / vec2(1024.0,1024.0);
    vec2 uv = fragCoord.xy;
    vec4 tx = texture(iChannel1,uv);
    float dist = distance(tx,texture(iChannel1,uv+px));
    px.y *= -1.0;
    dist += distance(tx,texture(iChannel1,uv+px));
    px.x *= -1.0;
    dist += distance(tx,texture(iChannel1,uv+px));
    px.y *= -1.0;
    dist += distance(tx,texture(iChannel1,uv+px));
    uv *= mat2(0.99,0.01,-0.001,0.99);
    fragColor = texture(iChannel0,uv+0.002)*vec4(0.91,0.847,0.0,0.0)+
        vec4(smoothstep(0.3,0.8,dist),smoothstep(0.3,1.4,dist),0.0,1.0)*.175;
}

void main(void)
{
    mainImage(gl_FragColor, outTexCoord.xy);
}
