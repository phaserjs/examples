const fragShader = `
#define SHADER_NAME TEST

precision mediump float;

varying vec2 outTexCoord;
uniform sampler2D uMainSampler;

void main(){
    // do nothing
    gl_FragColor =  texture2D(uMainSampler, outTexCoord);
}
`;

 class TestPostFxPipeline extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline{
    constructor(game) {
        super({
            game,
            // renderTarget: true,
            fragShader,
            uniforms: ['uMainSampler'],
        });
    }
}

class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    create ()
    {
        const text = this.add.text(20, 20, 'please click! post-fx pipeline: off').setFontSize(16);

        const graphics = this.add.graphics();

        graphics.fillStyle(0x00ff00).fillCircle(70, 100, 50);

        const arc = this.add.arc(120, 100, 50).setFillStyle(0xff0000, 1.0);

        arc.setMask(graphics.createGeometryMask());

        this.input.once('pointerdown', () => {

            text.text = 'post-fx pipeline: on';

            // this.cameras.main.setPostPipeline(TestPostFxPipeline);
            this.cameras.main.postFX.addPixelate(4);

        });
    }
}

const config = {
  width: 800,
  height: 600,
  scene: Example,
  parent: 'phaser-example',
  pipeline: [TestPostFxPipeline],
};

const game = new Phaser.Game(config);
