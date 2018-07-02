var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#222288',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('lulu', 'assets/pics/shocktroopers-lulu2.png');
}

function create ()
{
    var image = this.add.image(400, 300, 'lulu');

    var i = 0;

    this.input.on('pointerdown', function (pointer) {

        if (i === 0)
        {
            // image.setTint(0xff00ff, 0xff0000, 0x00ff00, 0x0000ff);

            image.setTintFill(0xff00ff, 0xff0000, 0x00ff00, 0x0000ff);

            i = 1;
        }
        else
        {
            image.clearTint();
            i = 0;
        }

    });

}
