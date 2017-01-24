var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var parent;

function preload() {

    this.load.image('atari', 'assets/sprites/atari400.png');
    this.load.image('ball', 'assets/sprites/blue_ball.png');

}

function create() {

    parent = this.add.sprite(0, 0, 'atari');

    this.add.sprite(0, 0, 'ball', 0, parent);
    this.add.sprite(32, 16, 'ball', 0, parent);
    this.add.sprite(64, 32, 'ball', 0, parent);

}

function update() {

    parent.x += 2;

    if (parent.x > 800)
    {
        parent.x = -300;
    }

}
