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

var layerA;
var layerB;
var move = 0;
var game = new Phaser.Game(config);

function preload ()
{
    this.load.atlas('atlas', 'assets/tests/fruit/veg.png', 'assets/tests/fruit/veg.json');
}

function create ()
{
    layerA = this.add.layer();
    layerB = this.add.layer();

    for (var i = 0; i < 1000; i++)
    {
        var image = this.add.image(100 + Math.random() * 600, 100 + Math.random() * 400, 'atlas', 'veg0' + Math.floor(1 + Math.random() * 9));
        layerA.add(image);
    }
    for (var i = 0; i < 1000; i++)
    {
        var image = this.add.image(100 + Math.random() * 600, 100 + Math.random() * 400, 'atlas', 'veg0' + Math.floor(1 + Math.random() * 9));
        layerB.add(image);
    }

    setTimeout(function loopA() {
        setTimeout(loopA, 1000);
        layerA.toggleVisible();
    }, 1000);
    setTimeout(function loopB() {
        setTimeout(loopB, 2000);
        layerB.toggleVisible();
    }, 2000);
}

function update ()
{
    layerA.addX(Math.cos(move));
    layerA.addY(Math.sin(move));
    layerA.rotate(-0.01);

    layerB.addX(-Math.cos(move));
    layerB.addY(-Math.sin(move));
    layerB.rotate(0.01);

    move += 0.01;
}