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
var smallCamera;

function preload() {

    this.load.image('CherilPerils', 'assets/tests/camera/CherilPerils.png');

}

function create() {

    image = this.add.image(0, 0, 'CherilPerils');
    image.originX = 0;
    image.originY = 0;
    smallCamera = this.cameras.add(580, 20, 200, 150);
}

function update()
{
    var halfWidth = image.texture.source[0].width / 2;
    var quarterWidth = halfWidth / 2;
    var halfHeight = image.texture.source[0].height / 2;
    var quarterHeight = halfHeight / 2;

    smallCamera.scrollX = halfWidth + Math.cos(iter) * halfWidth;
    iter += 0.02;
}
