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
        this.load.glsl('value-linear', 'assets/shaders/gradients/value-linear.glsl');
    }

    create ()
    {
        this.add.image(400, 300, 'pic1');

        const sprite = this.add.image(400, 300, 'pic2');

        // Establish a progress value for the shader.
        let progress = 0;
        let width = 0.02;

        const getSource = (key) => this.cache.shader.get(key).glsl;
        const gradientShader = this.add.shader({
            name: 'Gradient',
            shaderAdditions: [
                // This addition controls a linear gradient.
                // It must be defined in the shader before the gradient function is called.
                {
                    name: 'LINEAR',
                    additions: { fragmentHeader: getSource('value-linear') }
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
                // We allow the gradient to move off-screen to the left and right
                // by the width of the gradient.
                const w = width / 2;
                const amount = Phaser.Math.Linear(-w, w, progress);
                const p = progress + amount;

                setUniform('positionFrom', [p - w, 0]);
                setUniform('positionTo', [p + w, 0]);
                setUniform('color1', [0, 0, 0, 0]);
                setUniform('color2', [1, 1, 1, 1]);
                setUniform('steps', 0);
                setUniform('repeat', 1);
            }
        }, 400, 300, 800, 600)
        .setRenderToTexture('gradient');

        sprite.enableFilters().filters.internal.addMask('gradient');

        this.input.on('pointermove', pointer => {

            progress = pointer.worldX / 800;

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
