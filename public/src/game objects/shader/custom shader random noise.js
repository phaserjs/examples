const randomNoiseFunction = `
uniform vec2 uSeed;
float randomNoise (vec2 uv, vec2 extraSeed) {
    return fract(sin(dot(uv, uSeed + extraSeed)) * 43758.5453123);
}
`;

const randomBWProcess = `fragColor = vec4(vec3(step(0.5, randomNoise(outTexCoord, vec2(0.0)))), 1.0);`;

const randomGrayProcess = `fragColor = vec4(vec3(mix(0.25, 1.0, randomNoise(outTexCoord, vec2(0.0)))), 1.0);`;

const randomColorProcess = `fragColor = vec4(randomNoise(outTexCoord, vec2(0.0)), randomNoise(outTexCoord, vec2(1.0)), randomNoise(outTexCoord, vec2(2.0)), 1.0);`;

class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload()
    {
        this.load.atlas('megaset', 'assets/atlas/megaset-1.png', 'assets/atlas/megaset-1.json');
    }

    create()
    {
        this.cameras.main.setBackgroundColor(0x222233);

        this.add.image(240, 440, 'megaset', 'atari800').setTint(0x808080);
        this.add.image(640, 440, 'megaset', 'atari1200xl').setTint(0x808080);
        this.add.image(1040, 440, 'megaset', 'atari130xe').setTint(0x808080);

        // Define a list of shader additions to insert.
        // We could combine additions in a single entry in the list,
        // but this way we can easily swap out individual parts.
        const shaderAdditions = [
            {
                name: 'RandomNoise',
                additions: { fragmentHeader: randomNoiseFunction }
            },
            {
                name: 'BWProcess',
                additions: { fragmentProcess: randomBWProcess }
            }
        ];

        const shaderConfig = {
            name: 'Noise',
            // By omitting `fragmentSource`, the default fragment shader is used.
            // It has template points for accepting additions.
            shaderAdditions,
            setupUniforms: (setUniform, drawingContext) => {
                // Prevent the seed from becoming too large and losing precision.
                const time = this.game.loop.time % 100000;
                setUniform('uSeed', [time * 12.3456789 + 98.7654321, time * 98.7654321 + 12.3456789]);
            }
        };

        const shader1 = this.add.shader(shaderConfig, 240, 300, 200, 100);

        shaderAdditions.pop();
        shaderAdditions.push({
            name: 'GrayProcess',
            additions: { fragmentProcess: randomGrayProcess }
        });

        const shader2 = this.add.shader(shaderConfig, 640, 300, 200, 100);

        shaderAdditions.pop();
        shaderAdditions.push({
            name: 'ColorProcess',
            additions: { fragmentProcess: randomColorProcess }
        });

        const shader3 = this.add.shader(shaderConfig, 1040, 300, 200, 100);

        // Add a bloom filter to the screen.
        const parallel = this.cameras.main.filters.internal.addParallelFilters();
        parallel.top.addThreshold(0.5, 1.0);
        parallel.top.addBlur(1, 4, 4, 1, 0xddddff);
        parallel.blend.blendMode = Phaser.BlendModes.ADD;

    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1280,
    height: 720,
    scene: Example
};

const game = new Phaser.Game(config);
