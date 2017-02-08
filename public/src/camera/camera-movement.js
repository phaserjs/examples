var config = {
    type: Phaser.CANVAS,
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
var horizontalCamera;
var verticalCamera;
var circularCamera;

function preload() {

    this.load.image('einstein', 'assets/tests/camera/CherilPerils.png');

}

function create() {

    image = this.add.image(0, 0, 'einstein');
    this.sys.mainCamera.width = 400;
    this.sys.mainCamera.height = 300;
    horizontalCamera = this.sys.addCamera(400, 0, 400, 300);
    verticalCamera = this.sys.addCamera(0, 300, 400, 300);
    circularCamera = this.sys.addCamera(400, 300, 400, 300);
}
function update()
{
    var halfWidth = image.texture.source[0].width / 2;
    var quarterWidth = halfWidth / 2;
    var halfHeight = image.texture.source[0].height / 2;
    var quarterHeight = halfHeight / 2;

    horizontalCamera.scrollX = (halfWidth - quarterWidth + (Math.cos(iter) * quarterWidth))|0;
    verticalCamera.scrollY = (halfHeight - quarterHeight + (Math.sin(iter) * quarterHeight))|0;
    circularCamera.scrollX = (halfWidth - quarterWidth + (Math.cos(iter) * quarterWidth))|0;
    circularCamera.scrollY = (halfHeight - quarterHeight + (Math.sin(iter) * quarterHeight))|0;
    iter += 0.02;
}
