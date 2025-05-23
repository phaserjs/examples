// Particles
// No author info

#pragma phaserTemplate(shaderName)

precision highp float;

uniform float time;
uniform vec2 resolution;

varying vec2 fragCoord;

#define N(h) fract(sin(vec4(6,9,1,0)*h) * 9e2)

void main(void)
{
    vec4 o;
    vec2 u = fragCoord.xy / resolution.y;
    float s = 500.0;
    u = floor(u * s) / s;
    float e, d, i=0.;
    vec4 p;
    for (float i=1.; i<30.; i++) {
        d = floor(e = i*9.1+time);
        p = N(d)+.3;
        e -= d;
        for (float d=0.; d<5.;d++)
            o += p*(2.9-e)/1e3/length(u-(p-e*(N(d*i)-.5)).xy);
    }
    gl_FragColor = vec4(o.rgb, 1.0);
}
