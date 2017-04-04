var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#efefef',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var image;
var game = new Phaser.Game(config);

function preload ()
{
    this.load.svg('pencil', 'assets/svg/pencil.svg');
}

function create ()
{
    image = this.add.image(400, 300, 'pencil');
}
