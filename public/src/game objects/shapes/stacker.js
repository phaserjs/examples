var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var grid;
var gridWidth = 7;
var gridHeight = 15;
var gridSize = 24;

var game = new Phaser.Game(config);

function create ()
{
    // var r1 = this.add.rectangle(200, 200, 148, 148, 0x6666ff);

}

function startGame ()
{
    grid = [];

    for (var y = 0; y < gridHeight; y++)
    {
        grid.push([ 0, 0, 0, 0, 0, 0, 0 ]);
    }
}

function drawGrid ()
{


    for (var y = 0; y < gridHeight; y++)
    {
        for (var x = 0; x < gridWidth; x++)
        {
            this.add.rectangle(x * gridSize, y * gridSize, gridSize, gridSize, 0x2d2d2d);
        }
    }

}
