var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('makoto', 'assets/pics/makoto.png');
}

function create ()
{
    var zone = this.add.zone(0, 0, 32, 32).setInteractive();

    zone.setSize(400, 300, true);

    var image = this.add.image(400, 300, 'makoto');

    var on = true;

    this.input.events.on('GAME_OBJECT_DOWN_EVENT', function (event) {

        if (on)
        {
            on = false;
            image.tint = 0xff0000;
        }
        else
        {
            on = true;
            image.tint = 0xffffff;
        }

    });
}
