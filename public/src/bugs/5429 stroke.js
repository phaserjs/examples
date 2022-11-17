var config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    var graphics = this.add.graphics();

    graphics.lineStyle(3, 0xff00ff, 1);

    graphics.strokeRoundedRect(32, 32, 300, 200);

    graphics.lineStyle(6, 0xffff00, 1);

    graphics.strokeRoundedRect(360, 240, 400, 300, { tl: 64, tr: 22, bl: 12, br: 0 });
}
