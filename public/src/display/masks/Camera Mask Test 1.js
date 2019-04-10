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

function preload ()
{
    this.load.image('image', 'assets/pics/sao-sinon.png');
    this.load.image('phaser2', 'assets/sprites/phaser2.png');
}

function create ()
{
    var shape = this.make.graphics();

    shape.fillStyle(0xffffff);
    shape.slice(400, 300, 200, Phaser.Math.DegToRad(340), Phaser.Math.DegToRad(30), true);
    shape.fillPath();

    var mask = shape.createGeometryMask();

    this.cameras.main.setMask(mask);

    this.add.image(400, 300, 'image');
    this.add.image(400, 300, 'phaser2');
}
