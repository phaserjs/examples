var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    useTicker: true,
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var image;
var time;
var log;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('bunny', 'assets/sprites/bunny.png');
}

function create ()
{
    image = this.add.image(0, 200, 'bunny');

    time = this.add.text(0, 400);

    log = [];
}

function update (delta)
{
    image.x += 1;

    if (image.x > 1000)
    {
        image.x = 0;
    }

    log.push(this.sys.game.loop.toString());

    if (log.length > 10)
    {
        log.shift();
    }

    time.setText(log);
}
