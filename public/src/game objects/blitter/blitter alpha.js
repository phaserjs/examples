var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('atari', 'assets/sprites/atari130xe.png');
}

function create ()
{
    var blitter = this.add.blitter(0, 0, 'atari');

    blitter.create(0, 0).setAlpha(1);

    blitter.create(200, 50).setAlpha(0.8);

    blitter.create(400, 100).setAlpha(0.5);

    blitter.create(600, 150).setAlpha(0.2);
}
