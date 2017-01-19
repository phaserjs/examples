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

var bunny;

function preload() {

    this.load.image('bunny', 'assets/sprites/bunny.png');

}

function create() {

    this.game.renderer.createTexture2D(this.textures.getFrame('bunny').source);

    bunny = this.add.image(0, 0, 'bunny');

}

function update() {

    bunny.x++;

}
