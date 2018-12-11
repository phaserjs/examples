var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    },
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('einstein', 'assets/pics/ra-einstein.png');
}

function create ()
{
    this.add.image(400, 300, 'einstein');

    this.cameras.main.setBackgroundColor(0xff0000);
    this.cameras.main.setZoom(0.5);
}
