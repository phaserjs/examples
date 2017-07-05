var config = {
    type: Phaser.WEBGL,
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

var cans;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('cokecan', 'assets/sprites/cokecan.png');
}

function create ()
{
    cans = this.pool.create();



}

function update ()
{
    // image.rotation += 0.01;
}