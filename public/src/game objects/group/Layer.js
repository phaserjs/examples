var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var groupA;
var groupB;
var move = 0;
var game = new Phaser.Game(config);

function preload ()
{
    this.load.atlas('atlas', 'assets/tests/fruit/veg.png', 'assets/tests/fruit/veg.json');
}

function create ()
{
    groupA = this.add.group();
    groupB = this.add.group();

    for (var i = 0; i < 1000; i++)
    {
        var image = this.add.image(100 + Math.random() * 600, 100 + Math.random() * 400, 'atlas', 'veg0' + Math.floor(1 + Math.random() * 9));
        groupA.add(image);
    }
    for (var i = 0; i < 1000; i++)
    {
        var image = this.add.image(100 + Math.random() * 600, 100 + Math.random() * 400, 'atlas', 'veg0' + Math.floor(1 + Math.random() * 9));
        groupB.add(image);
    }

    setTimeout(function loopA() {
        setTimeout(loopA, 1000);
        groupA.toggleVisible();
    }, 1000);
    setTimeout(function loopB() {
        setTimeout(loopB, 2000);
        groupB.toggleVisible();
    }, 2000);
}

function update ()
{
    groupA.addX(Math.cos(move));
    groupA.addY(Math.sin(move));
    groupA.rotate(-0.01);

    groupB.addX(-Math.cos(move));
    groupB.addY(-Math.sin(move));
    groupB.rotate(0.01);

    move += 0.01;
}