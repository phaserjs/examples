var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

var rt;
var bubbles = [];

function preload ()
{
        this.load.setBaseURL('https://cdn.phaserfiles.com/v355');
    this.load.image('bubble', 'assets/particles/bubble.png');
    this.load.image('dude', 'assets/sprites/phaser-dude.png');
}

function create ()
{
    rt = this.make.renderTexture({ width: 100, height: 100 }, false);

    rt.draw('bubble', 0, 0);
    rt.draw('dude', 20, 14);

    var t = rt.saveTexture('bubbleboy');

    for (var i = 0; i < 100; i++)
    {
        var b = this.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(100, 500), 'bubbleboy');

        bubbles.push(b);
    }

    this.input.on('pointerup', function () {

        //  It is YOUR responsibility to remove or change the texture being used by
        //  any Game Objects that are using the Render Texture *before* you destroy it

        bubbles.forEach(function (image) {

            image.destroy();

        });

        rt.destroy();

    });
}
