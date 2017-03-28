var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var layer;

function preload ()
{
    this.load.image('ball', 'assets/sprites/shinyball.png');
}

function create ()
{
    layer = this.add.layer();

    for (var i = 0; i < 32; i++)
    {
        var image = this.add.image(i * 32, i * 2, 'ball');

        layer.add(image);
    }
}

function update ()
{
    layer.rotateAroundDistance({ x: 400, y: 300 }, 0.02, 200);
}
