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
var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('mainImg', 'assets/sprites/phaser2.png');
    this.load.image('normImg', 'assets/normal-maps/phaser2_n.png');
}

function create ()
{
    var lights = this.add.lightLayer(0, 0, 800, 600);
    var logo = this.add.image(400, 500, 'mainImg');

    lights.addSprite(logo, this.textures.get('normImg'));
}

function update ()
{
}