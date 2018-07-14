var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


var CustomPipeline = new Phaser.Class({

    Extends: Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline,

    initialize:

    function CustomPipeline (game)
    {
        Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline.call(this, {
            game: game,
            renderer: game.renderer,
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
                vec4 texel = texture2D(uMainSampler, outTexCoord);
                texel *= vec4(outTint.rgb * outTint.a, outTint.a);
                gl_FragColor = texel * plasma();
            }

            `
        });
    } 


});

var game = new Phaser.Game(config);

var bunny;

function preload() {

    this.load.image('beball', 'assets/sprites/beball1.png');
    this.load.image('atari', 'assets/sprites/atari400.png');
    this.load.image('bikkuriman', 'assets/sprites/bikkuriman.png');
    this.load.image('bunny', 'assets/sprites/bunny.png');

    customPipeline = game.renderer.addPipeline('Custom', new CustomPipeline(game));
    customPipeline.setFloat2('uResolution', game.config.width, game.config.height);
}

function create() {

    this.add.sprite(200, 300, 'beball');

    this.add.sprite(500, 300, 'atari').setPipeline('Custom');

    bunny = this.add.sprite(400, 300, 'bunny');
    bunny.setPipeline('Custom');

    this.input.on('pointermove', function (pointer) {
        bunny.x = pointer.x;
        bunny.y = pointer.y;
    }, this);

    this.input.on('pointerdown', function (pointer) {
        if (bunny.pipeline === customPipeline)
        {
            bunny.resetPipeline();
        }
        else
        {
            bunny.setPipeline('Custom');
        }
    }, this);

    this.add.sprite(800, 300, 'bikkuriman');
}

var time = 0.0;

function update()
{
    customPipeline.setFloat1('uTime', time);
    time += 0.05;

    bunny.rotation += 0.01;
}
