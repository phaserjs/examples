var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    //  128 x 128
    this.load.image('pic1', 'assets/pics/lance-overdose-loader-eye.png');

    //  485 x 576
    this.load.image('pic2', 'assets/pics/kris-jovo.jpg');

    //  frame: phaser2 - 382 x 331}
    this.load.atlas('megaset', 'assets/atlas/megaset-0.png', 'assets/atlas/megaset-0.json');
}

function create ()
{
    // var bob = this.add.image(400, 300, 'pic1');

    this.add.image(400, 300, 'pic2').setAlpha(0.2).setFlipX(true);

    var bob = this.add.image(400, 300, 'pic2').setFlipX(true);

    // var bob = this.add.image(400, 300, 'megaset', 'phaser2');

    // var u0 = (frameX / textureWidth) + uOffset;
    // var v0 = (frameY / textureHeight) + vOffset;
    // var u1 = (frameX + frameWidth) / textureWidth + uOffset;
    // var v1 = (frameY + frameHeight) / textureHeight + vOffset;

    //  displayWidth + frameWidth

    // bob._crop = {
    //     u0: 0,
    //     v0: 0,
    //     u1: 0.5,
    //     v1: 1,
    //     width: 64,
    //     height: 128
    // };

    // bob._crop = {
    //     u0: 0,
    //     v0: 0,
    //     u1: 0.5,
    //     v1: 1,
    //     width: 485 / 2,
    //     height: 576
    // };

    //  texture size: 485 x 576
    // var x = 50;
    // var y = 0;

    //  frameWidth needs the x value removed from it to crop from the left

    var offset = bob.getTopLeft();

    // this.input.on('pointermove', function (pointer) {

    //     bob.setCrop((pointer.x - offset.x) - 100, (pointer.y - offset.y) - 100, 200, 200);

    // });

    var x = 0;
    var y = 0;
    var w = 300;
    var h = 100;

    bob.setCrop(0, 0, 300, 100);

    this.input.keyboard.on('keydown_LEFT', function () {

        x -= 10;

        bob.setCrop(x, y, w, h);

    });

    this.input.keyboard.on('keydown_RIGHT', function () {

        x += 10;

        bob.setCrop(x, y, w, h);

    });

    this.input.keyboard.on('keydown_UP', function () {

        y -= 10;

        bob.setCrop(x, y, w, h);

    });

    this.input.keyboard.on('keydown_DOWN', function () {

        y += 10;

        bob.setCrop(x, y, w, h);

    });


    /*
    bob._crop = {
        u0: (x / 485),
        v0: (y / 576),
        u1: (x + 435) / 485,
        v1: (y + 576) / 576,
        width: 435,
        height: 576,
        frameX: 50,
        frameY: 0
    };
    */

    // "frame": {"x":444,"y":121,"w":382,"h":331},

    //  texture w/h = 1024
    //  382 / 2 = 191

    // bob._crop = {
    //     u0: (444 / 1024),
    //     v0: (121 / 1024),
    //     u1: (444 + 191) / 1024,
    //     v1: (121 + 331) / 1024,
    //     width: 191,
    //     height: 331
    // };
}
