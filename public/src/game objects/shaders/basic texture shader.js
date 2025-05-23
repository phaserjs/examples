class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('checker', 'assets/pics/checker.png');
    }

    create ()
    {
        const frag = `
        precision mediump float;

        uniform sampler2D iChannel0;

        varying vec2 outTexCoord;

        void main ()
        {
            vec4 pixel = texture2D(iChannel0, outTexCoord);

            gl_FragColor = vec4(outTexCoord.xyx * pixel.rgb, 1.0);
        }
        `;

        const shader = this.add.shader({
            name: 'simpleTexture',
            fragmentSource: frag,
            initialUniforms: {
                iChannel0: 0
            }
        }, 400, 300, 800, 600, [ 'checker' ]);

        //  Or, set the texture like this:

        // shader.setUniform('iChannel0', 0);
        // shader.setTextures([ 'checker' ]);
    }
}

const game = new Phaser.Game({
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
});
