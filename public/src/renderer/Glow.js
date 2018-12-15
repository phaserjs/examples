var GlowPipeline = new Phaser.Class({

    Extends: Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline,

    initialize:

    function GlowPipeline (game)
    {
        Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline.call(this, {
            game: game,
            renderer: game.renderer,
            fragShader: `
                precision lowp float;
                varying vec2 outTexCoord;
                uniform sampler2D uMainSampler;
                uniform float time;
                uniform float strength;
                uniform vec4 glowColor;

                void main() {
                    vec4 tc = texture2D(uMainSampler, outTexCoord);

                    vec4 sum = vec4(0);

                    float pulse = abs(sin(time));

                    for(int xx = -4; xx <= 4; xx++) {
                        for(int yy = -4; yy <= 4; yy++) {
                            float dist = sqrt(float(xx*xx) + float(yy*yy)) / 600.0;
                            
                            sum += texture2D(uMainSampler, outTexCoord + vec2(xx, yy) * dist);
                        }
                    }
                    //remove pulse for static glow
                    gl_FragColor = tc + (sum * glowColor * strength * pulse);
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

var time = 0;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('atari', 'assets/sprites/atari400.png');

    GlowPipeline = game.renderer.addPipeline('Glow', new GlowPipeline(game));
    //rgba
    GlowPipeline.setFloat4('glowColor', 0.0, 1.0, 1.0, 1.0);
    GlowPipeline.setFloat1('strength', .01);

}

function create ()
{
    logo = this.add.image(400, 300, 'logo').setPipeline('Glow');
    atari = this.add.image(400, 500, 'atari').setPipeline('Glow');
}

function update ()
{
    GlowPipeline.setFloat1('time', time);

    time += 0.05;
}
