// Ghosts
// Original shader from: https://www.shadertoy.com/view/wdyGRz
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
