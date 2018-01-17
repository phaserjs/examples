var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var image;
var light = null;
var game = new Phaser.Game(config);
var colorIdx = 1;
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
    this.load.image('mainImg', 'assets/pics/equality-by-ragnarok.png');
    this.load.image('normImg', 'assets/normal-maps/equality-by-ragnarok_n.png');
}

function create ()
{
    var lights = this.add.lightLayer();

    var pic = this.add.image(-100, 0, 'mainImg').setOrigin(0).setScale(0.7);

    lights.addSprite(pic, this.textures.get('normImg'));

    lights.addLight(217, 100, 0.1, 200, 1, 0, 0, 1.0, 0);

    this.input.on('pointermove', function (pointer) {

        if (light !== null)
        {
            light.x = pointer.x;
            light.y = pointer.y;
        }

    });

    this.input.on('pointerdown', function (pointer) {

        var color = colors[colorIdx];

        colorIdx = (colorIdx + 1) % colors.length;

        light = lights.addLight(pointer.x, pointer.y, 0.1, 200, color[0], color[1], color[2], 1.0, 0);

    });
}
