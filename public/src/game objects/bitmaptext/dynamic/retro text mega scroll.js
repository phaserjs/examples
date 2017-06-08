var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    pixelArt: true,
    width: 640,
    height: 400,
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var scrollers;
var dynamic;

var game = new Phaser.Game(config);

function preload() 
{
    this.load.image('171', 'assets/fonts/retro/171.png');
    this.load.image('rain', 'assets/pics/thalion-rain.png');
    this.load.image('contra', 'assets/pics/contra1.png');
}

function create() 
{
    this.add.image(0, 0, 'rain').setOrigin(0).setScale(2);

    var config = {
        image: '171',
        width: 16,
        height: 18,
        chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ| 0123456789*#!@:.,\\?-+=^$£()\'',
        charsPerRow: 19,
        spacing: { x: 0, y: 1 }
    };

    this.cache.bitmapFont.add('171', Phaser.GameObjects.BitmapText.ParseRetroFont(this, config));

    scrollers = this.add.layer();

    // for (var i = 0; i < )

    dynamic = this.add.dynamicBitmapText(100, 100, '171', '               PHASER 3 IS IN THE HOUSE');

    dynamic.setSize(200, 18);
    // dynamic.setScale(4);

    // TweenMax.to(dynamic, 4, {
    //     y: 175*4,
    //     ease: Sine.easeInOut,
    //     repeat: -1,
    //     yoyo: true
    // });

    this.add.image(640, 400, 'contra').setOrigin(1).setScale(2);
}

function update (time, delta)
{
    dynamic.scrollX += 0.15 * delta;

    if (dynamic.scrollX > 1300)
    {
        dynamic.scrollX = 0;
    }

}
