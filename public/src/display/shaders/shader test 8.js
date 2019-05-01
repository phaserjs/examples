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
    this.load.image('logo', 'assets/sprites/phaser3-logo-small.png');
    this.load.image('pic', 'assets/pics/rick-and-morty-by-sawuinhaff-da64e7y.png');
    this.load.glsl('bundle', 'assets/shaders/bundle2.glsl.js');
}

function create ()
{
    var shader = this.add.shader('HSL', 400, 300, 512, 512).setVisible(false);

    var mask = new Phaser.Display.Masks.BitmapMask(this, shader);

    console.log(mask);

    // var pic = this.add.image(400, 300, 'pic');
    var pic = this.add.image(400, 300, 'pic').setMask(mask);

    this.add.image(400, 300, 'logo');
}
