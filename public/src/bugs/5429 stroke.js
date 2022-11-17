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

function arc (g, x, y, radius, startAngle, endAngle, anticlockwise, overshoot)
{
    if (anticlockwise === undefined) { anticlockwise = false; }
    if (overshoot === undefined) { overshoot = 0; }

    g.commandBuffer.push(
        0,
        x, y, radius, startAngle, endAngle, anticlockwise, overshoot
    );
}

function strokeRoundedRect (g, x, y, width, height, radius)
{
    if (radius === undefined) { radius = 20; }

    var tl = radius;
    var tr = radius;
    var bl = radius;
    var br = radius;

    var maxRadius = Math.min(width, height) / 2;

    if (typeof radius !== 'number')
    {
        tl = Phaser.Utils.Objects.GetFastValue(radius, 'tl', 20);
        tr = Phaser.Utils.Objects.GetFastValue(radius, 'tr', 20);
        bl = Phaser.Utils.Objects.GetFastValue(radius, 'bl', 20);
        br = Phaser.Utils.Objects.GetFastValue(radius, 'br', 20);
    }

    tl = Math.min(tl, maxRadius);
    tr = Math.min(tr, maxRadius);
    bl = Math.min(bl, maxRadius);
    br = Math.min(br, maxRadius);

    g.beginPath();
    // g.moveTo(x + tl, y);
    // g.lineTo(x + width - tr, y);
    g.moveTo(480, y);
    // g.moveTo(x + width - tr, y);

    // g.arc(x + width - tr, y + tr, tr, -Phaser.Math.TAU, 0);

    //  The issue is a moveTo that ends on the exact same x as the arc - if they differ, even slightly, it renders fine

    g.commandBuffer.push(
        0,
        x + width - tr, y + tr, tr, -Phaser.Math.TAU, 0, false, 0
    );

    // g.lineTo(x + width, y + height - br);
    // g.moveTo(x + width, y + height - br);
    // g.arc(x + width - br, y + height - br, br, 0, Phaser.Math.TAU);
    // g.lineTo(x + bl, y + height);
    // g.moveTo(x + bl, y + height);
    // g.arc(x + bl, y + height - bl, bl, Phaser.Math.TAU, Math.PI);
    // g.lineTo(x, y + tl);
    // g.moveTo(x, y + tl);
    // g.arc(x + tl, y + tl, tl, -Math.PI, -Phaser.Math.TAU);
    g.strokePath();
}

function create ()
{
    this.add.text(500, 32, 'v16');

    var graphics = this.add.graphics();

    graphics.lineStyle(6, 0xffff00, 1);
    graphics.strokeRoundedRect(200, 140, 300, 100);

    // strokeRoundedRect(graphics, 200, 140, 300, 100);
}
