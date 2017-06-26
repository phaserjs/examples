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

var group1;
var group2;
var group3;
var group4;

function preload ()
{
    this.load.image('ball', 'assets/sprites/shinyball.png');
}

function create ()
{
    group1 = this.add.group();
    group2 = this.add.group();
    group3 = this.add.group();
    group4 = this.add.group();

    for (var i = 0; i < 16; i++)
    {
        group1.add(this.add.image(0, 0, 'ball'));
        group2.add(this.add.image(0, 0, 'ball'));
        group3.add(this.add.image(0, 0, 'ball'));
        group4.add(this.add.image(0, 0, 'ball'));
    }

    group1.placeOnCircle({ x: 400, y: 300, radius: 200 });
    group2.placeOnCircle({ x: 400, y: 300, radius: 160 });
    group3.placeOnCircle({ x: 400, y: 300, radius: 120 });
    group4.placeOnCircle({ x: 400, y: 300, radius: 80 });
}

function update ()
{
    group1.rotateAroundDistance({ x: 400, y: 300 }, 0.02, 200);
    group2.rotateAroundDistance({ x: 400, y: 300 }, 0.02, 160);
    group3.rotateAroundDistance({ x: 400, y: 300 }, 0.02, 120);
    group4.rotateAroundDistance({ x: 400, y: 300 }, 0.02, 80);
}
