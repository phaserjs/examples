// Rainbow
// No author info

#pragma phaserTemplate(shaderName)

precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;

varying vec2 fragCoord;

void main (void)
{
    vec2 uv = fragCoord.xy / resolution.xy;
    vec3 col = uv.xyx;
    gl_FragColor = vec4(col, 1.0);
}
