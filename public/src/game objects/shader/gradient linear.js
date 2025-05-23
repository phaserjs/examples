class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('touhou', 'assets/pics/touhou1.png');

        this.load.glsl('gradient-color', 'assets/shaders/gradients/gradient-color.glsl');
        this.load.glsl('gradient-process', 'assets/shaders/gradients/gradient-process.glsl');
        this.load.glsl('srgb', 'assets/shaders/gradients/srgb-color.glsl');
        this.load.glsl('value-linear', 'assets/shaders/gradients/value-linear.glsl');
    }

    create ()
    {
        const getSource = (key) => this.cache.shader.get(key).glsl;
        const gradientShader = this.add.shader(
            {
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
                    setUniform('positionFrom', [0, 0]);
                    setUniform('positionTo', [0, 1]);
                    setUniform('color1', [0, 1, 0, 1]);
                    setUniform('color2', [0, 0, 1, 1]);
                    setUniform('steps', 16);
                    setUniform('repeat', 1);
                }
            }, 640, 360, 1280, 720);

        const sprite = this.add.image(640, 360, 'touhou');
        sprite.enableFilters().filters.internal.addPixelate();
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
