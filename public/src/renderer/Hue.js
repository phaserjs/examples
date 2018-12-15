var HuePipeline = new Phaser.Class({

    Extends: Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline,

    initialize:

        function HuePipeline(game) {
            Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline.call(this, {
                game: game,
                renderer: game.renderer,
                fragShader: `
            precision mediump float;

            varying vec2 outTexCoord;
            varying vec4 outTint;

            uniform sampler2D uMainSampler;
            uniform float time;

            #define SPEED 10.0

            void main(void)
            {
                float c = cos(time * SPEED);
                float s = sin(time * SPEED);

                mat4 hueRotation = mat4(0.299, 0.587, 0.114, 0.0, 0.299, 0.587, 0.114, 0.0, 0.299, 0.587, 0.114, 0.0, 0.0, 0.0, 0.0, 1.0) + mat4(0.701, -0.587, -0.114, 0.0, -0.299, 0.413, -0.114, 0.0, -0.300, -0.588, 0.886, 0.0, 0.0, 0.0, 0.0, 0.0) * c + mat4(0.168, 0.330, -0.497, 0.0, -0.328, 0.035, 0.292, 0.0, 1.250, -1.050, -0.203, 0.0, 0.0, 0.0, 0.0, 0.0) * s;

                vec4 pixel = texture2D(uMainSampler, outTexCoord);

                gl_FragColor = pixel * hueRotation * outTint;
            }   
            `
            });
        }

});

var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var image;
var time = 0;

var game = new Phaser.Game(config);

function preload() 
{
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');

    HuePipeline = game.renderer.addPipeline('Hue', new HuePipeline(game));
}

function create() 
{
    image = this.add.image(400, 300, 'logo').setPipeline('Hue');
}

function update() 
{
    HuePipeline.setFloat1('time', time);

    time += 0.005;
}
