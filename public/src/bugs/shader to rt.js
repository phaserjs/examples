var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#009900',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var rt;
var grid;
var logo;
var controls;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.glsl('bundle', 'assets/shaders/bundle2.glsl.js');
    this.load.image('logo', 'assets/sprites/phaser3-logo-small.png');
    this.load.image('grid', 'assets/pics/uv-grid-diag.png');
}

function create ()
{
    var shader = this.add.shader('Marble', 0, 0, 256, 256);

    shader.setRenderToTexture('wibble');

    var shaderTexture = this.textures.get('wibble');

    var rt = this.add.renderTexture(0, 0, 512, 512);

    rt.draw('logo', 0, 0);

    this.input.on('pointerdown', function () {
    });
}

function update (time, delta)
{
    // rt.clear();
    // rt.draw(grid);
}
