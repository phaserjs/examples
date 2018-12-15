var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var BlurPipeline = new Phaser.Class({

    Extends: Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline,

    initialize:
        //https://github.com/mattdesl/lwjgl-basics/wiki/ShaderLesson5
        function BlurPipeline(game) {
            Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline.call(this, {
                game: game,
                renderer: game.renderer,
                fragShader: `
            precision mediump float;

            //"in" attributes from our vertex shader
            varying vec4 outColor;
            varying vec2 outTexCoord;

            //declare uniforms
            uniform sampler2D u_texture;
            uniform vec2 resolution;
            uniform float radius;
            uniform vec2 dir;

            void main() {
            //this will be our RGBA sum
            vec4 sum = vec4(0.0);

            //our original texcoord for this fragment
            vec2 tc = outTexCoord;

            //the amount to blur, i.e. how far off center to sample from 
            vec2 strength = dir * (radius / resolution.xy) ;

            //apply blurring, using a 9-tap filter with predefined gaussian weights

            sum += texture2D(u_texture, tc - 4.0 * strength) * 0.0162162162;
            sum += texture2D(u_texture, tc - 3.0 * strength) * 0.0540540541;
            sum += texture2D(u_texture, tc - 2.0 * strength) * 0.1216216216;
            sum += texture2D(u_texture, tc - 1.0 * strength) * 0.1945945946;

            sum += texture2D(u_texture, tc) * 0.2270270270;

            sum += texture2D(u_texture, tc + 1.0 * strength) * 0.1945945946;
            sum += texture2D(u_texture, tc + 2.0 * strength) * 0.1216216216;
            sum += texture2D(u_texture, tc + 3.0 * strength) * 0.0540540541;
            sum += texture2D(u_texture, tc + 4.0 * strength) * 0.0162162162;

            gl_FragColor =  sum;
            }

            `
            });
        }


});

var game = new Phaser.Game(config);

function preload() 
{
    this.load.image('atari', 'assets/sprites/atari400.png');

    blurPipeline = game.renderer.addPipeline('Blur', new BlurPipeline(game));
    blurPipeline.setFloat2('resolution', game.config.width, game.config.height);
    blurPipeline.setFloat1('radius', 4.0);
    blurPipeline.setFloat2('dir', 1.0, 1.0);
}

function create() 
{
    this.atari = this.add.sprite(400, 300, 'atari').setInteractive();
    this.add.text(32, 32, "Hover over sprite to blur");

    this.atari.on('pointerover', function (pointer) 
    {
        if (this.atari.pipeline != blurPipeline) 
        {
            this.atari.setPipeline('Blur');
        }

    }, this);

    this.atari.on('pointerout', function (pointer) 
    {
        this.atari.resetPipeline();

    }, this);

}