var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    state: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    var canvasTexture = this.textures.createCanvas('filledCube', 16, 256);

    //  We can access the underlying Canvas itself like this:

    var canvas = canvasTexture.getSourceImage();

    //  And draw to it with a gradient fill
    var context = canvas.getContext('2d');

    var grd = context.createLinearGradient(0, 0, 0, 256);

    grd.addColorStop(0, '#8ED6FF');
    grd.addColorStop(1, '#004CB3');

    context.fillStyle = grd;
    context.fillRect(0, 0, 16, 256);

    //  Add a bunch of images that all use the same texture

    for (var i = 0; i < 64; i++)
    {
        launch.bind(this, i)();
    }

    TweenMax.delayedCall(4, updateTexture, [], this);
}

function launch (i)
{
    var image = this.add.image(8 + i * 16, 0, 'filledCube');

    var tween = TweenMax.to(image, 2, {
        y: 650,
        delay: i * 0.0625,
        ease: Power1.easeInOut,
        repeat: -1,
        yoyo: true
    });
}

function updateTexture ()
{
    var canvasTexture = this.textures.get('filledCube');
    var canvas = canvasTexture.getSourceImage();
    var context = canvas.getContext('2d');
    var grd = context.createLinearGradient(0, 0, 0, 256);

    grd.addColorStop(0, generateHexColor());
    grd.addColorStop(1, generateHexColor());

    context.fillStyle = grd;
    context.fillRect(0, 0, 16, 256);

    TweenMax.delayedCall(4, updateTexture, [], this);
}

function generateHexColor ()
{
    return '#' + ((0.5 + 0.5 * Math.random()) * 0xFFFFFF << 0).toString(16);
}
