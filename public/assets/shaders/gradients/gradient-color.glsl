// A universal gradient function for use in shaders.
// This relies on a \`GRADIENT_VALUE\` macro being defined.

uniform vec4 color1;
uniform vec4 color2;
uniform int steps;

float gradientNoise(in vec2 uv)
{
    const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
    return fract(magic.z * fract(dot(uv, magic.xy)));
}

float stepped (in float s)
{
    return steps > 0 ? floor( s / (1.0 / float(steps))) * 1.0 / float(steps - 1) : s;
}

vec4 gradientColor (in vec2 uv)
{
    float d = GRADIENT_VALUE(uv);
    float t = stepped(d);

    t = smoothstep(0.0, 1.0, clamp(t, 0.0, 1.0));

    vec3 color = mix(linearToSRGB(color1.rgb), linearToSRGB(color2.rgb), t);

    color = linearToSRGB(color);
    color += (1.0 / 255.0) * gradientNoise(outTexCoord) - (0.5 / 255.0);

    float a1 = color1.a;
    float a2 = color2.a;
    float a = stepped(mix(a1, a2, t));

    return vec4(color * a, a);
}
