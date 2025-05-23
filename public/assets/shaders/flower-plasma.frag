// Flower Plasma
// Author: epsilum (https://www.shadertoy.com/view/Xdf3zH)

#pragma phaserTemplate(shaderName)

precision mediump float;

uniform float time;
uniform vec2 resolution;

varying vec2 outTexCoord;

float addFlower(float x, float y, float ax, float ay, float fx, float fy)
{
    float xx=(x+sin(time*fx)*ax)*8.0;
    float yy=(y+cos(time*fy)*ay)*8.0;
    float angle = atan(yy,xx);
    float zz = 1.5*(cos(18.0*angle)*0.5+0.5) / (0.7 * 3.141592) + 1.2*(sin(15.0*angle)*0.5+0.5)/ (0.7 * 3.141592);
    return zz;
}
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 xy=(fragCoord.xy*resolution/resolution.x)*2.0-vec2(1.0,resolution.y/resolution.x);
    float x=xy.x;
    float y=xy.y;
    float p1 = addFlower(x, y, 0.8, 0.9, 0.95, 0.85);
    float p2 = addFlower(x, y, 0.7, 0.9, 0.42, 0.71);
    float p3 = addFlower(x, y, 0.5, 1.0, 0.23, 0.97);
    float p4 = addFlower(x, y, 0.8, 0.5, 0.81, 1.91);
    float p=clamp((p1+p2+p3+p4)*0.25, 0.0, 1.0);
    vec4 col;
    if (p < 0.5)
        col=vec4(mix(0.0,1.0,p*2.0), mix(0.0,0.63,p*2.0), 0.0, 1.0);
    else if (p >= 0.5 && p <= 0.75)
        col=vec4(mix(1.0, 1.0-0.32, (p-0.5)*4.0), mix(0.63, 0.0, (p-0.5)*4.0), mix(0.0,0.24,(p-0.5)*4.0), 1.0);
    else
        col=vec4(mix(0.68, 0.0, (p-0.75)*4.0), 0.0, mix(0.24, 0.0, (p-0.75)*4.0), 1.0);
    fragColor = col;
}
void main(void)
{
    mainImage(gl_FragColor, outTexCoord.xy);
    gl_FragColor.a = 1.0;
}
