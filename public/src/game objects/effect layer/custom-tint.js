
var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

var fragSource = [
    'precision mediump float;',
    'varying vec2 v_tex_coord;',
    'uniform sampler2D u_sampler;',

    'void main(void) {',
        // The texture will be rendered with  a red tint
    '   gl_FragColor = texture2D(u_sampler, v_tex_coord) * vec4(1.0, 0.0, 0.0, 1.0);',
    
    '}'
].join('\n');

function preload ()
{
    this.load.image('myImage', 'assets/sprites/phaser1.png');
}

function create ()
{
    var artsyEffect = this.add.effectLayer(
                            // This represents the position
            0, 0, 800, 600, // and size of the render target.

            'artsyEffect',  // We require this key name so
                            // we can cache the shader.

            fragSource      // The GLSL fragment shader source
        );

    // We create our game object as usual
    var image = this.add.image(400, 300, 'myImage');

    // Finally we add our image to the artsyEffect layer
    artsyEffect.add(image);
}

