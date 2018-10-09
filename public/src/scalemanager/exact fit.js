var config = {
    type: Phaser.AUTO,
    backgroundColor: '#2d2d2d',
    scale: {
        mode: Phaser.ScaleManager.EXACT_FIT,
        width: 800,
        height: 600,
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('pic', 'assets/pics/zero-two.png');
}

function create ()
{
    this.add.image(0, 0, 'pic').setOrigin(0);
}
