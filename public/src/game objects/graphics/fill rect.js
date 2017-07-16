var config = {
    width: 800,
    height: 600,
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    var graphics = this.add.graphics();

    var color = 0xffff00;
    var alpha = 1;

    graphics.fillStyle(color, alpha);

    graphics.fillRect(32, 32, 256, 256);
}
