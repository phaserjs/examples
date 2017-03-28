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

var circle1;
var circle2;
var circle3;
var circle4;

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

    layer1.createMultiple(36, 'ball');
    layer2.createMultiple(32, 'ball');
    layer3.createMultiple(26, 'ball');
    layer4.createMultiple(16, 'ball');

    circle1 = new Phaser.Geom.Circle(400, 300, 200);
    circle2 = new Phaser.Geom.Circle(400, 300, 160);
    circle3 = new Phaser.Geom.Circle(400, 300, 120);
    circle4 = new Phaser.Geom.Circle(400, 300, 80);

    layer1.positionAroundCircle(circle1);
    layer2.positionAroundCircle(circle2);
    layer3.positionAroundCircle(circle3);
    layer4.positionAroundCircle(circle4);
}

function update ()
{
    layer1.rotateAroundDistance(circle1, -0.030, circle1.radius);
    layer2.rotateAroundDistance(circle2, 0.025, circle2.radius);
    layer3.rotateAroundDistance(circle3, -0.020, circle3.radius);
    layer4.rotateAroundDistance(circle4, 0.015, circle4.radius);
}
