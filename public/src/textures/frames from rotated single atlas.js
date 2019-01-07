var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
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

    this.add.image(160, 100, 'atlas', 'atari130xe');
    this.add.image(460, 60, 'atlas', 'boom32wh12');
    this.add.image(200, 400, 'atlas', 'bunny');

}
