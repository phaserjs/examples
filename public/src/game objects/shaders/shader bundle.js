var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.glsl('bundle', 'assets/shaders/bundle2.glsl.js');
}

function create ()
{
    //  The bundle file contains multiple shaders, all separated by a frontmatter block
    //  You can reference them by name:

    this.add.shader('Marble', 0, 0, 400, 600).setOrigin(0);
    this.add.shader('Flower Plasma', 400, 0, 400, 600).setOrigin(0);
}
