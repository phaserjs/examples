var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var image;

function preload ()
{
    this.load.image('scroll', 'assets/pics/backscroll.png');
}

function create ()
{
    image = this.add.image(400, 300, 'scroll');
}

function update ()
{

}