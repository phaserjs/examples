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

var game = new Phaser.Game(config);
console.log(game)


function preload ()
{
    this.load.image('bg', 'assets/textures/rock-ore.jpg');

    customPipeline = game.renderer.addPipeline('Custom', new CustomPipeline(game));
    customPipeline.setFloat2('resolution', game.config.width, game.config.height);

}

function create ()
{

    var bg = this.add.image(400, 300, 'bg').setTint(0xff3f000);

    particles = this.add.particles('nonexistantkey');

    emitter = particles.createEmitter({
        x: 600,
        y: 100,
        angle: { min: 0, max: 380 },
        speed: 400,
        gravityY: 200,
        lifespan: { min: 500, max: 4000 },
        blendMode: 'ADD'
    });

    this.cameras.main.setRenderToTexture(customPipeline);
}

function update(){
    customPipeline.setFloat1('time', this.time.now /1000);
    particles.setRotation(Math.sin(this.time.now/10000));
}


var CustomPipeline = new Phaser.Class({

    Extends: Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline,

    initialize:
    //http://roy.red/slitscan-.html
        function CustomPipeline(game) {
            Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline.call(this, {
                game: game,
                renderer: game.renderer,
                fragShader: `
                precision mediump float;
    
                uniform float time;

                uniform sampler2D uMainSampler;
                uniform vec2 resolution;
                varying vec2 outTexCoord;
        

                #define WARPSPEED 0.5

                vec4 tunnel()
                {
                    vec2 pt = ((gl_FragCoord.xy / resolution.xy) - 0.5) * vec2(resolution.x/resolution.y,1) ;
        
                    //approach gate

                    float rInv =   (exp(WARPSPEED* (time * time)/10. - 7.5)  * 0.5) / length(pt);
                    pt = pt * rInv + vec2(rInv  + mod(time,0.65) , .005) ;
                    return texture2D(uMainSampler, pt) * (WARPSPEED* time/10.)+ rInv; 
                    
                    //static warp
                    
                    //float rInv =   0.025 /length(pt);
                    //pt = pt * rInv + vec2(rInv  + mod(time,0.75) , 0.05) ;
                    
                    // light gate
                    //return texture2D(uMainSampler, pt) + rInv *2. ;
                    
                    //dark gate
                    //return texture2D(uMainSampler, pt) - rInv /2. + 0.25;
                }
            
                void main(void)
                {
                    gl_FragColor = tunnel();
                }   
                `
            });
        }

});