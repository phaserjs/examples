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
    this.load.image('pic', 'assets/pics/rick-and-morty-by-sawuinhaff-da64e7y.png');
    this.load.glsl('test', 'assets/shaders/bundle.glsl.js');
}

function create ()
{
    this.add.image(400, 300, 'pic');

    var s1 = this.cache.shader.get('Shader1');
    var s2 = this.cache.shader.get('Plasma Mask');

    // console.log(s1);
    // console.log(s2);

    var s = this.add.shader('Shader1', 400, 300, 512, 512);

    console.log(s);
}
