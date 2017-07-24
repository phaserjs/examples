var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    backgroundColor: '#2d2d2d',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload()
{
    this.load.bitmapFont('ice', 'assets/fonts/bitmap/iceicebaby.png', 'assets/fonts/bitmap/iceicebaby.xml');
}

function create() 
{
    var t = this.add.dynamicBitmapText(32, 64, 'ice', 'Phaser 3\nis coming\nNovember 2017', 128);
    t.setSize(1024, 200);
}
