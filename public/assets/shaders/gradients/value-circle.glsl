// Defines a circle.
// If the origin is at [0.5, 0.5], a circle with radius 1 touches the edges of the screen.
// The feather is inset from the radius.
// The value is 1.0 at the center and 0.0 at the radius.

uniform vec2 center;
uniform float radius;
uniform float feather;
uniform vec2 scale;
uniform float repeat;
uniform float offset;

float GRADIENT_VALUE (in vec2 uv)
{
    float distance = length((uv - center) / scale) + offset;
    float a = radius - feather;

    // Get the linear position within the feather.
    float p = clamp((distance - a) / feather, 0.0, 1.0);

    if (p >= 1.0)
    {
        return 1.0;
    }

    if (p <= 0.0)
    {
        return 0.0;
    }

    // Apply repeat.
    p = mod(p * repeat, 1.0);

    // Apply smoothstep.
    return smoothstep(0.0, 1.0, p);
}
