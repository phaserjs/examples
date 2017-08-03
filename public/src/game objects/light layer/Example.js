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

var image;
var light = null;
var game = new Phaser.Game(config);
var colorIdx = 0;
var colors = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 0],
    [1, 0, 1],
    [0, 1, 1]
];

function preload ()
{
    this.load.image('mainImg', 'assets/sprites/phaser2.png');
    this.load.image('normImg', 'assets/normal-maps/phaser2_n.png');
}
function create ()
{
    var lights = this.add.lightLayer();

    for (var i = 0; i < 1000; ++i)
    {
        var logo = this.add.image(Math.random() * 800, Math.random() * 600, 'mainImg');
        logo.setScale(Math.random());
        lights.addSprite(logo, this.textures.get('normImg'));
    }

    lights.setAmbientLightColor(0.0, 0.0, 0.1);

    this.input.events.on('POINTER_MOVE_EVENT', function (event) {
        if (light !== null)
        {
            light.x = event.x;
            light.y = event.y;
        }
    });
    this.input.events.on('POINTER_DOWN_EVENT', function (event) {
        var color = colors[colorIdx];
        colorIdx = (colorIdx + 1) % colors.length;
        light = lights.addLight(event.x, event.y, 0.1, color[0], color[1], color[2], 1.0, 0);
    });
}

