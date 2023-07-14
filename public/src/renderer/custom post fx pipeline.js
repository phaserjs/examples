const hueFragShader = `
#define SHADER_NAME HUE_FS

precision mediump float;

uniform sampler2D uMainSampler;
uniform float uTime;
uniform float uSpeed;

varying vec2 outTexCoord;
varying float outTexId;
varying vec4 outTint;
varying vec2 fragCoord;

void main()
{
    vec4 texture = texture2D(uMainSampler, outTexCoord);

    float c = cos(uTime * uSpeed);
    float s = sin(uTime * uSpeed);

    mat4 r = mat4(0.299, 0.587, 0.114, 0.0, 0.299, 0.587, 0.114, 0.0, 0.299, 0.587, 0.114, 0.0, 0.0,  0.0, 0.0, 1.0);
    mat4 g = mat4(0.701, -0.587, -0.114, 0.0, -0.299, 0.413, -0.114, 0.0, -0.300, -0.588, 0.886, 0.0, 0.0, 0.0, 0.0, 0.0);
    mat4 b = mat4(0.168, 0.330, -0.497, 0.0, -0.328, 0.035, 0.292, 0.0, 1.250, -1.050, -0.203, 0.0, 0.0, 0.0, 0.0, 0.0);

    mat4 hueRotation = r + g * c + b * s;

    gl_FragColor = texture * hueRotation;
}
`;

class ColorPostFX extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline
{
    constructor (game)
    {
        super({
            game,
            name: 'ColorPostFX',
            fragShader: hueFragShader
        });

        this._hueSpeed = 0.001;
    }

    onPreRender ()
    {
        this.set1f('uTime', this.game.loop.time);
        this.set1f('uSpeed', this._hueSpeed);
    }

    get hueSpeed ()
    {
        return this._hueSpeed;
    }

    set hueSpeed (value)
    {
        this._hueSpeed = value;
    }
}

class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('fish', 'assets/tests/pipeline/fish.png');
        this.load.image('flower', 'assets/tests/pipeline/flower.png');
    }

    create ()
    {
        this.add.sprite(200, 300, 'fish');

        const flower = this.add.sprite(400, 300, 'flower').setPostPipeline('ColorPostFX');

        this.add.sprite(600, 300, 'fish');

        const colorPipeline = flower.getPostPipeline('ColorPostFX');

        this.input.on('pointerdown', () => {

            colorPipeline.hueSpeed = 0.001 + Math.random() * 0.01;

        });
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#0a0067',
    parent: 'phaser-example',
    scene: Example,
    pipeline: { 'ColorPostFX': ColorPostFX }
};

let game = new Phaser.Game(config);
