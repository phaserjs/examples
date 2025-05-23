uniform vec2 positionFrom;
uniform vec2 positionTo;
uniform float repeat;
uniform float offset;

float GRADIENT_VALUE (in vec2 uv)
{
    vec2 a = positionFrom;
    vec2 b = positionTo;
    vec2 ba = b - a;

    // Distance from the line.
    float p = dot(uv - a, ba) / dot(ba, ba) + offset;

    if (p < 0.0)
    {
        return 0.0;
    }

    if (p > 1.0)
    {
        return 1.0;
    }

    return mod(p * repeat, 1.0);
}
