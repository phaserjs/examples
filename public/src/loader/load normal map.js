var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('robot', [ 'assets/pics/equality-by-ragnarok.png', 'assets/normal-maps/equality-by-ragnarok_n.png' ]);
}

function create ()
{
    var robot = this.add.image(-300, 0, 'robot').setOrigin(0);

    var canvasTexture = this.textures.createCanvas('normalMap', 400, 600);
    var canvas = canvasTexture.getSourceImage();
    var context = canvas.getContext('2d');

    context.drawImage(robot.texture.dataSource[0].image, -300, 0);

    var robotMap = this.add.image(400, 0, 'normalMap').setOrigin(0);
}
