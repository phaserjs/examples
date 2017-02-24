var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var dynamic = null;
var value = 0;

function preload() 
{
    this.load.xml('desyrel', 'assets/fonts/bitmap/desyrel.xml');
    this.load.image('desyrel', 'assets/fonts/bitmap/desyrel.png');

    this.load.xml('desyrel-pink', 'assets/fonts/bitmap/desyrel-pink.xml');
    this.load.image('desyrel-pink', 'assets/fonts/bitmap/desyrel-pink.png');

    this.load.xml('shortStack', 'assets/fonts/bitmap/shortStack.xml');
    this.load.image('shortStack', 'assets/fonts/bitmap/shortStack.png');
}

function create() 
{
    this.add.bitmapText(0, 0, 'desyrel', 'Lorem ipsum\ndolor sit amet');
    this.add.bitmapText(0, 200, 'desyrel-pink', 'Excepteur sint occaecat\ncupidatat non proident');
    this.add.bitmapText(0, 400, 'shortStack', 'Phaser BitmapText');
    dynamic = this.add.bitmapText(0, 500, 'desyrel');
}

function update()
{
    dynamic.text = 'value: ' + value.toFixed(2);
    value += 0.01;
}