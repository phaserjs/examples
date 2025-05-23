// A collection of color functions for use in shaders.
// These use a gamma of 2.2, rather than the true sRGB function.
// This should be good enough for most purposes.

vec3 sRGBToLinear(vec3 c) {
    return pow((c), vec3(2.2));
}
vec3 linearToSRGB(vec3 c) {
    return pow((c), vec3(1.0 / 2.2));
}
