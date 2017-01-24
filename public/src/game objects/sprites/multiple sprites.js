var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {

    this.load.image('beball', 'assets/sprites/beball1.png');
    this.load.image('atari', 'assets/sprites/atari400.png');
    this.load.image('bikkuriman', 'assets/sprites/bikkuriman.png');

}

function create() {

    this.add.sprite(0, 0, 'beball');
    this.add.sprite(100, 0, 'atari');
    this.add.sprite(400, 0, 'bikkuriman');

}
