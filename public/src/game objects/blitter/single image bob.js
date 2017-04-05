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
    // this.load.atlas('atlas', 'assets/atlas/megasetHD-0.png', 'assets/atlas/megasetHD-0.json');

}

function create() {

    var blitter = this.add.blitter(0, 0, 'atari');
// 
    var bob = blitter.create(100, 100);

}
