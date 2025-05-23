// #module

// This file defines a grayscale shader addition for Phaser 4 RenderNodes.

const grayscaleFrag = `
float gray = uGray;
vec3 grayscale = vec3(0.2126, 0.7152, 0.0722);
float luminance = dot(fragColor.rgb, grayscale);
fragColor.rgb = mix(fragColor.rgb, vec3(luminance), gray);
`;

export default function AddGrayscale(renderNodeManager) {
    const batchHandler = new Phaser.Renderer.WebGL.RenderNodes.BatchHandlerQuad(renderNodeManager);
    batchHandler.programManager.addAddition({
        name: 'GrayScale',
        additions: {
            fragmentHeader: 'uniform float uGray;',
            fragmentProcess: grayscaleFrag
        }
    });
    return batchHandler;
}
