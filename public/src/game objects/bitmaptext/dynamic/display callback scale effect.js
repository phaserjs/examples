var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

var scale = { i: -64, x: 16, y: -16 };

function preload()
{
    this.load.bitmapFont('desyrel', 'assets/fonts/bitmap/desyrel.png', 'assets/fonts/bitmap/desyrel.xml');
}

function create() 
{
    var text = this.add.dynamicBitmapText(60, 200, 'desyrel', 'Hello World!', 64);

    text.setDisplayCallback(textCallback);

    TweenMax.to(scale, 1, {
        i: 64,
        x: -16,
        y: 16,
        ease: Linear.none,
        repeat: -1,
        yoyo: true
    });
}

//  data = { index: index, charCode: charCode, x: x, y: y, scaleX: scaleX, scaleY: scaleY }
function textCallback (data)
{
    data.y += scale.y * data.index;

    // if (data.index % 2)
    // {
    //     data.y += scale.x;
    // }
    // else
    // {
    //     data.y += scale.y;
    // }

    return data;
}