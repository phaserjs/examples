---
name: Ghosts
type: fragment
---

/*
 * Original shader from: https://www.shadertoy.com/view/wdyGRz
 */

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
#define debug false
#define eps 1.5 / iResolution.y
#define pi4 .785
#define is2 .0707

#define ratio iResolution.x/iResolution.y

float seed = .1;

float rand(float max)
{
    seed = fract(100000.0*sin(seed));
    return seed * max;
}

mat2 rot(float a) {
    float c = cos(a);
    float s = sin(a);
    return mat2(c, -s, s, c);
}

vec2 place(vec2 uv, vec2 pos, float size, float a)
{
     return (uv-pos)*size * rot(a);
}

float norm(float i) {
    return min(max(i, 0.), 1.);
}

float circle(vec2 uv, vec2 p, float r) {
    float d = length(uv - p);
    return smoothstep(r, r - eps, d);
}

float rect(vec2 uv, vec2 p, vec2 d, float a) {
    uv *= rot(a);
    p *= rot(a);
    return smoothstep(0., eps, uv.x - p.x) *
        smoothstep(0., -eps, uv.x - p.x - d.x) *
        smoothstep(0., eps, uv.y - p.y) *
        smoothstep(0., -eps, uv.y - p.y - d.y);
}

vec4 ghost(vec2 uv, float time) {
    float a = .4 * cos(time * 1.1 + rand(10.));
    float speed = 5. * cos(time + rand(10.));
    float radius = .3 * cos(time * .8 + rand(10.));
    float size = 1. + .1 * cos(time * 1.2 + rand(10.));
    float eye = cos(time * .75 + rand(10.));
    vec3 col = 0.5 + 0.5 * cos(time + vec3(0, 2, 4));
    if (debug)
    {
        radius = 0.;
        a = 0.;
        size = 1.;
        eye = 1.;
    }
    vec2 p = vec2(
        cos(time * .9 + speed + rand(10.)) * ratio, 
        sin(time * .9 + speed + rand(10.))
    ) * radius;
    uv = place(uv, p + vec2(0., .05), size, a);
    
    vec2 assp = vec2(is2, is2);

    float ass = rect(uv, vec2(.15, -.2), assp, pi4) +
        rect(uv, vec2(.05, -.2), assp, pi4) +
        rect(uv, vec2(-.05, -.2), assp, pi4) +
        rect(uv, vec2(-.15, -.2), assp, pi4) +
        rect(uv, vec2(-.25, -.2), assp, pi4);

    float body = circle(uv, vec2(0.), .2) +
        rect(uv, vec2(-.2, -.2), vec2(.4, .2), 0.) +
        rect(uv, vec2(-.2, -.25), vec2(.4, .06), 0.) * ass;

    float eyes =
        circle(uv, vec2(.08 + .05 * eye, 0.), .05) +
        circle(uv, vec2(-.08 + .05 * eye, 0.), .05) -
        circle(uv, vec2(.08 + .08 * eye, 0.), .02) -
        circle(uv, vec2(-.08 + .08 * eye, 0.), .02);

    float mask = norm(body) - eyes;

    return vec4(vec3(norm(mask)) * col, .5);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = (fragCoord - .5 * iResolution.xy) / iResolution.y;

    fragColor = ghost(uv, iTime) +
        ghost(uv, iTime + rand(1000.)) +
        ghost(uv, iTime + rand(1000.)) +
        ghost(uv, iTime + rand(1000.));
}
// --------[ Original ShaderToy ends here ]---------- //

void main(void)
{
    mainImage(gl_FragColor, gl_FragCoord.xy);
    gl_FragColor.a = 1.0;
}

---
name: Chunky
type: fragment
uniform.pixelSize: { "type": "1f", "value": 0.2 }
---

precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D iChannel0;
uniform float pixelSize;

varying vec2 fragCoord;

vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord / resolution.xy;
   
    uv = floor(uv * resolution.x * pixelSize) / (resolution.x * pixelSize);

    fragColor = texture(iChannel0, uv);
}

void main(void)
{
    mainImage(gl_FragColor, fragCoord.xy);
}

---
name: Hue Shift
type: fragment
---

precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;

varying vec2 fragCoord;

vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }

void mainImage(out vec4 fragColor,in vec2 fragCoord)
{
    vec2 vUv = fragCoord.xy / resolution.xy;
    vec3 flow = texture(iChannel0, vUv).rgb;
    vec2 uv = .05 / fragCoord.xy /resolution.xy ;
    vec2 myUV = (uv - vec2(0.5))*resolution.xy + vec2(0.95);
    myUV -= flow.xy * (0.015 * 11.2)*.3125+time*.013241;
    vec2 myUV2 = (uv - vec2(0.5))*resolution.xy + vec2(0.95);
    myUV2 -= flow.xy * (0.125 * 1.2)*.3125+time*.01221;
    vec2 myUV3 = (uv - vec2(0.5))*resolution.xy + vec2(0.95);
    myUV3 -= flow.xy * (0.010 * 11.4)*.3125+time*.0112911;
    vec3 tex = texture(iChannel1, myUV).rgb;
    vec3 tex2 = texture(iChannel1, myUV2).rgb;
    vec3 tex3 = texture(iChannel1, myUV3).rgb;
    fragColor = vec4(tex.r-.15, tex2.g-.15, tex3.b-.15, 1.0)*1.95;
}

void main(void)
{
    mainImage(gl_FragColor, fragCoord.xy);
}

---
name: GridBack
type: fragment
---

/*
 * Original shader from: http://glslsandbox.com/e#57588.0
 */

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
