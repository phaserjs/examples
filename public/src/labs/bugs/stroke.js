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

var graphics;

function create ()
{
    graphics = this.add.graphics();

    graphics.lineStyle(8, 0xffff00, 1);

    // graphics.strokeRoundedRect(100, 100, 300, 200, 32);

    var x = 100;
    var y = 100;
    var width = 300;
    var height = 200;
    var radius = 32;
    var tau = Math.PI * 0.5;

    var tl = radius;
    var tr = radius;
    var bl = radius;
    var br = radius;

    // graphics.beginPath();

    graphics.moveTo(x + tl, y);
    graphics.lineTo(x + width - tr, y);
    // graphics.lineTo(x + width + 50 - tr, y + height);


    // graphics.moveTo(x + width - tr, y);
    graphics.arc(x + width - tr, y + tr, tr, -tau, 0);

    // graphics.lineTo(x + width, y + height - br);
    // graphics.moveTo(x + width, y + height - br)
    // graphics.arc(x + width - br, y + height - br, br, 0, tau);
    // graphics.lineTo(x + bl, y + height);
    // graphics.moveTo(x + bl, y + height);
    // graphics.arc(x + bl, y + height - bl, bl, tau, Math.PI);
    // graphics.lineTo(x, y + tl);
    // graphics.moveTo(x, y + tl);
    // graphics.arc(x + tl, y + tl, tl, -Math.PI, -tau);

    graphics.strokePath();
}
