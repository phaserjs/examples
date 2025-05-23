#pragma phaserTemplate(shaderName)

precision mediump float;

uniform float time;

varying vec2 outTexCoord;

void mainImage( out vec4 fragColor, in vec2 texCoord )
{
    vec2 uv = (texCoord-0.5)*8.0;
    float i0=1.0;
    float i1=1.0;
    float i2=1.0;
    float i4=0.0;
    for(int s=0;s<7;s++)
    {
        vec2 r;
        r=vec2(cos(uv.y*i0-i4+time/i1),sin(uv.x*i0-i4+time/i1))/i2;
        r+=vec2(-r.y,r.x)*0.3;
        uv.xy+=r;

        i0*=1.93;
        i1*=1.15;
        i2*=1.7;
        i4+=0.05+0.1*time*i1;
    }
    float r=sin(uv.x-time)*0.5+0.5;
    float b=sin(uv.y+time)*0.5+0.5;
    float g=sin((uv.x+uv.y+sin(time*0.5))*0.5)*0.5+0.5;
    fragColor = vec4(r,g,b,1.0);
}

void main(void)
{
    mainImage(gl_FragColor, outTexCoord);
    gl_FragColor.a = 1.0;
}
