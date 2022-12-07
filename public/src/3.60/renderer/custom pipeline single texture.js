class Example extends Phaser.Scene
{
    customPipeline;
    time = 0;
    bunny;

    preload ()
    {
        this.load.image('beball', 'assets/sprites/beball1.png');
        this.load.image('atari', 'assets/sprites/atari400.png');
        this.load.image('bikkuriman', 'assets/sprites/bikkuriman.png');
        this.load.image('bunny', 'assets/sprites/bunny.png');
    }

    create ()
    {
        this.customPipeline = this.renderer.pipelines.add('Custom', new CustomPipeline(game));

        this.customPipeline.set2f('uResolution', game.config.width, game.config.height);

        this.add.sprite(100, 300, 'beball');
        this.add.sprite(400, 300, 'atari').setPipeline('Custom');
        this.bunny = this.add.sprite(400, 300, 'bunny').setPipeline('Custom');
        this.add.sprite(700, 300, 'bikkuriman');

        this.input.on('pointermove', pointer =>
        {
            this.bunny.x = pointer.x;
            this.bunny.y = pointer.y;
        }, this);

        this.input.on('pointerdown', pointer =>
        {

            if (this.bunny.pipeline === this.customPipeline)
            {
                this.bunny.resetPipeline();
            }
            else
            {
                this.bunny.setPipeline('Custom');
            }

        }, this);
    }

    update ()
    {
        this.customPipeline.set1f('uTime', this.time);

        this.time += 0.05;

        this.bunny.rotation += 0.01;
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

class CustomPipeline extends Phaser.Renderer.WebGL.Pipelines.SinglePipeline
{
    constructor ()
    {
        super({
            game: game,
            fragShader: `
            precision mediump float;

            uniform sampler2D uMainSampler;
            uniform vec2 uResolution;
            uniform float uTime;

            varying vec2 outTexCoord;
            varying vec4 outTint;

            vec4 plasma()
            {
                vec2 pixelPos = gl_FragCoord.xy / uResolution * 20.0;
                float freq = 0.8;
                float value =
                    sin(uTime + pixelPos.x * freq) +
                    sin(uTime + pixelPos.y * freq) +
                    sin(uTime + (pixelPos.x + pixelPos.y) * freq) +
                    cos(uTime + sqrt(length(pixelPos - 0.5)) * freq * 2.0);

                return vec4(
                    cos(value),
                    sin(value),
                    sin(value * 3.14 * 2.0),
                    cos(value)
                );
            }

            void main()
            {
                vec4 texture = texture2D(uMainSampler, outTexCoord);

                texture *= vec4(outTint.rgb * outTint.a, outTint.a);

                gl_FragColor = texture * plasma();
            }
            `,
            uniforms: [
                'uProjectionMatrix',
                'uViewMatrix',
                'uModelMatrix',
                'uMainSampler',
                'uResolution',
                'uTime'
            ]
        });
    }
}

const game = new Phaser.Game(config);
