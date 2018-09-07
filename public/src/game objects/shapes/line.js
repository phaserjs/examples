var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    var r = this.add.line(400, 300, 0, 0, 400, 0, 0x00ff00);

    // var r = this.add.line(400, 300, 0, 0, 200, 0, 0x00ff00).setLineWidth(10, 40);

    // r.setAlpha(0.5);
    // r.setAngle(20);
    // r.setSize(400, 40);
    // r.setOrigin(1);

    this.input.on('pointermove', function (pointer) {

        r.x = pointer.x;
        r.y = pointer.y;

    });

}