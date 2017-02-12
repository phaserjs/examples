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
var camerasAdded = [];
var camerasRemoved = [];
var adding = false;
var state;

function preload() {

    this.load.image('CherilPerils', 'assets/tests/camera/CherilPerils.png');
}

function create() {

    var image = this.add.image(0, 0, 'CherilPerils');

    this.cameras.main.setSize(400, 300);

    fadeCamera = this.cameras.add(400, 0, 400, 300);
    flashCamera = this.cameras.add(0, 300, 400, 300);
    shakeCamera = this.cameras.add(400, 300, 400, 300);

    fadeCamera.fade(1000);
    camerasAdded.push(fadeCamera, shakeCamera, flashCamera);
    state = this;
    addAndRemove();
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

function addAndRemove()
{
    if (adding)
    {
        if (camerasRemoved.length > 0)
        {
            var addingCamera = camerasRemoved.pop();
            camerasAdded.push(addingCamera);
            state.cameras.addReference(addingCamera);
        }
        else
        {
            adding = false;
        }
    }
    else
    {
        if (camerasAdded.length > 0)
        {
            var removingCamera = camerasAdded.pop();
            camerasRemoved.push(removingCamera);
            state.cameras.remove(removingCamera);
        }
        else
        {
            adding = true;
        }
    }

    setTimeout(addAndRemove, 500);
}
