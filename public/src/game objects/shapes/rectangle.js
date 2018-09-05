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
    // var r = this.add.rectangle(400, 300, 300, 50);
    // r.setOrigin(1);
    // r.setFillStyle(0x00ff00);
    // r.setAngle(20);
    // r.setScale(2);
    // r.setAlpha(0.5);

    // console.log(r);

    // var t = this.add.triangle(400, 300, 0, 200, 200, 200, 100, 0);
    // t.setAngle(20);
    // t.setOrigin(1);
    // t.setFillStyle(0xff0000);
    // t.setScale(2);
    // t.setAlpha(0.5);

    // this.input.on('pointermove', function (pointer) {

    //     t.x = pointer.x;
    //     t.y = pointer.y;

    // });

    // var t = this.add.circle(400, 300, 140);

    // t.setFillStyle(0xff0000);

    // var t2 = this.add.arc(400, 300, 200, 0x00ff00, 1, 0, 180);
    // t2.setAngle(45).setSmoothing(0.2);

    //  Draw an arrow shape
    var t = this.add.polygon(200, 100, [ 0,20, 250, 20, 250, 0, 300, 50, 250, 100, 250, 80, 0, 80 ], 0x00ff00);
    t.setAngle(25);
    t.setScale(2, 1);
    t.setAlpha(0.5);

}