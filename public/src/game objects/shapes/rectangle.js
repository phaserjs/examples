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
    // var r = this.add.rectangle(400, 300, 300, 300, 0x000088);
    // r.setFillStyle(0x000088, 0.5);
    // r.setStrokeStyle(2, 0xff0000);
    // r.setAlpha(0.5);
    // r.setAngle(20);



    // r.setOrigin(1);
    // r.setFillStyle(0x00ff00);
    // r.setAngle(20);
    // r.setScale(2);
    // r.setAlpha(0.5);

    // console.log(r);

    // var t = this.add.triangle(400, 300, 0, 200, 200, 200, 100, 0);
    // t.setAngle(20);
    // t.setOrigin(1);
    // t.setFillStyle(0xaaaa00);
    // t.setScale(2);
    // t.setAlpha(0.5);
    // t.setStrokeStyle(4, 0xff0000);

    // var t = this.add.circle(400, 300, 140, 0x000088);
    // t.setFillStyle(0xff0000);

    // var t = this.add.arc(400, 300, 200, 0, 200, true, 0x000088);
    // t2.setAngle(45).setSmoothing(0.2);

    // var t = this.add.ellipse(400, 300, 200, 500, 0x000088);
    // t.setStrokeStyle(8, 0xff0000);

    //  Draw an arrow shape
    // var t = this.add.polygon(400, 300, [ 0,20, 250, 20, 250, 0, 300, 50, 250, 100, 250, 80, 0, 80 ], 0x00ff00);
    // t.setStrokeStyle(4, 0xff0000);
    // t.setAngle(25);
    // t.setScale(2, 1);
    // t.setAlpha(0.5);


    // var t = this.add.isobox(400, 300);

    // t.setAngle(25);
    // t.setAlpha(0.5);
    // t.setScale(2);

    // this.tweens.add({

    //     targets: t,
    //     _width: 100,
    //     height: 200,
    //     yoyo: true,
    //     repeat: -1,
    //     ease: 'Sine.easeInOut'

    // });

    var t = this.add.star(400, 300);

    // t.setAngle(20);
    // t.setScale(2);

    t.setFillStyle(0x000088);

    // t.setOrigin(0.5, 0);

    t.setStrokeStyle(4, 0xff0000);


    // this.input.on('pointermove', function (pointer) {

    //     t.x = pointer.x;
    //     t.y = pointer.y;

    // });



}