var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {

    this.load.atlas('atlas', 'assets/atlas/rotated-atlas.png', 'assets/atlas/rotated-atlas.json');

}

function create() {

    this.add.image(0, 0, 'atlas', 'atari130xe');
    this.add.image(260, 60, 'atlas', 'boom32wh12');
    this.add.image(120, 300, 'atlas', 'bunny');

}
