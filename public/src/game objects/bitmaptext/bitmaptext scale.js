var config = {
    type: Phaser.CANVAS,
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
    var text = this.add.bitmapText(100, 100, 'ice', 'Terminator', 32);

    TweenMax.to(text, 4, {
        scaleX: 4,
        ease: Power1.easeInOut,
        repeat: -1,
        yoyo: true
    });

    TweenMax.to(text, 3, {
        scaleY: 8,
        ease: Power2.easeInOut,
        repeat: -1,
        yoyo: true
    });
}
