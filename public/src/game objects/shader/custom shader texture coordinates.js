const perlinNoiseFunction = `
// Assign this snippet to \`fragmentHeader\` in the shader config.
// This places it above the \`main\` function in the fragment shader.

vec2 rand2 (vec2 co) {
    co = vec2(dot(co, vec2(127.1, 311.7)), dot(co, vec2(269.5, 183.3)));
    return fract(sin(co) * 43758.5453);
}

float perlinNoise (vec2 uv)
{
    vec2 i = floor(uv);
    vec2 f = fract(uv);
    return mix(mix(dot(rand2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
                dot(rand2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), f.x),
            mix(dot(rand2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
                dot(rand2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), f.x), f.y) * 0.5 + 0.5;
}
`;

const cloudFunction = `
// Assign this snippet to \`fragmentHeader\` in the shader config.
// This places it above the \`main\` function in the fragment shader.

uniform float time;
uniform vec4 tint;

float noisyNoise (vec2 uvMain, vec2 uvDistort, float distortion) {
    return perlinNoise(uvMain + perlinNoise(uvDistort) * distortion);
}

float cloudyNoise (vec2 texCoord)
{
    // Apply perspective to the texture coordinates.
    float horizon = 1.5;
    float h = (horizon - texCoord.y);
    float w = texCoord.x / h;
    vec2 uv = vec2(
        w - 0.5 / h,
        texCoord.y / h);

    vec2 timeOffsetDistort = vec2(time * 0.37, time * 0.25);
    vec2 timeOffsetMain = vec2(time * -0.73, time * 0.55);

    // Base frequency, to match screen aspect ratio of this example.
    // Change this or set it as a uniform to match your game.
    vec2 frequency = vec2(16, 9);

    float noise1 = noisyNoise(
        uv * frequency * 3.1 + timeOffsetMain * 3.17,
        uv * frequency * 7.0 + timeOffsetDistort * 3.0,
        4.0);

    float noise2 = noisyNoise(
        uv * frequency * 0.5 + timeOffsetMain * 2.97 + noise1,
        uv * frequency * 1.7 + timeOffsetDistort * 2.95 + noise1,
        2.0 + noise1 * 5.0);

    float noise3 = noisyNoise(
        uv * frequency * 1.9 + timeOffsetMain * 2.93 + noise2,
        uv * frequency * 1.2 + timeOffsetDistort * 2.90 + noise2,
        1.0 + noise2 * 5.0);

    float sum = noise1 * 0.15 + noise2 * 0.7 + noise3 * 0.2;

    return sum;
}
`;

const process = `
// Assign this snippet to \`fragmentProcess\` in the shader config.
// This places it within the \`main\` function in the fragment shader.
// The \`fragColor\` variable is defined above this, and output below this.

// Sample 8 layers of noise to create a cloudy effect.
float sum = 0.0;
float col = 1.0;
const int layers = 16;
const float layersF = float(layers);
for (int i = 0; i < layers; i++)
{
    float layer = cloudyNoise(vec2(outTexCoord.x, 1. - outTexCoord.y + float(layers - i) * 0.002));
    sum += layer;
    float layerBrightness = float(i) / (layersF - 1.0);
    col += layer * layerBrightness;
}

// Normalize the sum to the range [0, 1].
sum /= layersF;
col /= layersF;

float alpha = 1.0 - (0.55 - sum) * 16.0;
alpha = clamp(alpha, 0.0, 1.0);
alpha *= outTexCoord.y * 0.5 + 0.5;

// Brighten the color.
col = (col - 0.26) * 12.0;

// Reduce color by density.
col *= 1.3 - sum * 0.8;

fragColor = vec4(vec3(col * alpha), alpha) * tint;
`;

class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload()
    {
        this.load.image('bg', 'assets/skies/gradient22.png');
        this.load.atlas('megaset', 'assets/atlas/megaset-0.png', 'assets/atlas/megaset-0.json');
    }

    create()
    {
        this.add.image(640, 360, 'bg').setDisplaySize(1280, 720);

        const shaderConfig = {
            name: 'Noise',
            // By omitting `fragmentSource`, the default fragment shader is used.
            // It has template points for accepting additions.
            shaderAdditions: [
                {
                    name: 'PerlinNoise',
                    additions: {
                        fragmentHeader: perlinNoiseFunction
                    }
                },
                {
                    name: 'Cloud',
                    additions: {
                        fragmentHeader: cloudFunction
                    }
                },
                {
                    name: 'Proc',
                    additions: {
                        fragmentProcess: process
                    }
                }
            ],
            setupUniforms: (setUniform, drawingContext) => {
                // Don't let time grow too large, or it will lose precision.
                setUniform('time', (this.game.loop.time % 1000000) / 15000.0);

                setUniform('tint', [1.0, 0.6, 0.5, 1.0]);
            }
        };

        const shader = this.add.shader(shaderConfig, 640, 360, 1280, 720);

        // Create a Shader which reads a texture frame.
        const frame = this.textures.getFrame('megaset', 'phaser1');
        const shader2 = this.add.shader({
            name: "Hologram",
            fragmentSource: `
                #pragma phaserTemplate(shaderName)
                precision mediump float;
                uniform sampler2D uMainSampler;
                uniform float time;
                varying vec2 outTexCoord;
                void main(void)
                {
                    float wave = sin(outTexCoord.y * 1000.0 + time) * 0.1
                        + abs(sin(outTexCoord.y * 87.0 + time * 1.3)) * 0.1;

                    float spike = max(0.0, sin(outTexCoord.y * 101.0 + time * 0.5) - 0.9);

                    vec4 color = texture2D(uMainSampler, outTexCoord * vec2(1.0 + spike * 0.1, 1.0 + wave * 0.01));
                    gl_FragColor = color * vec4(0.5, 0.6, 1.0, 0.5 + wave);
                }
            `,
            setupUniforms: (setUniform, drawingContext) => {
                setUniform('uMainSampler', 0);
                setUniform('time', (this.game.loop.time % 1000000) / 100.0);
            }
        }, 640, 360, frame.width, frame.height, [ 'megaset' ]).setScale(2.0);

        // Set the texture coordinates to read only the frame.
        shader2.setTextureCoordinatesFromFrame(frame);
        // shader2.setTextureCoordinates(
        //     frame.u0, frame.v0, frame.u1, frame.v0,
        //     frame.u0, frame.v1, frame.u1, frame.v1
        // );
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1280,
    height: 720,
    backgroundColor: '#aaccff',
    scene: Example
};

const game = new Phaser.Game(config);
