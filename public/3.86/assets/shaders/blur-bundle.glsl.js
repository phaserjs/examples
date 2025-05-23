---
name: Radial Blur
type: fragment
author: Richard Davey (with thanks to inigo quilez)
---

#extension GL_OES_standard_derivatives : enable

precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D iChannel0;

varying vec2 fragCoord;

vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }

#define PROJECT_X 0.5
#define PROJECT_Y 0.5
#define ITERATIONS 64.0
#define INTENSITY 3.0
#define DISTANCE 0.96

void mainImage (out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = fragCoord.xy / resolution.xy;

    vec3 col = vec3(0.0);

    vec2 d = (vec2(PROJECT_X, PROJECT_Y) - uv) / ITERATIONS;
    float w = 1.0;
    vec2 s = uv;

    for (float i = 0.0; i < ITERATIONS; i++)
    {
        vec3 res = texture(iChannel0, s).xyz;
        col += w * smoothstep(0.0, 1.0, res);
        w *= DISTANCE;
        s += d;
    }

    col = col * INTENSITY / ITERATIONS;

    fragColor = vec4(col, 0.0);
}

/*
void rawImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord.xy / resolution.xy;

    vec4 tex = texture2D(iChannel0, uv);

    if (tex.w > 0.0)
    {
        fragColor = tex;
    }
}
*/

void main(void)
{
    mainImage(gl_FragColor, fragCoord.xy);
}

---
name: Outline
type: fragment
author: https://www.shadertoy.com/view/MlcSW2
---

precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D iChannel0;

varying vec2 fragCoord;

//  The bigger the MAG, the more SAMPLES needed to smooth it out
//  0.005 + 10 = nice

#define PI 3.14159265359
#define SAMPLES 10
#define MAG 0.005

void main (void)
{
    vec2 uv = fragCoord.xy / resolution.xy;
    
    //  The color of the outline: vec3(1.0, 1.0, 0.0) = yellow
    // vec3 targetCol = vec3(1.0, 1.0, 0.0);

    //  The color of the outline: shift over time
    vec3 targetCol = vec3(sin(time), cos(time), 1.0);
    
    vec4 finalCol = vec4(0);
    
    //  Radians based on SAMPLES
    float rads = ((360.0 / float(SAMPLES)) * PI) / 180.0;
    
    for (int i = 0; i < SAMPLES; i++)
    {
        if (finalCol.w < 0.1)
        {
            //  with SAMPLES 4 this gives a nice hard outline
            // float r = radians(float((i*2+1)*180/SAMPLES));

            //  With SAMPLES 10 this gives a smooth outline
            float r = float(i + 1) * rads;

            //  Calculate vector based on current radians and multiply by magnitude
            vec2 offset = vec2(cos(r) * 1.0, -sin(r)) * MAG;

            //  Render the texture to the pixel on an offset UV
            finalCol = texture2D(iChannel0, uv + offset);

            if (finalCol.w > 0.0)
            {
                finalCol.xyz = targetCol;
            }
        }
    }
    
    vec4 tex = texture2D(iChannel0, uv);

    if (tex.w > 0.0)
    {
        //  If the centered texture's alpha is greater than 0, set finalcol to tex
        finalCol = tex;
    }
    
    gl_FragColor = finalCol;
}

// void main(void)
// {
//     mainImage(gl_FragColor, fragCoord.xy);
// }

---
name: Focalesque Blur
type: fragment
author: https://www.shadertoy.com/view/Wtj3Wz
---

precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D iChannel0;

varying vec2 fragCoord;

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // vec2 iMouse = vec2(512.0, 512.0);
    // float radius = iMouse.x / 50.0;
    
    const float radius = 10.0;

    const float dimension = floor(radius * 2.0) + 1.0;
    const float numPixels = dimension * dimension;
    
    float offset = fract(radius * 2.0) / 2.0;
    
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/resolution.xy;
    
    vec2 scaleFactor = 1.0 / resolution.xy;
    
    vec4 tex = vec4(0.0);
    
    vec2 coord1;
    vec2 coord2;
    
    for (float i = 0.0; i < dimension; i++) {
        coord1 = vec2(i - radius + offset, radius);
        coord2 = vec2(radius, i - radius + offset);
        tex += texture2D(iChannel0, (coord1 + fragCoord) * scaleFactor);
        tex += texture2D(iChannel0, (-coord1 + fragCoord) * scaleFactor);
        tex += texture2D(iChannel0, (coord2 + fragCoord) * scaleFactor);
        tex += texture2D(iChannel0, (-coord2 + fragCoord) * scaleFactor);
    }
    
    tex /= dimension * 4.0;

    // Time varying pixel color
    vec3 col = 0.5 + 0.5*cos(time+uv.xyx+vec3(0,2,4));

    // Output to screen
    fragColor = tex;
}

