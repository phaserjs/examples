var config = {
    type: Phaser.AUTO,
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
    this.load.image('sao', 'assets/pics/sword-art-online.jpg');
}

function create ()
{
    this.add.sprite(400, 300, 'sao');

    var graphics = this.add.graphics();

    graphics.fillStyle(0x000000, 0.5);
    graphics.fillRect(0, 0, 800, 600);
    graphics.setVisible(false);

    this.sys.game.events.on('mouseout', function () {

        graphics.setVisible(true);

    });

    this.sys.game.events.on('mouseover', function () {

        graphics.setVisible(false);

    });
}
