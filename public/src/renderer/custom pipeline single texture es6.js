const fragShader = `
precision mediump float;

uniform sampler2D uMainSampler;
uniform float uTime;

varying vec2 outTexCoord;
varying vec4 outTint;

void main()
{
    vec4 texture = texture2D(uMainSampler, outTexCoord);

    texture *= vec4(outTint.rgb * outTint.a, outTint.a);

    vec3 p = vec3(outTexCoord.xy,sin(uTime * 0.2));

    for (int i = 0; i < 10; i++)
    {
        p.xzy = vec3(1.3,0.999,0.7)*(abs((abs(p)/dot(p,p)-vec3(1.0,1.0,cos(uTime * 0.2)*0.5))));
    }

    gl_FragColor.rgb = texture.rgb * p;
    gl_FragColor.a = texture.a;
}
`;

// This custom render node uses a custom shader to warp the color of the texture.
class CustomSingleRender extends Phaser.Renderer.WebGL.RenderNodes.BatchHandlerQuadSingle
{
    constructor (manager)
    {
        super (manager, {
            name: 'CustomSingleRender',
            shaderName: 'SINGLE_COLOR_WARP',
            fragmentSource: fragShader,
            maxTexturesPerBatch: 1
        });
    }
}

class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.t = 0;
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.setPath('assets/tests/pipeline/');

        this.load.image('cake', 'cake.png');
        this.load.image('crab', 'crab.png');
        this.load.image('fish', 'fish.png');
        this.load.image('pudding', 'pudding.png');
    }

    create ()
    {
        this.customRenderNode = new CustomSingleRender(this.renderer.renderNodes);

        this.add.sprite(100, 300, 'pudding');
        this.crab = this.add.sprite(400, 300, 'crab').setScale(1.5);
        this.crab.setRenderNodeRole('BatchHandler', this.customRenderNode);
        this.fish = this.add.sprite(400, 300, 'fish');
        this.fish.setRenderNodeRole('BatchHandler', this.customRenderNode);
        this.add.sprite(700, 300, 'cake');

        this.input.on('pointermove', pointer => {

            this.fish.x = pointer.worldX;
            this.fish.y = pointer.worldY;

        });

        this.input.on('pointerdown', () => {

            if (this.fish.customRenderNodes.BatchHandler)
            {
                this.fish.setRenderNodeRole('BatchHandler', null);
            }
            else
            {
                this.fish.setRenderNodeRole('BatchHandler', this.customRenderNode);
            }

        });
    }

    update ()
    {
        this.customRenderNode.programManager.setUniform('uTime', this.t);

        this.t += 0.05;

        this.fish.rotation -= 0.01;
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#0a0067',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