void main(void)
{
    mainImage(gl_FragColor, fragCoord.xy);
}

---
name: Fresnel Distortion
type: fragment
author: https://www.shadertoy.com/view/XtKSDm
---

precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D iChannel0;

varying vec2 fragCoord;

vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }

vec2 iMouse = vec2(512.0, 512.0);

const float ring = 5.0;
const float div = 0.5;

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 res = resolution.xy;
    float aspect = res.x / res.y;
    vec2 uv = fragCoord.xy / res;
    float t = time * 0.05;
    
    vec2 p = vec2(uv.x * aspect, uv.y);
    
    float r = distance(p, vec2(iMouse.x / res.x * aspect, iMouse.y / res.y));
    r -= t;
    r = fract(r*ring)/div;
    
    uv = -1.0 + 2.0 * uv;
    uv *=  r;
    uv = uv * 0.5 + 0.5;
    
    
    fragColor = texture(iChannel0, uv);
}

void main(void)
{
    mainImage(gl_FragColor, fragCoord.xy);
}

---
name: Sobel Edge
type: fragment
author: https://www.shadertoy.com/view/Mdf3zr
---

precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D iChannel0;

varying vec2 fragCoord;

vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }

float d;

float lookup(vec2 p, float dx, float dy)
{
    vec2 uv = (p.xy + vec2(dx * d, dy * d)) / resolution.xy;
    vec4 c = texture(iChannel0, uv.xy);
    
    // return as luma
    return 0.2126*c.r + 0.7152*c.g + 0.0722*c.b;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    d = sin(time * 5.0)*0.5 + 3.5; // kernel offset
    vec2 p = fragCoord.xy;
    
    // simple sobel edge detection
    float gx = 0.0;
    gx += -1.0 * lookup(p, -1.0, -1.0);
    gx += -2.0 * lookup(p, -1.0,  0.0);
    gx += -1.0 * lookup(p, -1.0,  1.0);
    gx +=  1.0 * lookup(p,  1.0, -1.0);
    gx +=  2.0 * lookup(p,  1.0,  0.0);
    gx +=  1.0 * lookup(p,  1.0,  1.0);
    
    float gy = 0.0;
    gy += -1.0 * lookup(p, -1.0, -1.0);
    gy += -2.0 * lookup(p,  0.0, -1.0);
    gy += -1.0 * lookup(p,  1.0, -1.0);
    gy +=  1.0 * lookup(p, -1.0,  1.0);
    gy +=  2.0 * lookup(p,  0.0,  1.0);
    gy +=  1.0 * lookup(p,  1.0,  1.0);
    
    // hack: use g^2 to conceal noise in the video
    float g = gx*gx + gy*gy;
    float g2 = g * (sin(time) / 2.0 + 0.5);
    
    vec4 col = texture(iChannel0, p / resolution.xy);
    col += vec4(0.0, g, g2, 1.0);
    
    fragColor = col;
}

void main(void)
{
    mainImage(gl_FragColor, fragCoord.xy);
}

---
name: Fire Buffer A
type: fragment
author: https://www.shadertoy.com/view/XsdGWj
---

precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;

varying vec2 fragCoord;

vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 px = 3.0/vec2(1024.0,1024.0);
    vec2 uv = fragCoord.xy / resolution.xy;
    vec4 tex = texture(iChannel0,uv);
    float newG = min(tex.g,max(tex.r,tex.b));
    float d = abs(tex.g - newG);
    // tex.g = newG * 0.9;
    if (tex.a == 0.0)
    {
        //px*= sin(time+uv.yx*3.0)*.35;
        uv -= 0.5*px;
        vec4 tex2 = texture(iChannel1,uv);
        uv += px;
        tex2 += texture(iChannel1,uv);
        uv.x -= px.x -.018 *sin(time*4.1+tex2.r);
        uv.y += px.y +.015 * cos(time*4.1+tex2.g);
        tex2 += texture(iChannel1,uv);
        uv.y -= px.y;
        tex2 += texture(iChannel1,uv);
        tex2 /= 4.013;
        tex2 = clamp(tex2*1.02-0.012,0.0,1.0);
        tex = max(clamp(tex*(1.0-d),0.0,1.0),mix(tex,tex2,smoothstep(-0.3,0.23,d)));
     }
        
    fragColor = tex;
}

