var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        init: init,
        preload: preload,
        create: create
    }
};

//  In this case we're saying "scale the game, no lower than 480x260 and no higher than 800x600"

var game = new Phaser.Game(config);

function init ()
{
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.setMinMax(480, 260, 800, 600);
    this.scale.forceLandscape = true;
    this.scale.pageAlignHorizontally = true;
}

function preload ()
{
    this.load.image('pic', 'assets/pics/zero-two.png');
}

function create ()
{
    this.add.image(400, 300, 'pic');
}
