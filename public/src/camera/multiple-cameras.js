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

var game = new Phaser.Game(config);
var iter = 0;
var image;

function preload() {

    this.load.image('einstein', 'assets/pics/ra-einstein.png');

}

function create() {

    image = this.add.image(0, 0, 'einstein');

    this.cameras.main.setSize(400, 300);

    this.cameras.add(400, 0, 400, 300);
    this.cameras.add(0, 300, 400, 300);
    this.cameras.add(400, 300, 400, 300);
}

function update()
{
    image.x = Math.sin(iter) * 200;
    image.y = Math.cos(iter) * 200;
    iter += 0.04;
}
