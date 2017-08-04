var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var image;
var t = 0;
var light = null;
var game = new Phaser.Game(config);
var cameras = [];

function preload ()
{
    this.load.image('mainImg', 'assets/sprites/phaser2.png');
    this.load.image('normImg', 'assets/normal-maps/phaser2_n.png');
}
function create ()
{
    var lights = this.add.lightLayer();

    for (var i = 0; i < 200; ++i)
    {
        var logo = this.add.image(Math.random() * 800, Math.random() * 600, 'mainImg');
        logo.setScale(Math.random());
        lights.addSprite(logo, this.textures.get('normImg'));
    }

    lights.setAmbientLightColor(0.0, 0.0, 0.1);
    light = lights.addLight(200, 150, 0.1, 1, 1.1, 1, 1.0, 0);

    cameras[0] = this.cameras.main;
    cameras[1] = this.cameras.add(400, 0, 400, 300);
    cameras[2] = this.cameras.add(0, 300, 400, 300);
    cameras[3] = this.cameras.add(400, 300, 400, 300);

    this.cameras.main.setSize(400, 300);
    cameras[0].fade(2000);
}
function update ()
{
    cameras[1].scrollX = Math.sin(t) * 200;
    cameras[2].shake(100);
    cameras[3].flash(4000);
    if (cameras[0]._fadeAlpha >= 1.0)
    {
        cameras[0]._fadeAlpha = 0.0;
        cameras[0].fade(2000);
    }
    light.x = 200 + Math.cos(t) * 200;
    light.y = 150 + Math.sin(t) * 200;
    t += 0.01;
}

