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

    this.load.atlas('atlas', 'assets/atlas/megaset-1.png', 'assets/atlas/megaset-1.json');

}

function create() {

    this.add.image(100, 400, 'atlas', 'supercars-parsec');
    this.add.image(200, 100, 'atlas', 'titan-mech');
    this.add.image(300, 300, 'atlas', 'ship');

}