void main(void)
{
    mainImage(gl_FragColor, fragCoord.xy);
}

---
name: Fire Buffer B
type: fragment
author: https://www.shadertoy.com/view/XsdGWj
---

precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;

varying vec2 fragCoord;

vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 px = 1.5 / vec2(1024.0,1024.0);
    vec2 uv = fragCoord.xy / resolution.xy;
    vec4 tx = texture(iChannel1,uv);
    float dist = distance(tx,texture(iChannel1,uv+px));
    px.y *= -1.0;
    dist += distance(tx,texture(iChannel1,uv+px));
    px.x *= -1.0;
    dist += distance(tx,texture(iChannel1,uv+px));
    px.y *= -1.0;
    dist += distance(tx,texture(iChannel1,uv+px));
    uv *= mat2(0.99,0.01,-0.001,0.99);
    fragColor = texture(iChannel0,uv+0.002)*vec4(0.91,0.847,0.0,0.0)+
        vec4(smoothstep(0.3,0.8,dist),smoothstep(0.3,1.4,dist),0.0,1.0)*.175;
}

void main(void)
{
    mainImage(gl_FragColor, fragCoord.xy);
}

---
name: Fire
type: fragment
author: https://www.shadertoy.com/view/XsdGWj
---

precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;

varying vec2 fragCoord;

vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord.xy / resolution.xy;
    fragColor = max(texture(iChannel0,uv),texture(iChannel1,uv+0.002));
}

void main(void)
{
    mainImage(gl_FragColor, fragCoord.xy);
}

---
name: Image Blur
type: fragment
author: inigo quilez
license: License Creative Commons Attribution-ShareAlike 3.0 Unported
---

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

---
name: Noise Blur
type: fragment
author: inigo quilez
---

#extension GL_OES_standard_derivatives : enable

precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D iChannel0;

varying vec2 fragCoord;

vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }

// Created by inigo quilez - iq/2013
// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.

float hash( float n )
{
    return fract(sin(n)*43758.5453);
}

float noise( in vec2 x )
{
    vec2 p = floor(x);
    vec2 f = fract(x);
    f = f*f*(3.0-2.0*f);
    float n = p.x + p.y*57.0;
    return mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
               mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y);
}

vec2 map( vec2 p, in float offset )
{
    p.x += 0.1*sin( time + 2.0*p.y ) ;
    p.y += 0.1*sin( time + 2.0*p.x ) ;
    
    float a = noise(p*1.5 + sin(0.1*time))*6.2831;
    a -= offset;
    return vec2( cos(a), sin(a) );
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 p = fragCoord.xy / resolution.xy;
    vec2 uv = -1.0 + 2.0*p;
    uv.x *= resolution.x / resolution.y;
        
    float offset = time + fragCoord.x/resolution.x;
    
    float acc = 0.0;
    vec3  col = vec3(0.0);
    for( int i=0; i<32; i++ )
    {
        vec2 dir = map( uv, offset );
        
        float h = float(i)/32.0;
        float w = 4.0*h*(1.0-h);
        
        vec3 ttt = w*texture( iChannel0, uv ).xyz;
        ttt *= mix( vec3(0.6,0.7,0.7), vec3(1.0,0.95,0.9), 0.5 - 0.5*dot( reflect(vec3(dir,0.0), vec3(1.0,0.0,0.0)).xy, vec2(0.707) ) );
        col += w*ttt;
        acc += w;
        
        uv += 0.008*dir;
    }
    col /= acc;
    
    float gg = dot( col, vec3(0.333) );
    vec3 nor = normalize( vec3( dFdx(gg), 0.5, dFdy(gg) ) );
    col += vec3(0.4)*dot( nor, vec3(0.7,0.01,0.7) );

    vec2 di = map( uv, offset );
    col *= 0.65 + 0.35*dot( di, vec2(0.707) );
    col *= 0.20 + 0.80*pow( 4.0*p.x*(1.0-p.x), 0.1 );
    col *= 1.7;

    fragColor = vec4( col, 1.0 );
}

void main(void)
{
    mainImage(gl_FragColor, fragCoord.xy);
}
