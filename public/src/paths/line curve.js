var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        create: create,
        update: update
    }
};

var t = 0;
var line;
var graphics;

var game = new Phaser.Game(config);

function create ()
{
    graphics = this.add.graphics();

    line = new Phaser.Paths.Line(new Phaser.Math.Vector3(100, 100, 0), new Phaser.Math.Vector3(600, 400, 0));

    this.tweens.add({
        targets: window,
        t: 1,
        ease: 'Sine.easeInOut',
        duration: 2000,
        yoyo: true,
        repeat: -1
    });
}

function update ()
{
    graphics.clear();
    graphics.lineStyle(2, 0xffffff, 1);
    graphics.lineBetween(line.v1.x, line.v1.y, line.v2.x, line.v2.y);

    var p = line.getPoint(t);

    graphics.fillStyle(0xff0000, 1);
    graphics.fillRect(p.x - 8, p.y - 8, 16, 16);
}
