var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);


function preload() 
{
    this.load.bitmapFont('desyrel', 'assets/fonts/bitmap/desyrel.png', 'assets/fonts/bitmap/desyrel.xml');
}

function create() 
{
    var text = this.add.dynamicBitmapText(60, 200, 'desyrel', 'It\'s cold outside,\nthere\'s no kind of atmosphere', 64);

    text.setDisplayCallback(textCallback);
}

//  data = { index: index, charCode: charCode, x: x, y: y, scaleX: scaleX, scaleY: scaleY }
function textCallback (data)
{
    if (data.index >= 5 && data.index <= 8)
    {
        data.x = Phaser.Math.Between(data.x - 2, data.x + 2);
        data.y = Phaser.Math.Between(data.y - 4, data.y + 4);
    }

    return data;
}
