// Chunky
// No author info
#pragma phaserTemplate(shaderName)

precision mediump float;

uniform vec2 resolution;
uniform sampler2D iChannel0;
// Default pixelSize: 0.2
uniform float pixelSize;

varying vec2 outTexCoord;

vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord;
   
    uv = floor(uv * resolution.x * pixelSize) / (resolution.x * pixelSize);

    fragColor = texture(iChannel0, uv);
}

void main(void)
{
    mainImage(gl_FragColor, outTexCoord.xy);
}
