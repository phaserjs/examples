const colorWarp = `
vec3 p = vec3(outTexCoord, sin(uTime * 0.2));
for (int i = 0; i < 10; i++)
{
    p.xzy = vec3(1.3,0.999,0.7)*(abs((abs(p)/dot(p,p)-vec3(1.0,1.0,cos(uTime * 0.2)*0.5))));
}
fragColor.rgb *= p;
`;

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
        const renderNodeManager = this.renderer.renderNodes;

        // Create a custom render node.
        this.customBatchHandler = new Phaser.Renderer.WebGL.RenderNodes.BatchHandlerQuad(renderNodeManager);

        // An addition appends code into the shader at specific locations.
        // This shader adds a uniform variable to the shader,
        // and then uses it to warp the color of the texture during fragment processing.
        this.customBatchHandler.programManager.addAddition({
            name: 'ColorWarp',
            additions: {
                fragmentHeader: 'uniform float uTime;',
                fragmentProcess: colorWarp
            }
        });

        this.add.sprite(100, 300, 'pudding');
        const crab = this.add.sprite(400, 300, 'crab').setScale(1.5);
        crab.setRenderNodeRole('BatchHandler', this.customBatchHandler);
        const fish = this.fish = this.add.sprite(400, 300, 'fish');
        fish.setRenderNodeRole('BatchHandler', this.customBatchHandler);
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
                this.fish.setRenderNodeRole('BatchHandler', this.customBatchHandler);
            }

        });
    }

    update ()
    {
        this.customBatchHandler.programManager.setUniform('uTime', this.t);

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
