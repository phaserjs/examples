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
    this.sys.mainCamera.width = 400;
    this.sys.mainCamera.height = 300;
    this.sys.addCamera(400, 0, 400, 300);
    this.sys.addCamera(0, 300, 400, 300);
    this.sys.addCamera(400, 300, 400, 300);
}
function update()
{
    image.transform.positionX = Math.sin(iter) * 200;
    image.transform.positionY = Math.cos(iter) * 200;
    iter += 0.04;
}
