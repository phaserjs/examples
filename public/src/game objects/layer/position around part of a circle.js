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

var layer1;
var layer2;
var layer3;
var layer4;

function preload ()
{
    this.load.image('ball', 'assets/sprites/shinyball.png');
}

function create ()
{
    layer1 = this.add.layer();
    layer2 = this.add.layer();
    layer3 = this.add.layer();
    layer4 = this.add.layer();

    for (var i = 0; i < 16; i++)
    {
        layer1.add(this.add.image(0, 0, 'ball'));
        layer2.add(this.add.image(0, 0, 'ball'));
        layer3.add(this.add.image(0, 0, 'ball'));
        layer4.add(this.add.image(0, 0, 'ball'));
    }

    layer1.placeOnCircle({ x: 400, y: 300, radius: 200 });
    layer2.placeOnCircle({ x: 400, y: 300, radius: 160 });
    layer3.placeOnCircle({ x: 400, y: 300, radius: 120 });
    layer4.placeOnCircle({ x: 400, y: 300, radius: 80 });
}

function update ()
{
    layer1.rotateAroundDistance({ x: 400, y: 300 }, 0.02, 200);
    layer2.rotateAroundDistance({ x: 400, y: 300 }, 0.02, 160);
    layer3.rotateAroundDistance({ x: 400, y: 300 }, 0.02, 120);
    layer4.rotateAroundDistance({ x: 400, y: 300 }, 0.02, 80);
}
