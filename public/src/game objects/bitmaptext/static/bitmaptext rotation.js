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
    this.load.bitmapFont('ice', 'assets/fonts/bitmap/iceicebaby.png', 'assets/fonts/bitmap/iceicebaby.xml');
}

function create() 
{
    var text = this.add.bitmapText(300, 300, 'ice', 'Terminator', 128);

    TweenMax.to(text, 2, {
        angle: 360,
        ease: Power1.easeInOut,
        repeat: -1,
        yoyo: true
    });
}
