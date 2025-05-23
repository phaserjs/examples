// GridBack
// Original shader from: http://glslsandbox.com/e#57588.0
#pragma phaserTemplate(shaderName)

#ifdef GL_ES
precision mediump float;
#endif

// glslsandbox uniforms
uniform float time;
uniform vec2 resolution;

// shadertoy emulation
#define iTime time
#define iResolution resolution

// --------[ Original ShaderToy begins here ]---------- //
// FYI: LEFT:37  UP:38  RIGHT:39  DOWN:40   PAGEUP:33  PAGEDOWN:34  END : 35  HOME: 3

float rand(vec2 p)
{
    p = fract(p*vec2(234.51,124.89));
    p += dot(p,p+54.23);
    p = fract(p*vec2(121.80,456.12));
    p += dot(p,p+25.12);
    return fract(p.x);
}

float width = 0.2;

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    
    
    vec2 pos = 5.*vec2(sin(iTime*0.2)+0.1*iTime,cos(iTime*0.2)+0.1*iTime);
    vec3 col = vec3(0.);//0.5 + 0.5*cos(iTime+(fragCoord/iResolution.xy).xyx+vec3(0,2,4));
    
    for(float i=5.;i<10.;i+=1.)
    {   
        vec2 uv = pos+((20.-1.8*i)*(fragCoord-.5*iResolution.xy)/iResolution.y);
        vec2 gv = (fract(uv)-0.5);
        vec2 id = floor(uv);
        vec3 col2 = (0.5 + 0.2*sin(iTime+(i/2.)+0.3*uv.xyx+vec3(0,2,4))*sin(iTime+(i/2.)+0.3*uv.xyx+vec3(0,2,4)) + 0.5*cos(iTime+(i/2.)+0.3*uv.xyx+vec3(0,2,4)))*(i+1.)/11.;

        gv.x *= (float(rand(id*i)>0.5)-0.5)*2.;

        float mask1 = smoothstep(-0.01,0.01,width-abs(gv.x+gv.y-0.5*sign(gv.x+gv.y+0.01)));
        float mask2 = smoothstep(-0.2,0.2,width-abs(gv.x+gv.y-0.5*sign(gv.x+gv.y+0.01)));

        // Output to screen
        col = - 0.3*mask2 + 0.5*(col2.r*col2.r+col2.g*col2.g+col2.b*col2.b + col2*col2)*col2*mask1 + col*(1.-mask1);
    }
    fragColor = vec4(col,1.0);
}
// --------[ Original ShaderToy ends here ]---------- //

void main(void)
{
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
