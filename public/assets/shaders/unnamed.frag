// Unnamed
// No author info

#pragma phaserTemplate(shaderName)

#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

varying vec2 fragCoord;

#ifndef saturate
#define saturate(v) clamp(v,0.,1.)
#endif
vec3 cyan=vec3(0.,0.5765,0.8275),
     magenta=vec3(0.8,0.,0.4196),
     yellow=vec3(1.,0.9451,0.0471);

void main(void){
    vec2 uv=fragCoord.xy/resolution;
    uv.x-=.5;
    uv.x*=resolution.x/resolution.y;
    uv.x+=.5;
    vec3 col=vec3(1.);
    col*=mix(cyan,vec3(1.),saturate((length(uv-vec2(.6,.4))-.2)/5e-3));
    col*=mix(magenta,vec3(1.),saturate((length(uv-vec2(.4,.4))-.2)/5e-3));
    col*=mix(yellow,vec3(1.),saturate((length(uv-vec2(.5,.6))-.2)/5e-3));
    if(floor(mod(fragCoord.y,2.))==0.){
    col=vec3(-2.);
    col+=mix(cyan,vec3(1.),saturate((length(uv-vec2(.6,.4))-.2)/5e-3));
    col+=mix(magenta,vec3(1.),saturate((length(uv-vec2(.4,.4))-.2)/5e-3));
    col+=mix(yellow,vec3(1.),saturate((length(uv-vec2(.5,.6))-.2)/5e-3));
    }
    gl_FragColor=vec4(col,1.);
}
