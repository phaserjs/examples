// Stripes
// Author: Richard Davey

#pragma phaserTemplate(shaderName)

precision mediump float;

// Default size = 16.0
uniform float size;

varying vec2 outTexCoord;

void main(void)
{
    vec3 black = vec3(0.0, 0.0, 0.0);
    vec3 white = vec3(1.0, 1.0, 1.0);
    bool color = (mod(outTexCoord.y * size, 1.0) > 0.5);
    if (!color)
    {
        gl_FragColor = vec4(white, 1.0);
    }
}
