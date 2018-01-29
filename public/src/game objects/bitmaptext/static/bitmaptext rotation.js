var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
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
    var text = this.add.bitmapText(300, 300, 'ice', 'Terminator', 128);

    this.tweens.add({
        targets: text,
        duration: 2000,
        angle: 360,
        ease: 'Quad.easeInOut',
        repeat: -1,
        yoyo: true
    });
}
