var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    },
    width: 800,
    height: 600
};

var clown;
var image;
var iter = 3.14;
var game = new Phaser.Game(config);

function preload() {

    this.load.image('CherilPerils', 'assets/tests/camera/CherilPerils.png');
    this.load.image('clown', 'assets/sprites/clown.png');

}

function create() {

    image = this.add.image(0, 0, 'CherilPerils');
    clown = this.add.image(500, 620, 'clown');
    image.originX = 0;
    image.originY = 0;
    this.cameras.main.setSize(400, 300);
    this.cameras.add(400, 0, 400, 300);
    this.cameras.add(0, 300, 400, 300);
    this.cameras.add(400, 300, 400, 300);
    this.cameras.main.startFollow(clown);
}

function update()
{
    clown.x = 250 + Math.cos(iter) * 200;
    clown.y = 310 + Math.sin(iter) * 200;
    iter += 0.02;
}
