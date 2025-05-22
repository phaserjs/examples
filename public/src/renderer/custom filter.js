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

const FILTER_NAME = 'FilterColor';

const FilterColor = {
    Controller: class ControllerColor extends Phaser.Filters.Controller {
        constructor(camera) {
            super(camera, FILTER_NAME);
            this.hueSpeed = 0.001;
        }
        setHueSpeed(speed = 0.001) {
            this.hueSpeed = speed;
            return this;
        }
    },
    Filter: class FilterColor extends Phaser.Renderer.WebGL.RenderNodes.BaseFilterShader {
        constructor(manager) {
            super(FILTER_NAME, manager, null, hueFragShader);
        }
        setupUniforms(controller, drawingContext) {
            const programManager = this.programManager;
            programManager.setUniform('uTime', drawingContext.renderer.game.loop.time);
            programManager.setUniform('uSpeed', controller.hueSpeed);
        }
    }
};

class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('fish', 'assets/tests/pipeline/fish.png');
        this.load.image('flower', 'assets/tests/pipeline/flower.png');
    }

    create ()
    {
        this.add.sprite(200, 300, 'fish');
        this.filterController = new FilterColor.Controller();
        const flower = this.add.sprite(400, 300, 'flower').enableFilters().filters.internal.add(this.filterController);
        this.add.sprite(600, 300, 'fish');
        this.input.on('pointerdown', () => {
            this.filterController.setHueSpeed(0.001 + Math.random() * 0.01);
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
    renderNodes: { 'FilterColor': FilterColor.Filter }
};

let game = new Phaser.Game(config);
