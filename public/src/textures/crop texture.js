var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var bob;
var graphics;
var offset;
var c = { x: 0, y: 0, w: 200, h: 100 };

var game = new Phaser.Game(config);

function preload ()
{
    //  128 x 128
    this.load.image('pic1', 'assets/pics/lance-overdose-loader-eye.png');

    //  485 x 576
    this.load.image('pic2', 'assets/pics/kris-jovo.jpg');

    //  800 x 600
    this.load.image('pic3', 'assets/pics/bw-face.png');

    this.load.atlas('megaset', 'assets/atlas/megaset-0.png', 'assets/atlas/megaset-0.json');
    this.load.atlas('megaset2', 'assets/atlas/megaset-2.png', 'assets/atlas/megaset-2.json');
}

function create ()
{
    // var bob = this.add.image(400, 300, 'pic1');

    // this.add.image(400, 300, 'pic3').setAlpha(0.2).setFlipY(true);
    // bob = this.add.image(400, 300, 'pic3').setFlipY(true);

    // this.add.image(400, 300, 'pic2').setAlpha(0.2).setFlipX(true);
    // bob = this.add.image(400, 300, 'pic2').setFlipX(true);

    // this.add.image(400, 300, 'pic3').setAlpha(0.2).setFlipX(true).setFlipY(true);
    // bob = this.add.image(400, 300, 'pic3').setFlipX(true).setFlipY(true);

    this.add.image(400, 300, 'pic2').setAlpha(0.2).setFlipX(true);
    bob = this.add.image(400, 300, 'pic2').setFlipX(true);


    //  The same 200x100 crop rect positioned in the same place (20, 20) gives the following UV coordinates:
    //  Based on 485 x 576 single frame texture (non-atlas)

    //  flippedX:
    //  0.5463917525773195 0.034722222222222224 0.9587628865979382 0.20833333333333334

    //  un-flippedX:
    //  0.041237113402061855 0.034722222222222224 0.4536082474226804 0.20833333333333334



    // var bob = this.add.image(400, 300, 'pic3');

    /*
    {
        191

        "filename": "phaser2",
        "frame": {"x":444,"y":121,"w":382,"h":331},
        "rotated": false,
        "trimmed": false,
        "spriteSourceSize": {"x":0,"y":0,"w":382,"h":331},
        "sourceSize": {"w":382,"h":331},
        "pivot": {"x":0.5,"y":0.5}

        {
            "filename": "snake",
            "frame": {"x":2,"y":2,"w":918,"h":117},
            "rotated": false,
            "trimmed": false,
            "spriteSourceSize": {"x":0,"y":0,"w":918,"h":117},
            "sourceSize": {"w":918,"h":117},
            "pivot": {"x":0.5,"y":0.5}
        },

        {
            "filename": "hello",
            "frame": {"x":2,"y":423,"w":549,"h":82},
            "rotated": false,
            "trimmed": true,
            "spriteSourceSize": {"x":125,"y":259,"w":549,"h":82},
            "sourceSize": {"w":800,"h":600},
            "pivot": {"x":0.5,"y":0.5}
        },
        {
            "filename": "ra_dont_crack_under_pressure",
            "frame": {"x":252,"y":507,"w":232,"h":328},
            "rotated": false,
            "trimmed": false,
            "spriteSourceSize": {"x":0,"y":0,"w":232,"h":328},
            "sourceSize": {"w":232,"h":328},
            "pivot": {"x":0.5,"y":0.5}
        },


    },
    */

    // this.add.image(400, 300, 'megaset2', 'ra_dont_crack_under_pressure').setAlpha(0.2).setFlipX(false);
    // var bob = this.add.image(400, 300, 'megaset2', 'ra_dont_crack_under_pressure').setFlipX(false);

    // this.add.image(400, 300, 'megaset2', 'hello').setAlpha(0.2).setFlipX(false);
    // bob = this.add.image(400, 300, 'megaset2', 'hello').setFlipX(false);

    offset = bob.getTopLeft();

    graphics = this.add.graphics();

    // var offset = bob.getTopLeft();

    // this.input.on('pointermove', function (pointer) {

    //     bob.setCrop((pointer.x - offset.x) - 100, (pointer.y - offset.y) - 100, 200, 200);

    // });

    c.x = 0;
    c.y = 0;
    c.w = 200;
    c.h = 100;

    bob.setCrop(c.x, c.y, c.w, c.h);

    this.input.keyboard.on('keydown_LEFT', function () {

        c.x -= 10;

        bob.setCrop(c.x, c.y, c.w, c.h);

    });

    this.input.keyboard.on('keydown_RIGHT', function () {

        c.x += 10;

        bob.setCrop(c.x, c.y, c.w, c.h);

    });

    this.input.keyboard.on('keydown_UP', function () {

        c.y -= 10;

        bob.setCrop(c.x, c.y, c.w, c.h);

    });

    this.input.keyboard.on('keydown_DOWN', function () {

        c.y += 10;

        bob.setCrop(c.x, c.y, c.w, c.h);

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

function update ()
{
    graphics.clear();
    graphics.lineStyle(1, 0x00ff00);
    graphics.strokeRect(offset.x + c.x, offset.y + c.y, c.w, c.h);

    // bob.rotation += 0.01;
}
