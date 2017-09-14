var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    //  The first created appears at the back

    this.add.image(200, 300, 'block').setDepth(1);
    this.add.image(250, 300, 'block');
    this.add.image(300, 300, 'block');
}
