var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    backgroundColor: '#2d2d2d',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var ts;
var iter = 0;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('mushroom', 'assets/sprites/mushroom16x16.png');
}

function create ()
{
    ts = this.add.tileSprite(400, 300, 200, 150, 'mushroom').setScale(1);

    ts.tileScaleX = 4;
    ts.tileScaleY = 4;
}

function update ()
{
    // ts.tilePositionX = Math.cos(-iter) * 50;
    // ts.tilePositionY = Math.sin(-iter) * 50;

    // ts.tilePositionX += 1;

    ts.rotation -= 0.01;

    ts.tileScaleX = Math.sin(iter) * 10;
    ts.tileScaleY = Math.sin(iter) * 10;

    iter += 0.01;
}