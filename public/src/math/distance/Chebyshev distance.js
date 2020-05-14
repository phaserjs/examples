var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var graphic;
var player;
var ufo;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('eyes', 'assets/sprites/slimeeyes.png');
    this.load.image('ufo', 'assets/sprites/ufo.png');
}

function create ()
{
    player = this.add.image(400, 300, 'eyes');
    ufo = this.add.image(200, 150, 'ufo');
    graphic = this.add.graphics({ lineStyle: { color: 0x00ffff } });

    draw();

    this.input.on('pointermove', function (pointer)
    {
        player.setPosition(pointer.x, pointer.y);
        draw();
    });
}

function draw ()
{
    var dist = Phaser.Math.Distance.Chebyshev(player.x, player.y, ufo.x, ufo.y);

    graphic.clear().strokeRect(player.x - dist, player.y - dist, 2 * dist, 2 * dist);
}
