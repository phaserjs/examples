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
    this.load.image('bar', 'assets/sprites/flectrum.png');
}

function create ()
{
    group = this.add.group();

    group.createMultiple({ key: 'bar', repeat: 32, setXY: { x: 400, y: 300 }, setRotation: { value: 0, step: 0.06 }, setScale: { x: 6 } });
}

function update ()
{
    group.rotate(0.001, 0.0001);
}
