// Oldschool Plasma
// No author info

#pragma phaserTemplate(shaderName)

precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;

varying vec2 fragCoord;

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 p = -1.0 + 2.0 * fragCoord.xy / resolution.xy;
    float x = p.x;
    float y = p.y;
    float mov0 = x+y+cos(sin(time)*2.0)*100.+sin(x/100.)*1000.;
    float mov1 = y / 0.9 +  time;
    float mov2 = x / 0.2;
    float c1 = abs(sin(mov1+time)/2.+mov2/2.-mov1-mov2+time);
    float c2 = abs(sin(c1+sin(mov0/1000.+time)+sin(y/40.+time)+sin((x+y)/100.)*3.));
    float c3 = abs(sin(c2+cos(mov1+mov2+c2)+cos(mov2)+sin(x/1000.)));
    fragColor = vec4(c1,c2,c3,1);
}

void main(void)
{
    mainImage(gl_FragColor, fragCoord.xy);
}
