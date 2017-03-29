var config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

var graphics;
var rect;
var point;
var a = 0;

function preload ()
{
    this.load.image('chunk', 'assets/sprites/chunk.png');
}

function create ()
{
    // graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 }, fillStyle: { color: 0xff0000 }});

    rect = new Phaser.Geom.Rectangle(100, 100, 200, 200);

    var points = Phaser.Geom.Rectangle.MarchingAnts(rect, 64);

    // console.table(points);

    for (var i = 0; i < points.length; i++)
    {
        this.add.image(points[i].x, points[i].y, 'chunk');
    }
}

