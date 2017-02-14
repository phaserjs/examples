var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {

    this.load.image('atari', 'assets/sprites/atari130xe.png');

}

function create() {

    var blitter = this.add.blitter(0, 0, 'atari');

    // blitter.alpha = 0.5;

    var bob1 = blitter.create(0, 0);

    bob1.alpha = 1;

    var bob2 = blitter.create(200, 50);

    bob2.alpha = 0.8;

    var bob3 = blitter.create(400, 100);

    bob3.alpha = 0.5;

    var bob4 = blitter.create(600, 150);

    bob4.alpha = 0.2;

}
