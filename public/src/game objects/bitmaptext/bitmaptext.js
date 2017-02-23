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
    this.load.xml('desyrel', 'assets/fonts/bitmap/desyrel.xml');
    this.load.image('desyrel', 'assets/fonts/bitmap/desyrel.png');
}

function create() 
{
    console.log(this.add.bitmapText(0, 0, 'desyrel', 'Hello World!'));
}