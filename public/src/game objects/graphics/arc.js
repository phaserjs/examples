var config = {
    width: 800,
    height: 600,
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    var graphics = this.add.graphics();

    graphics.lineStyle(4, 0xff00ff, 1);

    // arc: function (x, y, radius, startAngle, endAngle, anticlockwise, close)

    graphics.arc(400, 300, 200, Phaser.Math.DegToRad(90), Phaser.Math.DegToRad(180), true);

    graphics.strokePath();
}
