// Colorful Voronoi
// Author: Brandon Fogerty (xdpixel.com)

#pragma phaserTemplate(shaderName)

#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;
varying vec2 outTexCoord;

vec2 hash(vec2 p)
{
    mat2 m = mat2(  13.85, 47.77,
                    99.41, 8.48
                );
    return fract(sin(m*p) * 46738.29);
}

float voronoi(vec2 p)
{
    vec2 g = floor(p);
    vec2 f = fract(p);
    float distanceToClosestFeaturePoint = 1.0;
    for(int y = -1; y <= 1; y++)
    {
        for(int x = -1; x <= 1; x++)
        {
            vec2 latticePoint = vec2(x, y);
            float currentDistance = distance(latticePoint + hash(g+latticePoint), f);
            distanceToClosestFeaturePoint = min(distanceToClosestFeaturePoint, currentDistance);
        }
    }
    return distanceToClosestFeaturePoint;
}

void main( void )
{
    vec2 uv = outTexCoord * 2.0 - 1.0;
    uv.x *= resolution.x / resolution.y;
    float offset = voronoi(uv*10.0 + vec2(time));
    float t = 1.0/abs(((uv.x + sin(uv.y + time)) + offset) * 30.0);
    float r = voronoi( uv * 1.0 ) * 1.0;
    vec3 finalColor = vec3(10.0 * uv.y, 2.0, 1.0 * r ) * t;
    gl_FragColor = vec4(finalColor, 1.0 );
}
