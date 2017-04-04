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

var game = new Phaser.Game(config);

function preload ()
{
    this.load.svg('pencil', 'assets/svg/pencil.svg');
    this.load.svg('cartman', 'assets/svg/cartman.svg');
}

function create ()
{
    this.add.image(400, 300, 'pencil');
    this.add.image(150, 300, 'cartman');
}
