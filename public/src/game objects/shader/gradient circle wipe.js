class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('pic1', 'assets/pics/robot-ai.jpg');
        this.load.image('pic2', 'assets/pics/baal-ai.jpg');

        this.load.glsl('gradient-color', 'assets/shaders/gradients/gradient-color.glsl');
        this.load.glsl('gradient-process', 'assets/shaders/gradients/gradient-process.glsl');
        this.load.glsl('srgb', 'assets/shaders/gradients/srgb-color.glsl');
        this.load.glsl('value-circle', 'assets/shaders/gradients/value-circle.glsl');
    }

    create ()
    {
        this.add.image(400, 300, 'pic1');

        const sprite = this.add.image(400, 300, 'pic2');

        // Establish a progress value for the shader.
        let progress = 0;
        const feather = 0.05;

        const getSource = (key) => this.cache.shader.get(key).glsl;
        const gradientShader = this.add.shader({
            name: 'Gradient',
            shaderAdditions: [
                // This addition controls a circle gradient.
                // It must be defined in the shader before the gradient function is called.
                {
                    name: 'CIRCLE',
                    additions: { fragmentHeader: getSource('value-circle') }
                },
                // This addition defines standard gradient functionality.
                {
                    name: 'STANDARD',
                    additions: {
                        fragmentHeader: [
                            getSource('srgb'),
                            getSource('gradient-color')
                        ].join('\n'),
                        fragmentProcess: getSource('gradient-process')
                    }
                }
            ],
            setupUniforms: (setUniform) => {
                // Compute the position of the gradient from the progress value.
                const amount = progress * feather;
                const p = progress + amount;

                // Constant feather:
                const f = feather;

                // Proportional feather (create a radial gradient):
                // const f = p;

                setUniform('center', [0.5, 0.5]);
                setUniform('radius', p);
                setUniform('feather', f);
                setUniform('scale', [1, 800 / 600]); // Compensate for non-square aspect ratio.
                setUniform('color1', [1, 1, 1, 1]); // Interior color.
                setUniform('color2', [0, 0, 0, 0]); // Exterior color.
                setUniform('steps', 0); // Smooth gradient.
                setUniform('repeat', 1); // No tiling.
                setUniform('offset', 0); // No offset.
            }
        }, 400, 300, 800, 600)
        .setRenderToTexture('gradient');

        sprite.enableFilters().filters.internal.addMask('gradient');

        this.input.on('pointermove', pointer => {

            // Get the distance in normalized space.
            progress = Phaser.Math.Distance.Between(0.5, 0.5, pointer.worldX / 800, pointer.worldY / 600);

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#0a0067',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
