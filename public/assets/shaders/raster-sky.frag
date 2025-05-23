// Raster Sky
// Author: http://glslsandbox.com/e#47285.1

#pragma phaserTemplate(shaderName)

#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;

varying vec2 fragCoord;

void main( void ) {
    vec2 realposition = ( fragCoord.xy / resolution.xy );
    vec2 position = realposition;
    position.x += time*0.05+120.;
    position.x *= cos(position.y*1.);
    vec2 star = vec2(0.8, 0.8);
    vec3 color = vec3(0.0);
    color.r = abs(sin(position.x*4.));
    color.g = abs(cos(position.x*4.+1.));
    color.b = abs(cos(position.x*4.));
    color.r *= cos(time*0.2+1.)*0.5+0.5;
    color.g *= sin(time*0.2)*0.5+0.5;
    color.b *= sin(time*0.2+5.)*0.5+0.5;
    vec3 skycolor= vec3(0.0);
    skycolor.r = sin(time*0.1+realposition.x     )*0.5+0.5;
    skycolor.g = cos(time*0.1+realposition.x + 2.)*0.5+0.5;
    skycolor.b = cos(time*0.1+realposition.x + 3.)*0.5+0.5;
    skycolor*= 0.3;
    skycolor += ((vec3(cos(time),cos(time),sin(time))*0.25+vec3(0.25) + vec3(0.50))*0.01)/distance(star, realposition);
    if(realposition.y>0.6)
        color *= 0.0;
    if(realposition.y>0.5)
        color = mix(skycolor ,color, (0.6-realposition.y)*10.);
    gl_FragColor = vec4( color, 1.0 );
}
