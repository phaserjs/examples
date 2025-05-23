// Image Blur
// Author: inigo quilez
// License: Creative Commons Attribution-ShareAlike 3.0 Unported

#pragma phaserTemplate(shaderName)

precision highp float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D iChannel0;

varying vec2 fragCoord;

vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec3 iChannelResolution = vec3(1024.0, 1024.0, 1024.0);
    vec3 totCorrect = vec3(0.0);
    for( int j=0; j<9; j++ )
    for( int i=0; i<9; i++ )
    {
        vec2 st = ( fragCoord.xy + vec2(float(i-4),float(j-4)) ) /iChannelResolution.xy;
        vec3 co = texture( iChannel0, vec2(st.x,1.0-st.y) ).xyz;
        totCorrect += pow(co,vec3(2.2));
    }
    vec3 colCorrect = pow(totCorrect/81.0,vec3(1.0/2.2));
    vec2 q = fragCoord.xy / resolution.xy;
    fragColor = vec4( colCorrect, 1.0 );
}

void main(void)
{
    mainImage(gl_FragColor, fragCoord.xy);
}
