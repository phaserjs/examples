var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

var scale = { r: -(Math.PI / 2) };

function preload()
{
    this.load.bitmapFont('ice', 'assets/fonts/bitmap/iceicebaby.png', 'assets/fonts/bitmap/iceicebaby.xml');
}

function create() 
{
    var text = this.add.bitmapText(60, 200, 'ice', 'Hello World!', 64);

    text.setDisplayCallback(textCallback);

    TweenMax.to(scale, 1, {
        r: Math.PI / 2,
        ease: Linear.easeNone,
        repeat: -1,
        _yoyo: true
    });
}

//  data = { index: index, charCode: charCode, x: x, y: y, scaleX: scaleX, scaleY: scaleY }
function textCallback (data)
{
    // data.rotation = Phaser.Math.Between(-0.02, 0.02);
    data.rotation = 1.570;

    return data;
}