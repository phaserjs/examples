class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('checker', 'assets/pics/bw-face.png');
    }

    create ()
    {
        const frag = `
        precision mediump float;

        uniform float time;
        uniform vec2 resolution;
        uniform sampler2D iChannel0;
        uniform float pixelSize;

        varying vec2 fragCoord;

        vec4 texture(sampler2D s, vec2 c) { return texture2D(s,c); }

        void mainImage (out vec4 fragColor, in vec2 fragCoord)
        {
            vec2 uv = fragCoord / resolution.xy;

            uv = floor(uv * resolution.x * pixelSize) / (resolution.x * pixelSize);

            fragColor = texture(iChannel0, uv);
        }

        void main (void)
        {
            mainImage(gl_FragColor, fragCoord.xy);
        }
        `;

        const base = new Phaser.Display.BaseShader(
            'simpleTexture',
            frag,
            null,
            {
                pixelSize: { type: '1f', value: 0.2 }
            }
        );

        const shader = this.add.shader(base, 400, 300, 800, 600, [ 'checker' ]);

        shader.setUniform('pixelSize.value', 0.2);

        console.log(shader);
    }
}

const game = new Phaser.Game({
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
});
