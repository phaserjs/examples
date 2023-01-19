const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#0f0f0f',
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload ()
{
    // this.load.plugin('FractalPlugin', 'assets/loader-tests/fractalsPlugin.js');
    this.load.plugin('FractalPlugin', '/fractalplugin/dist/FractalPlugin.js');
}

function create ()
{
    this.fractals.createImage(400, 300);
}
