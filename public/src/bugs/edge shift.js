var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
}

function create ()
{
    //  Load the page then instantly click away from Edge so another window
    //  has focus. After 10 seconds or so the sprite will shift down by about 100 pixels.
    //  As soon as you click on Edge again it'll shift back up.
    //  The text never moves.
    //  Doesn't happen in Canvas, only in WebGL.

    this.add.sprite(400, 300, 'eye');

    //  The sprite never moves if you add 2 sprites into the sprite batch (uncomment line below)
    // this.add.sprite(100, 300, 'eye');

    this.add.text(400, 300, 'hello');
}
