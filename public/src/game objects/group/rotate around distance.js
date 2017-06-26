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

var group;

function preload ()
{
    this.load.image('ball', 'assets/sprites/shinyball.png');
}

function create ()
{
    group = this.add.group();

    for (var i = 0; i < 32; i++)
    {
        var image = this.add.image(i * 32, i * 2, 'ball');

        group.add(image);
    }
}

function update ()
{
    group.rotateAroundDistance({ x: 400, y: 300 }, 0.02, 200);
}
