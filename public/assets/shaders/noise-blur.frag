// Noise Blur
// Author: inigo quilez

#pragma phaserTemplate(shaderName)

#extension GL_OES_standard_derivatives : enable

precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D iChannel0;

varying vec2 fragCoord;

vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }

// Created by inigo quilez - iq/2013
// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.

float hash( float n )
{
    return fract(sin(n)*43758.5453);
}

float noise( in vec2 x )
{
    vec2 p = floor(x);
    vec2 f = fract(x);
    f = f*f*(3.0-2.0*f);
    float n = p.x + p.y*57.0;
    return mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
               mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y);
}

vec2 map( vec2 p, in float offset )
{
    p.x += 0.1*sin( time + 2.0*p.y ) ;
    p.y += 0.1*sin( time + 2.0*p.x ) ;
    float a = noise(p*1.5 + sin(0.1*time))*6.2831;
    a -= offset;
    return vec2( cos(a), sin(a) );
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 p = fragCoord.xy / resolution.xy;
    vec2 uv = -1.0 + 2.0*p;
    uv.x *= resolution.x / resolution.y;
    float offset = time + fragCoord.x/resolution.x;
    float acc = 0.0;
    vec3  col = vec3(0.0);
    for( int i=0; i<32; i++ )
    {
        vec2 dir = map( uv, offset );
        float h = float(i)/32.0;
        float w = 4.0*h*(1.0-h);
        vec3 ttt = w*texture( iChannel0, uv ).xyz;
        ttt *= mix( vec3(0.6,0.7,0.7), vec3(1.0,0.95,0.9), 0.5 - 0.5*dot( reflect(vec3(dir,0.0), vec3(1.0,0.0,0.0)).xy, vec2(0.707) ) );
        col += w*ttt;
        acc += w;
        uv += 0.008*dir;
    }
    col /= acc;
    float gg = dot( col, vec3(0.333) );
    vec3 nor = normalize( vec3( dFdx(gg), 0.5, dFdy(gg) ) );
    col += vec3(0.4)*dot( nor, vec3(0.7,0.01,0.7) );
    vec2 di = map( uv, offset );
    col *= 0.65 + 0.35*dot( di, vec2(0.707) );
    col *= 0.20 + 0.80*pow( 4.0*p.x*(1.0-p.x), 0.1 );
    col *= 1.7;
    fragColor = vec4( col, 1.0 );
}

void main(void)
{
    mainImage(gl_FragColor, fragCoord.xy);
}
