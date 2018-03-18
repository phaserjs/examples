var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);
var tween;
var image;
var fromColors;
var toColors;

function preload ()
{
    this.load.image('face', 'assets/pics/bw-face.png');
}

function getRandomVertexColors ()
{
    var RandomRGB = Phaser.Display.Color.RandomRGB;
    return {
        topLeft: RandomRGB(),
        topRight: RandomRGB(),
        bottomLeft: RandomRGB(),
        bottomRight: RandomRGB()
    };
}

function getTintColor (vertex)
{
    var tint = Phaser.Display.Color.Interpolate.ColorWithColor(
        fromColors[vertex],
        toColors[vertex],
        100,
        tween.getValue()
    );
    return Phaser.Display.Color.ObjectToColor(tint).color;
}

function tintTween (fromColors, toColors, callback)
{
    tween = this.tweens.addCounter({
        from: 0,
        to: 100,
        duration: 2000,
        onUpdate: function ()
        {
            image.setTint(
                getTintColor('topLeft'),
                getTintColor('topRight'),
                getTintColor('bottomLeft'),
                getTintColor('topRight')
            );
        },
        onComplete: callback
    });
}

function initTweens ()
{
    fromColors = toColors || fromColors;
    toColors = getRandomVertexColors();
    tintTween(
        fromColors,
        toColors,
        initTweens
    );
}

function create ()
{
    image = this.add.image(400, 300, 'face');

    fromColors = getRandomVertexColors();

    image.setTint(
        fromColors.topLeft.color,
        fromColors.topRight.color,
        fromColors.bottomLeft.color,
        fromColors.bottomRight.color
    );

    tintTween = tintTween.bind(this);

    initTweens();
}
