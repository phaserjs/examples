var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#0f0f0f',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.plugin('RandomNamePlugin', 'assets/loader-tests/RandomNamePlugin.js', true, 'names');
}

function create ()
{
    this.add.text(10, 10, this.names.getNames());
}
