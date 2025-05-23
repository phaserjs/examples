class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('stones', 'assets/normal-maps/stones.png');
        this.load.image('stones_normal', 'assets/normal-maps/stones_n_standard.png');

        this.load.glsl('gradient-color', 'assets/shaders/gradients/gradient-color.glsl');
        this.load.glsl('gradient-process', 'assets/shaders/gradients/gradient-process.glsl');
        this.load.glsl('srgb', 'assets/shaders/gradients/srgb-color.glsl');
        this.load.glsl('value-bilinear', 'assets/shaders/gradients/value-bilinear.glsl');
    }

    create ()
    {
        // Background.
        this.add.image(640, 360, 'stones').setScale(1.5);

        // Gradient texture.

        const getSource = (key) => this.cache.shader.get(key).glsl;

        const gradient = this.add.shader({
            name: 'Gradient',
            shaderAdditions: [
                // This addition controls a bilinear gradient.
                // It must be defined in the shader before the gradient function is called.
                {
                    name: 'BILINEAR',
                    additions: { fragmentHeader: getSource('value-bilinear') }
                },
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
                const period = 8;
                const progress = (this.game.loop.time / 1000) % period;
                const feather = 0.4;

                const position = progress - period / 2;

                setUniform('positionFrom', [0, 0]);
                setUniform('positionTo', [feather, 0.2 * feather]);
                setUniform('color1', [0, 0, 0, 0]);
                setUniform('color2', [0.8, 0.6, 0.2, 1]);
                setUniform('steps', 0);
                setUniform('repeat', 1);
                setUniform('offset', position);
            }
        }, 640, 360, 1024, 1024);

        gradient
            .setDisplaySize(1536, 1536)
            .setBlendMode(Phaser.BlendModes.ADD)
            .enableFilters();
        gradient.filters.internal.addDisplacement('stones_normal', 0.5, 0.5);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: '#2f3640',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
