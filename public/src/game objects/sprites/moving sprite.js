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

    bunny = this.add.sprite(0, 0, 'bunny');

}

function update() {

    bunny.x += 2;

    if (bunny.x > 800)
    {
        bunny.x = -300;
    }

}
