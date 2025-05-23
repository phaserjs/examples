// #module

// This file defines a hue rotation shader addition for Phaser 4 RenderNodes.

const hueRotateFrag = `
float angle = uHue;
float s = sin(angle), c = cos(angle);
mat3 hueRotation = mat3(
    vec3(0.299 + 0.701 * c + 0.168 * s, 0.587 - 0.587 * c + 0.330 * s, 0.114 - 0.114 * c - 0.497 * s),
    vec3(0.299 - 0.299 * c - 0.328 * s, 0.587 + 0.413 * c + 0.035 * s, 0.114 - 0.114 * c + 0.292 * s),
    vec3(0.299 - 0.300 * c + 1.250 * s, 0.587 - 0.588 * c - 1.050 * s, 0.114 + 0.886 * c - 0.203 * s)
);
fragColor.rgb = clamp(hueRotation * fragColor.rgb, 0.0, 1.0);
`;

export default function AddHueRotate(renderNodeManager) {
    const batchHandler = new Phaser.Renderer.WebGL.RenderNodes.BatchHandlerQuad(renderNodeManager);
    batchHandler.programManager.addAddition({
        name: 'HueRotate',
        additions: {
            fragmentHeader: 'uniform float uHue;',
            fragmentProcess: hueRotateFrag
        }
    });
    return batchHandler;
}
