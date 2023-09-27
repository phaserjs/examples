class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('face', 'assets/pics/bw-face.png');
        this.load.image('metal', 'assets/textures/alien-metal.jpg');
        this.load.image('grass', 'assets/textures/grass.png');
        this.load.image('tiles', 'assets/textures/tiles.jpg');
        this.load.image('logo', 'assets/sprites/phaser3-logo-small.png');
    }

    create ()
    {
        const frag = `
        precision mediump float;

        uniform vec2 resolution;
        uniform float pixelSize;

        varying vec2 fragCoord;

        void main (void)
        {
            vec2 uv = fragCoord / resolution.xy;

            gl_FragColor = vec4(uv.xy, 1.0);
        }
        `;

        const base = new Phaser.Display.BaseShader(
            'pixelate',
            frag,
            null,
            {
                pixelSize: { type: '1f', value: 0.2 }
            }
        );

        const shader = this.add.shader(base, 400, 300, 800, 600, [ 'metal' ]);

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
