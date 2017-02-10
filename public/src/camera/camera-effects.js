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
var fadeCamera;
var flashCamera;
var shakeCamera;

function preload() {

    this.load.image('CherilPerils', 'assets/tests/camera/CherilPerils.png');

}

function create() {

    var image = this.add.image(0, 0, 'CherilPerils');
    this.sys.mainCamera.width = 400;
    this.sys.mainCamera.height = 300;
    fadeCamera = this.sys.addCamera(400, 0, 400, 300);
    flashCamera = this.sys.addCamera(0, 300, 400, 300);
    shakeCamera = this.sys.addCamera(400, 300, 400, 300);
    fadeCamera.fade(1000);
}
function update()
{
    flashCamera.flash(1000);
    shakeCamera.shake(1000);
    if (fadeCamera._fadeAlpha >= 1.0)
    {
        fadeCamera._fadeAlpha = 0.0;
        fadeCamera.fade(1000);
    }
}

