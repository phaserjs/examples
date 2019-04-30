---
name: Shader1
type: fragment
---

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

---
name: Plasma Mask
type: fragment
---

precision highp float;

uniform float time;
uniform vec2 resolution;

void main( void ) {

    vec2 resolution = vec2(800.0, 600.0);

    vec2 position = ( gl_FragCoord.xy / resolution.xy );

    float color = 0.0;
    color += sin( position.x * cos( time / 15.0 ) * 80.0 ) + cos( position.y * cos( time / 15.0 ) * 10.0 );
    color += sin( position.y * sin( time / 10.0 ) * 40.0 ) + cos( position.x * sin( time / 25.0 ) * 40.0 );
    color += sin( position.x * sin( time / 5.0 ) * 10.0 ) + sin( position.y * sin( time / 35.0 ) * 80.0 );
    color *= sin( time / 10.0 ) * 0.5;

    
    gl_FragColor = vec4( vec3( sin( color + time / 3.0 ) * 0.75, sin( color + time / 3.0 ) * 0.75, sin( color + time / 3.0 ) * 0.75 ), 1.0 );

}

