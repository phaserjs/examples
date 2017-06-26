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
    group1 = this.add.group();
    group2 = this.add.group();
    group3 = this.add.group();
    group4 = this.add.group();

    group1.createMultiple({ key: 'ball', frameQuantity: 36 });
    group2.createMultiple({ key: 'ball', frameQuantity: 32 });
    group3.createMultiple({ key: 'ball', frameQuantity: 26 });
    group4.createMultiple({ key: 'ball', frameQuantity: 16 });

    circle1 = new Phaser.Geom.Circle(400, 300, 200);
    circle2 = new Phaser.Geom.Circle(400, 300, 160);
    circle3 = new Phaser.Geom.Circle(400, 300, 120);
    circle4 = new Phaser.Geom.Circle(400, 300, 80);

    group1.placeOnCircle(circle1);
    group2.placeOnCircle(circle2);
    group3.placeOnCircle(circle3);
    group4.placeOnCircle(circle4);
}

function update ()
{
    group1.rotateAroundDistance(circle1, -0.030, circle1.radius);
    group2.rotateAroundDistance(circle2, 0.025, circle2.radius);
    group3.rotateAroundDistance(circle3, -0.020, circle3.radius);
    group4.rotateAroundDistance(circle4, 0.015, circle4.radius);
}
