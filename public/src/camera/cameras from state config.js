var stateConfig = {
    preload: preload,
    create: create,
    update: update,
    cameras: [
        {
            width: 400,
            height: 300
        },
        {
            x: 400,
            y: 0,
            width: 400,
            height: 300
        },
        {
            x: 0,
            y: 300,
            width: 400,
            height: 300
        },
        {
            x: 400,
            y: 300,
            width: 400,
            height: 300
        }
    ]
};

var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    state: stateConfig
};

var image;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('einstein', 'assets/pics/ra-einstein.png');
}

function create ()
{
    image = this.add.image(200, 150, 'einstein');
}

function update ()
{
    image.rotation += 0.01;
}
