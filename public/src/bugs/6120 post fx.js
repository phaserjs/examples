const frag = `\
#ifdef GL_FRAGMENT_PRECISION_HIGH
#define highmedp highp
#else
#define highmedp mediump
#endif
precision highmedp float;
// Scene buffer
uniform sampler2D uMainSampler;
varying vec2 outTexCoord;
// Effect parameters
uniform float intensity;
void main (void) {
  vec4 front = texture2D(uMainSampler, outTexCoord);
  float gray = dot(front.rgb, vec3(0.299, 0.587, 0.114));
  gl_FragColor = mix(front, vec4(gray, gray, gray, front.a), intensity);
}\
`;

  class GrayScalePostFxPipeline extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline {
    constructor(game) {
      super({
        game: game,
        renderTarget: true,
        fragShader: frag,
        // uniforms: [
        //   'uMainSampler',
        //   'intensity'
        // ]
      });

      this._intensity = 1;
    }

    onPreRender() {
      this.set1f('intensity', this._intensity);
    }

    // intensity
    get intensity() {
      return this._intensity;
    }

    set intensity(value) {
      this._intensity = Clamp(value, 0, 1);
    }

    setIntensity(value) {
      this.intensity = value;
      return this;
    }
  }

  class GrayScalePipelinePlugin extends Phaser.Plugins.BasePlugin {

    constructor(pluginManager) {
      super(pluginManager);
    }

    start() {

      console.log('plugin start');

      var eventEmitter = this.game.events;

      eventEmitter.on('destroy', this.destroy, this);

      this.game.renderer.pipelines.addPostPipeline('rexGrayScalePostFx', GrayScalePostFxPipeline);
    }
  }

  class Demo extends Phaser.Scene {
    constructor() {
      super({
        key: 'examples'
      })
    }

    preload ()
    {
      this.load.image('bob', 'assets/sprites/apple.png');
    }

    create() {
        this.add.sprite(100, 100, 'bob'); // Disappear in ios 15.4
        const obj1 = this.add.sprite(110, 110, 'bob');
        obj1.setPostPipeline(GrayScalePostFxPipeline);
        this.add.sprite(120, 120, 'bob');

    }
  }

  var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Demo,
    plugins: {
      global: [{
        key: 'rexGrayScalePipeline',
        plugin: GrayScalePipelinePlugin,
        start: true
      }]
    }
  };

  var game = new Phaser.Game(config);
